import * as S from "./styles";

import logoImg from "../../assets/img/logo.svg";

export function Header() {
  return (
    <S.Header>
      <S.Logo src={logoImg} alt="Be mobile" />
    </S.Header>
  );
}
