import "./style.css";

import logoImg from "../../assets/img/logo.svg";

export function Header() {
  return (
    <header>
      <img className="logo" src={logoImg} alt="Be mobile" />
    </header>
  );
}
