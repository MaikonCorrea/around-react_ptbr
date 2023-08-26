import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import Api from "./Api";
import PopupWithForm from "./PopupWithForm";

import "../index.css";

export default function App() {
  const [cards, setCards] = useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isSelectedCardId, setSelectedCardId] = useState(false);


  const clientAPI = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_05",
    token: "e2bad784-3e1f-478a-b640-635d640e7341",
  });

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

  function handleConfirmDeleteClick(id) {
    setSelectedCardId(true)
    console.log(id)
   /*  if (setSelectedCardId) {
      clientAPI.deleteCard(setSelectedCardId).then(() => {
        setCards(cards.filter((card) => card._id !== setSelectedCardId));
        setSelectedCardId(null);
      });
    } */
  }

  function closeAllPopus() {
    setSelectedCardId(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
      />
      <ul className="gallery">
        {cards.map((card, index) => (
          <Card key={index} card={card} 
          onDelete={handleConfirmDeleteClick}
          />
        ))}
      </ul>
      {/* Pop-up de Edição de Foto de Perfil */}
     {isEditAvatarPopupOpen && (<PopupWithForm
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
      </PopupWithForm>)}
      {/* Pop-up de Confirmação para deletar */}
      {isSelectedCardId && (<PopupWithForm
        name="delete"
        title="Tem certeza?"
        isOpen={isSelectedCardId}
        onClose={closeAllPopus}

      />)}

      {/* Pop-up de edição de perfil */}
      {isEditProfilePopupOpen && (<PopupWithForm
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
      </PopupWithForm>)}

      {/* Pop-up de edição de perfil */}
      {isAddPlacePopupOpen && (<PopupWithForm
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
      </PopupWithForm>)}

      <Footer />
    </>
  );
}
