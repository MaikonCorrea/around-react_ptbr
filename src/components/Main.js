import React from "react";

import contentImageProfile from "../images/profile_image.png";
import contentImageEdit from "../images/VectorEditImage.png";
import contentImageInclude from "../images/vectoradd.png";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,}) { 
  return (
    <>
      <section className="profile">
        <button className="profile__button-edit-image" type="button"  onClick={onEditAvatarClick} >
          <img className="profile__image" src={contentImageProfile} alt="imagem de perfil do usuário"  />
        </button>
        <div className="profile__info">
          <p className="profile__info-name" id="profileName">
            Jacques Cousteau
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
          <p className="profile__info-discription">Explorar</p>
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
    </>
  );
}
