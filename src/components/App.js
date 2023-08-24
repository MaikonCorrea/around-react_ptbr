import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import Api from "./Api";
import PopupWithForm from "./PopupWithForm";

import "../index.css";

import { useEffect, useState } from "react";

export default function App() {
  const [cards, setCards] = useState([]);
  const clientAPI = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_05",
    token: "e2bad784-3e1f-478a-b640-635d640e7341",
  });
  useEffect(() => {
    clientAPI.getCards().then((result) => {
      setCards(result);
    });
  }, []);

  function handleDelete(cardId) {
    clientAPI.deleteCard(cardId).then(() => {
      setCards(cards.filter((card) => card.id !== cardId));
    });
  }

  return (
    <>
      <Header />
      <Main />
      <ul className="gallery">
        {cards.map((card, index) => (
          <Card key={index} card={card} onDelete={handleDelete} />
        ))}
      </ul>

      <form className="screen">
        <div className="screen__image-popup">
          <button
            id="screen-close-button"
            className="screen__button-close-popup button-close-popup"
          ></button>
          <img
            className="screen__image-dynamics"
            src="#"
            alt="#"
          />
          <h3 className="screen__popup-title">#</h3>
        </div>
      </form>

      <PopupWithForm
        name="photograph"
        title="Alterar a foto do perfil"
        fields={
          <>
            <input
              className="photograph__input-link input"
              type="url"
              name="urlPhoto"
              placeholder="URL da imagem"
              required
            />
            <span className="span span_urlPhoto-message"></span>
          </>
        }
        submitButtonText="Salvar"
      />

      {/* Pop-up de Confirmação de Deletar Card */}
      <PopupWithForm
        name="delete"
        title="Tem certeza?"
        fields={null}
        submitButtonText="Sim"
      />

      <PopupWithForm
        name="edit"
        title="Editar perfil"
        fields={
          <>
            <input
              className="edit__input-name edit__input-name:focus"
              type="text"
              name="name"
              placeholder="Nome"
              required
            />
            <span className="span span_name-message"></span>
            <input
              className="edit__input-about"
              type="text"
              name="about"
              placeholder="Sobre mim"
              required
            />
            <span className="span span_about-message"></span>
          </>
        }
        submitButtonText="Salvar"
      />

      <PopupWithForm
        name="include"
        title="Novo local"
        fields={
          <>
            <input
              className="include__input-title input"
              type="text"
              name="title"
              placeholder="Título"
              required
            />
            <span className="span span_title-message"></span>
            <input
              className="include__input-link input"
              type="url"
              name="url"
              placeholder="URL da imagem"
              required
            />
            <span className="span span_url-message"></span>
          </>
        }
        submitButtonText="Criar"
      />

      <Footer />
    </>
  );
}
