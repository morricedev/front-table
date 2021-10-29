import styled, { css } from "styled-components";

export const Spinner = styled.div`
  ${({ theme }) => css`
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }

    &::after {
      width: 3rem;
      height: 3rem;
      border-left: 0.5rem solid ${theme.colors.primary};
      border-top: 0.5rem solid ${theme.colors.primary};
      animation: rotate 1s linear infinite;
    }

    &::before {
      width: 1rem;
      height: 1rem;
      border-left: 0.5rem solid ${theme.colors.primary};
      border-top: 0.5rem solid ${theme.colors.primary};
      animation: rotate 1s linear reverse infinite;
    }

    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`;
