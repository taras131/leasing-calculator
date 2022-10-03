import styled from "styled-components";

export const InputFieldWrapper = styled.article`
  position: relative;
  label {
    font-family: 'Gilroy';
    float: left;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Input = styled.input`
  padding-left: 24px;
  margin-top: 24px;
  height: 68px;
  background: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.size.borderRadius};
  width: 100%;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: ${props => props.theme.colors.text};
  outline: none;
  outline-offset: 0;
  border: 2px solid transparent;
  &:disabled{
    opacity: 0.4;
  }
  &:focus {
    border: 2px solid ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.white};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 8px;
    font-size: 22px;
  }

`;