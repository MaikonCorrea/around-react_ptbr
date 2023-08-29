import React, { useEffect, useState } from "react";
import iconDelete from "../images/image_delete.png";
import iconLike from "../images/button_Like_Desable.png";
import { clientAPI } from "../utils/Api";

export default function Card(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    clientAPI.getCards().then((result) => {
      setCards(result);
    });
  }, []);

  function handleClick(card) {
    props.onCardClick(card);   
  }  


  return (
    <ul className="gallery">
      {cards.map((card, index) => (
        <li className="place" key={index}>
          <img className="place__image" src={card.link} alt={card.name} onClick={() => handleClick(card)} />
          <button className="place__button-delete">
            <img src={iconDelete} alt="botão para excluir postagem" />
          </button>
          <div className="place__data">
            <h3 className="place__title">{card.name}</h3>
            <div className="place__like">
              <button className="place__button-like">
                <img src={iconLike} alt="botão para curtir postagem" />
              </button>
              <p className="place__like-number">{card.likes.length}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
