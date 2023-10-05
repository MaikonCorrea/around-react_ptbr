import React, { useRef  } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarInputRef = useRef(null);

  const handleSubmit = () => {
    const avatarSrc = avatarInputRef.current.value;
    onUpdateAvatar({
      avatar: avatarSrc,
    });
  };;
    

    return(
        <PopupWithForm
              name="photograph"
              title="Alterar a foto do perfil"
              isOpen={isOpen}
              onClose={onClose}
              onSubmit={handleSubmit}
            >
              <input
                className="photograph__input-link input"
                type="url"
                name="urlPhoto"
                placeholder="URL da imagem"
                ref={avatarInputRef}
              ></input>
              <span className="span span_urlPhoto-message"></span>
            </PopupWithForm>
    )
}