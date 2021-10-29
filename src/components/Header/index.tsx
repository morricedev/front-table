import "./style.css";

import logoImg from "../../assets/img/logo.svg";

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="Be mobile" />
    </header>
  );
}
