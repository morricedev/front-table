import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    height: 6rem;
    display: flex;
    align-items: center;
  `}
`;

export const Logo = styled.img`
  margin-left: 3.2rem;
`;
