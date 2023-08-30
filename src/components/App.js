import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { clientAPI } from "../utils/Api";

import "../index.css";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    clientAPI.getCards().then((result) => {
      setCards(result);
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    console.log(cards);
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
      <Main
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        cards={cards}
        onCardClick={handleCardClick}
      />

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
        <PopupWithForm
          name="edit"
          title="Editar perfil"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopus}
        >
          <input
            className="edit__input-name edit__input-name:focus"
            type="text"
            name="name"
            placeholder="Nome"
          />
          <span className="span span_name-message"></span>
          <input
            className="edit__input-about"
            type="text"
            name="about"
            placeholder="Sobre mim"
          />
          <span className="span span_about-message"></span>
        </PopupWithForm>
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
