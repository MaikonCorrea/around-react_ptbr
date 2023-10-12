import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { clientAPI } from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CurrentCardsContext from "../contexts/CurrentCardsContext";

import "../index.css";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    clientAPI.getUsers().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  useEffect(() => {
    clientAPI.getCards().then((result) => {
      setCards(result);
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(updatedUser) {
    renderLoading(true)
    clientAPI
      .updateDescriptionPerfil(updatedUser)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o perfil:", error);
      })
      .finally(() => {
        renderLoading(false)
      });
  }

  function handleUpdateAvatar(onUpdateAvatar) {
    renderLoading(true);
    clientAPI
      .getProfilePicture(onUpdateAvatar)
      .then((res) => {
        setCurrentUser(res);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o avatar:", error);
      })
      .finally(() => {
        renderLoading(false)
      });
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const apiMethod = isLiked ? "deleteLike" : "addLike";
    clientAPI[apiMethod](card._id)
      .then((updatedCard) => {
        const updatedCards = cards.map((c) =>
          c._id === updatedCard._id ? updatedCard : c
        );
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a curtida:", error);
      })
  }

  function handleCardDelete(card) {
    clientAPI.deleteCard(card._id).then(() => {
      const updatedCards = cards.filter((c) => c._id !== card._id);
      setCards(updatedCards);
    });
  }

  function handleAddPlaceSubmit(handleAddPlaceSubmit) {
    renderLoading(true)
    clientAPI.createCards(handleAddPlaceSubmit).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    })
    .finally(() => {
      renderLoading(false)
    });
  }
  
  function renderLoading(isLoading) {
    const textButton = document.querySelector(".loading-button-text");
    const loading = document.querySelector(".loading-container");
    if (isLoading) {
      textButton.classList.add("loading-closed");
      loading.classList.add("loading-opened");
    } else {
      loading.classList.remove("loading-opened");
      textButton.classList.remove("loading-closed");
    }
  }

  return (
    <>
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentCardsContext.Provider value={cards}>
          <Main
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onCardClick={handleCardClick}
            setCards={setCards}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          {selectedCard && (
            <ImagePopup
              card={selectedCard}
              isOpen={true}
              onClose={closeAllPopups}
            />
          )}

          {isEditAvatarPopupOpen && (
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onSave={handleUpdateAvatar}
              onUpdateAvatar={handleUpdateAvatar}
            />
          )}

          {isEditProfilePopupOpen && (
            <EditProfilePopup
              isOpen={handleEditProfileClick}
              onClose={closeAllPopups}
              onSave={handleUpdateUser}
              onUpdateUser={handleUpdateUser}
            />
          )}

          {isAddPlacePopupOpen && (
            <AddPlacePopup
              isOpen={handleAddPlaceClick}
              onClose={closeAllPopups}
              onAddPlaceSubmit={handleAddPlaceSubmit}
            />
          )}

          <Footer />
        </CurrentCardsContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}
