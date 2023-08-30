import React from "react";
import iconDelete from "../images/image_delete.png";
import iconLike from "../images/button_Like_Desable.png";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="place" key={props.card._id}>
      <img
        className="place__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={() => handleClick(props.card)}
      />
      <button className="place__button-delete">
        <img src={iconDelete} alt="botão para excluir postagem" />
      </button>
      <div className="place__data">
        <h3 className="place__title">{props.card.name}</h3>
        <div className="place__like">
          <button className="place__button-like">
            <img src={iconLike} alt="botão para curtir postagem" />
          </button>
          <p className="place__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
