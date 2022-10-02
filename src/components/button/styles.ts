import styled from "styled-components";

interface IButtonWrapper {
    events: string;
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: #FFFFFF;
  border: none;
  background-color: #FF9514;
  border-radius: 40px;
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  pointer-events: ${props => props.events};

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
    background-color: #111111;
  }

  &:active {
    background-color: #575757;
    cursor: pointer;
  }

  &:disabled {
    background: rgba(255, 149, 20, 0.4);
  }
`