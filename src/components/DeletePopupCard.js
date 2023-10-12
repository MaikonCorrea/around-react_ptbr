import React, { useState } from "react";

export default function DeletePopupCard() {
  const [isSaving, setIsSaving] = useState(false);

  return (
    <form className="delete" name="delete" novalidate>
      <div className="delete__popup">
        <h2 className="delete__popup-title">Tem certeza?</h2>
        <button
          name="button"
          className="delete__button-save"
          id="delete-button"
          type="submit"
        >
          <span className="loading-button-text">Sim</span>
          <span className="loading-container">
            <span className="loading-text">Salvando...</span>
            <span className="loading-animation"></span>
          </span>
        </button>
        <button className="delete__button-close-popup button-close-popup"></button>
      </div>
    </form>
  );
}
