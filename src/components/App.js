import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import Api from "./Api";
import PopupDeleteCard from "./PopupDeleteCard";

import "../index.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const clientAPI = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_05",
    token: "e2bad784-3e1f-478a-b640-635d640e7341",
  });

  useEffect(() => {
    clientAPI.getCards().then((result) => {
      setCards(result);
    });
  }, []);

  function handleDeleteCard(cardId) {

    setSelectedCardId(cardId);
  }

  function handleClosePopup() {
    setSelectedCardId(null);
  }

  function handleConfirmDelete() {
    if (selectedCardId) {
      clientAPI.deleteCard(selectedCardId).then(() => {
        setCards(cards.filter((card) => card._id !== selectedCardId));
        setSelectedCardId(null);
      });
    }
  }

  return (
    <>
      <Header />
      <Main />
      <ul className="gallery">
        {cards.map((card, index) => (
          <Card key={index} card={card} onDelete={handleDeleteCard} />
        ))}
      </ul>
      
      <Footer />
      {selectedCardId && (
        <PopupDeleteCard
          onClose={handleClosePopup}
          onDelete={handleConfirmDelete}
          isOpen={selectedCardId !== null}
        />
      )}
    </>
  );
}
