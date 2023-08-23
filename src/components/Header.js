import headerLogo from "../images/Vector_Around.png"

export default function Header() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="logo do site" />
        <div className="header__line"></div>
      </header>
    </div>
  );
}
