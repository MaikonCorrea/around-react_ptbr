import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import Api from "./Api";

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
            alt="Imagem em tela cheia"
          />
          <h3 className="screen__popup-title">#</h3>
        </div>
      </form>

      <Footer />
    </>
  );
}
