export default function PopupWithForm() {}

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
          disabled={true}
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

    <form className="delete" name="delete">
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

    <form className="edit" id="edit" name="edit">
      <div className="edit__popup">
        <h2 className="edit__popup-title">Editar perfil</h2>
        <input
          className="edit__input-name edit__input-name:focus"
          type="text"
          name="name"
          placeholder="Nome"
          required
        />
        <span className="span span_name-message"></span>
        <input
          className="edit__input-about"
          type="text"
          name="about"
          placeholder="Sobre mim"
          required
        />
        <span className="span span_about-message"></span>
        <button name="button" className="edit__button-save" type="submit">
          <span className="loading-button-text">Salvar</span>
          <span className="loading-container">
            <span className="loading-text">Salvando...</span>
            <span className="loading-animation"></span>
          </span>
        </button>
        <button
          id="edit-close-button"
          className="edit__button-close-popup button-close-popup"
        ></button>
      </div>
    </form>

 

    <form className="include" id="include" name="include">
      <div className="include__popup">
        <h2 className="include__popup-title">Novo local</h2>
        <input
          className="include__input-title input"
          type="text"
          name="title"
          placeholder="Título"
          required
        />
        <span className="span span_title-message"></span>
        <input
          className="include__input-link input"
          type="url"
          name="url"
          placeholder="URL da imagem"
          required
        />
        <span className="span span_url-message"></span>
        <button
          name="button"
          className="include__button-save include__button-save_disabled"
          type="submit"
          disabled
        >
          <span className="loading-button-text">Criar</span>
          <span className="loading-container">
            <span className="loading-text">Salvando...</span>
            <span className="loading-animation"></span>
          </span>
        </button>
        <button
          id="include-close-button"
          className="include__button-close-popup button-close-popup"
        ></button>
      </div>
    </form>
  </>
);
