import styled from "styled-components";

const sliderThumbStyles = () => (`
  width: 20px;
  height: 20px;
  background: #FF9514;
  border-radius: 100%;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: all .2s;
  &:hover {
    width: 24px;
    height: 24px;
  }
  &::after {
      content: "";
      position: absolute;
      z-index: 100;
      width: 300px;
      height: 140px;
      background: red;
      left: 0;
      top: 0;
    }
`);

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  position: absolute;
  bottom: 0;
  width: 100%;

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 1px;
    background-color: #E1E1E1;
    outline: none;
    margin-left: 24px;
    margin-right: 24px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${sliderThumbStyles()}
    }

    &::-moz-range-thumb {
      ${sliderThumbStyles()}
    }

  }
`;