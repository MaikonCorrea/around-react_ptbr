import React, { useState, useEffect } from "react";


export default function PopupDeleteCard({ onClose, onDelete, isOpen }) {
    const [visibleClass, setVisibleClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setVisibleClass("popup_opened");
      }, 100);
    } else {
      setVisibleClass("");
    }
  }, [isOpen]);

  const popupClass = `delete ${visibleClass}`;

  return (
<form className={popupClass} name="delete" >
        <div className="delete__popup">
          <h2 className="delete__popup-title">Tem certeza?</h2>
          <button name="button" className="delete__button-save" id="delete-button" type="submit" onClick={onDelete}>
            <span className="loading-button-text">Sim</span>
            <span className="loading-container">
              <span className="loading-text">Salvando...</span>
              <span className="loading-animation"></span>
            </span>
          </button>
          <button className="delete__button-close-popup button-close-popup" onClick={onClose}></button>
        </div>
      </form>
  );
}
