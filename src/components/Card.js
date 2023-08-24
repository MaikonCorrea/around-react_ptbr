import iconDelete from "../images/image_delete.png";
import iconLike from "../images/button_Like_Desable.png";

export default function Card({card, onDelete}) {


  function deleteCard() {
    onDelete(card._id)
  }

    return (
        <li className="place" id="#">
          <img className="place__image" src={card.link} alt={card.name} />
          <button className="place__button-delete" onClick={deleteCard}>
            <img src={iconDelete} alt="botão para excluir postagem" />
          </button>
          <div className="place__data">
            <h3 className="place__title">{card.name}</h3>
            <div className="place__like">
              <button className="place__button-like">
                <img src={iconLike} alt="botão para curtir postagem" />
              </button>
              <p className="place__like-number">{card.likes.length}</p>
            </div>
          </div>
        </li>
    )
}