import React, { useEffect, useState } from "react";
import Card from "./Card";
import contentImageEdit from "../images/VectorEditImage.png";
import contentImageInclude from "../images/vectoradd.png";
import { clientAPI } from "../utils/Api";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  cards,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const hasCards = Boolean(cards.length);

  useEffect(() => {
    clientAPI.getUsers().then((res) => {
      setUserName(res.name);
      setUserAvatar(res.avatar);
      setUserDescription(res.about);
    });
  });

  return (
    <>
      <section className="profile">
        <button
          className="profile__button-edit-image"
          type="button"
          onClick={onEditAvatarClick}
        >
          <img
            className="profile__image"
            src={userAvatar}
            alt="imagem de perfil do usuário"
          />
        </button>
        <div className="profile__info">
          <p className="profile__info-name" id="profileName">
            {userName}
          </p>
          <button
            className="profile__button-info"
            onClick={onEditProfileClick}
            type="button"
          >
            <img
              className="profile__image-button-info"
              src={contentImageEdit}
              alt="botão para alterar perfil"
            />
          </button>
          <p className="profile__info-discription">{userDescription}</p> //
        </div>
        <button
          className="profile__button-include"
          onClick={onAddPlaceClick}
          type="button"
        >
          <img
            src={contentImageInclude}
            alt="botão para adicionar nava imagem"
          />
        </button>
      </section>

      {hasCards && (
        <ul className="gallery">
          {cards.map((card, index) => (
            <Card key={index} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      )}
    </>
  );
}
