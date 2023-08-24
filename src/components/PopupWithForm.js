
export default function PopupWithForm({ name, title, fields, submitButtonText }) {
    return (
      <form className={name} name={name}>
        <div className={`${name}__popup`}>
          <h2 className={`${name}__popup-title`}>{title}</h2>
          {fields}
          <button name="button" className={`${name}__button-save`} type="submit">
            <span className="loading-button-text">{submitButtonText}</span>
            <span className="loading-container">
              <span className="loading-text">Salvando...</span>
              <span className="loading-animation"></span>
            </span>
          </button>
          <button className={`${name}__button-close-popup button-close-popup`}>{''}</button>
        </div>
      </form>
    );
  }
    

