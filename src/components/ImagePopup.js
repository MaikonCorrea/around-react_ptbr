import React from "react";

export default function ImagePopup() {
  return (
    <div className="screen">
      <div className="screen__image-popup">
        <button className="screen__button-close-popup button-close-popup"></button>
        <img className="screen__image-dynamics" src="#" alt="#" />
        <h3 className="screen__popup-title">#</h3>
      </div>
    </div>
  );
}
