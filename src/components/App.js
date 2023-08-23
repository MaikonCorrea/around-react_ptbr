import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <body className="page">
        <Header />
        <Main />
        <Footer />
        <template id="gallery__card">
          <li className="place" id="000">
            <img
              className="place__image"
              src="https://images.unsplash.com/photo-1565108150023-cc0fd1054149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Yellostone National Park"
            />
            <button className="place__button-delete">
              <img
                src="<%= require('./images/image_delete.png')%>"
                alt="botão para excluir postagem"
              />
            </button>
            <div className="place__data">
              <h3 className="place__title"></h3>
              <div className="place__like">
                <button className="place__button-like">
                  <img
                    src="<%= require('./images/button_Like_Desable.png')%>"
                    alt="botão para curtir postagem"
                  />
                </button>
                <p className="place__like-number">0</p>
              </div>
            </div>
          </li>
        </template>
      </body>
    </div>
  );
}
