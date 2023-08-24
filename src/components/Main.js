import contentImageProfile from "../images/profile_image.png";
import contentImageEdit from "../images/VectorEditImage.png";
import contentImageInclude from "../images/vectoradd.png";

export default function Main() {

function handleEditAvatarClick() {
const popupEditImage = document.querySelector(".photograph")
popupEditImage.classList.add("popup_opened")
}

function handleEditProfileClick() {
  const popupEditProfile = document.querySelector(".edit")
  popupEditProfile.classList.add("popup_opened")
}

function handleAddPlaceClick() {
  const popupIncludeProfile = document.querySelector(".include")
  popupIncludeProfile.classList.add("popup_opened")
}


  return (
      <>
        <section className="profile">
          <button className="profile__button-edit-image" onClick={handleEditAvatarClick}>
            <img
              className="profile__image"
              src={contentImageProfile}
              alt="imagem de perfil do usuário"
            />
          </button>
          <div className="profile__info">
            <p className="profile__info-name" id="profileName">
              Jacques Cousteau
            </p>
            <button className="profile__button-info" onClick={handleEditProfileClick} type="button">
              <img
                className="profile__image-button-info"
                src={contentImageEdit}
                alt="botão para alterar perfil"
              />
            </button>
            <p className="profile__info-discription">Explorar</p>
          </div>
          <button className="profile__button-include" onClick={handleAddPlaceClick} type="button">
            <img
              src={contentImageInclude}
              alt="botão para adicionar nava imagem"
            />
          </button>
        </section>
      </>
  );
}
