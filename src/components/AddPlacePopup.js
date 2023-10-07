import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { owner } from "../utils/constants";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    onAddPlaceSubmit({
      likes: [],
      name: title,
      link: imageUrl,
      owner: owner,
    });
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <PopupWithForm
      name="include"
      title="Novo local"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="include__input-title input"
        type="text"
        name="title"
        placeholder="Título"
        onChange={handleTitleChange}
      />
      <span className="span span_name-message"></span>
      <input
        className="include__input-link input"
        type="url"
        name="url"
        placeholder="URL da imagem"
        onChange={handleImageUrlChange}
      />
      <span className="span span_about-message"></span>
    </PopupWithForm>
  );
}
