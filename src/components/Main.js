import contentImageProfile from "../images/profile_image.png"
import contentImageEdit from "../images/VectorEditImage.png"
import contentImageInclude from "../images/vectoradd.png"

export default function Main() {
    return (
        <>
        <main className="content">
          <section className="profile">
            <button className="profile__button-edit-image">
              <img className="profile__image"
                src={contentImageProfile}
                alt="imagem de perfil do usuário"
              />
            </button>
            <div className="profile__info">
              <p className="profile__info-name" id="profileName">
                Jacques Cousteau
              </p>
              <button className="profile__button-info" type="button">
                <img
                  src={contentImageEdit}
                  alt="botão para alterar perfil"
                />
              </button>
              <p className="profile__info-discription">Explorar</p>
            </div>
            <button className="profile__button-include" type="button">
              <img
                src={contentImageInclude}
                alt="botão para adicionar nava imagem"
              />
            </button>
            <form className="photograph" name="photograph" novalidate>
              <div className="photograph__popup">
                <h2 className="photograph__popup-title">
                  Alterar a foto do perfil
                </h2>
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
                  disabled="true"
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
            <form className="edit" id="edit" name="edit" novalidate>
              <div className="edit__popup">
                <h2 className="edit__popup-title">Editar perfil</h2>
                <input
                  minlength="2"
                  maxlength="40"
                  className="edit__input-name edit__input-name:focus"
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                />
                <span className="span span_name-message"></span>
                <input
                  minlength="2"
                  maxlength="200"
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
            <form className="screen">
              <div className="screen__image-popup">
                <button
                  id="screen-close-button"
                  className="screen__button-close-popup button-close-popup"
                ></button>
                <img
                  className="screen__image-dynamics"
                  src="https://images.unsplash.com/photo-1565108150023-cc0fd1054149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Imagem em tela cheia"
                />
                <h3 className="screen__popup-title">Yellostone National Park</h3>
              </div>
            </form>
            <form className="include" id="include" name="include" novalidate>
              <div className="include__popup">
                <h2 className="include__popup-title">Novo local</h2>
                <input
                  minlength="2"
                  maxlength="30"
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
          </section>
          <ul className="gallery"></ul>
        </main>
        </>
    )
}