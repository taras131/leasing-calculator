import styled from "styled-components";

interface IButtonWrapper {
    disabled: boolean
    isLoading: boolean
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-family: 'Nekst', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: ${props => props.theme.colors.white};
  border: none;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.size.buttonBorderRadius};
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  img {
    width: 21px;
    height: 21px;
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }

  &:active {
    background-color: ${props => props.theme.colors.active};
  }

  &:disabled {
    background: ${props => props.theme.colors.disableButtonBackground};
    cursor: default;
  }

  @media (max-width: 900px) {
    font-size: 22px;

    &:active {
      background-color: ${props => props.theme.colors.active};
    }

    &:hover {
      background-color: ${props => props.theme.colors.primary};
    }

    &:disabled {
      background: ${props => props.theme.colors.disableButtonBackground};
      cursor: default;
    }
  }

  ${({isLoading}) => isLoading && `
    pointer-events: none;
    cursor: default;
  `}
`;