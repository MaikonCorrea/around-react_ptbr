import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Editar perfil"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="edit__input-name edit__input-name:focus"
        type="text"
        name="name"
        placeholder="Nome"
        value={name}
        onChange={handleNameChange}
      />
      <span className="span span_name-message"></span>
      <input
        className="edit__input-about"
        type="text"
        name="about"
        placeholder="Sobre mim"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="span span_about-message"></span>
    </PopupWithForm>
  );
}
