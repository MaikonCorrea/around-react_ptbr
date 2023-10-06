import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
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
    clientAPI
      .updateDescriptionPerfil(updatedUser)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o perfil:", error);
      });
  }

  function handleUpdateAvatar(onUpdateAvatar) {
    clientAPI
      .getProfilePicture(onUpdateAvatar)
      .then((res) => {
        setCurrentUser(res);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o avatar:", error);
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
      });
  }

  function handleCardDelete(card) {
    clientAPI.deleteCard(card._id).then(() => {
      const updatedCards = cards.filter((c) =>
        c._id !== card._id);
      setCards(updatedCards);
    });
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
         cards={cards} // Passa a variável cards como uma prop para o componente Main
         onCardLike={handleCardLike} // Passa a função handleCardLike como uma prop
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
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onSave={handleUpdateUser}
              onUpdateUser={handleUpdateUser}
            />
          )}

          {isAddPlacePopupOpen && (
            <PopupWithForm
              name="include"
              title="Novo local"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
            >
              <input
                className="include__input-title input"
                type="text"
                name="title"
                placeholder="Título"
              />
              <span className="span span_name-message"></span>
              <input
                className="include__input-link input"
                type="url"
                name="url"
                placeholder="URL da imagem"
              />
              <span className="span span_about-message"></span>
            </PopupWithForm>
          )}

          <Footer />
        </CurrentCardsContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}
