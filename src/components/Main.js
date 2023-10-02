import React from "react";
import Card from "./Card";
import contentImageEdit from "../images/VectorEditImage.png";
import contentImageInclude from "../images/vectoradd.png";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CurrentCardsContext from "../contexts/CurrentCardsContext";
import { clientAPI } from "../utils/Api";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  setCards,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CurrentCardsContext);
  const hasCards = Boolean(cards.length);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const apiMethod = isLiked ? 'deleteLike' : 'addLike';

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
//precisa avaliar a lógica pra saber se está correta, mas não tem card para excluir
  function handleCardDelete(card) {
    clientAPI
    .deleteCard(card._id)
    .then((updatedCard) => {
      const updatedCards = cards.filter((c) => 
      c._id === updatedCard._id ? updatedCard : c
      );
      setCards(updatedCards);
    })
    }
  
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
            src={currentUser.avatar}
            alt="imagem de perfil do usuário"
          />
        </button>
        <div className="profile__info">
          <p className="profile__info-name" id="profileName">
            {currentUser.name}
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
          <p className="profile__info-discription">{currentUser.about}</p> //
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
            <Card
              key={index}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
               onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
}
