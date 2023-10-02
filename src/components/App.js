import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { clientAPI } from "../utils/Api";
import CurrentUserContext  from "../contexts/CurrentUserContext";
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
    clientAPI.getUsers()
    .then((res) => {
      setCurrentUser(res);
  })
  },[]);
  
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

  function closeAllPopus() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
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
          />
        </CurrentCardsContext.Provider>
        </CurrentUserContext.Provider>

      {selectedCard && (
        <ImagePopup card={selectedCard} isOpen={true} onClose={closeAllPopus} />
      )}

      {isEditAvatarPopupOpen && (
        <PopupWithForm
          name="photograph"
          title="Alterar a foto do perfil"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopus}
        >
          <input
            className="photograph__input-link input"
            type="url"
            name="urlPhoto"
            placeholder="URL da imagem"
          ></input>
          <span className="span span_urlPhoto-message"></span>
        </PopupWithForm>
      )}

      {isEditProfilePopupOpen && (
         <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopus}/>
      )}

      {isAddPlacePopupOpen && (
        <PopupWithForm
          name="include"
          title="Novo local"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopus}
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
    </>

  );
}
