import React from "react";
import PopupWithForm from "./PopupWithForm";


export default function EditProfilePopup() {
    
    return(
        <PopupWithForm
        name="edit"
        title="Editar perfil"
        isOpen={isOpen}
        onClose={onClose}
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
    )
}