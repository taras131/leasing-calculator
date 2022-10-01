import styled from "styled-components";

export const InputFieldWrapper = styled.article`
  position: relative;
`
export const Label = styled.label`
  font-family: 'Gilroy';
  float: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
export const Input = styled.input`
  padding-left: 24px;
  margin-top: 24px;
  height: 68px;
  background: #F3F3F4;
  border-radius: 16px;
  width: 100%;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: #575757;
  outline: none;
  border: 2px solid transparent;
  outline-offset: 0;
  box-sizing: border-box;

  &:focus {
    border: 2px solid #F3F3F4;
    background-color: white;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`