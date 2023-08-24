export default function PopupAvatarImage() {

  return (
    <>
      <form className="photograph" name="photograph">
        <div className="photograph__popup">
          <h2 className="photograph__popup-title">Alterar a foto do perfil</h2>
          <input
            className="photograph__input-link input"
            type="url"
            name="urlPhoto"
            placeholder="URL da imagem"
            required
          />
          <span className="span span_urlPhoto-message"></span>
          <button
            name="button"
            className="photograph__button-save photograph__button-save_disabled"
            type="submit"
          >
            <span className="loading-button-text">Salvar</span>
            <span className="loading-container">
              <span className="loading-text">Salvando...</span>
              <span className="loading-animation"></span>
            </span>
          </button>
          <button className="photograph__button-close-popup button-close-popup"></button>
        </div>
      </form>
    </>
  )
}
