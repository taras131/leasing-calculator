import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 1px;
    outline: none;

    &:disabled {
      opacity: 0.4;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: ${props => props.theme.colors.primary};
      border-radius: 100%;
      cursor: pointer;
      -webkit-transition: .2s;
      transition: all .2s;

      &:hover {
        width: 24px;
        height: 24px;
      }
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: ${props => props.theme.colors.primary};
      border-radius: 100%;
      cursor: pointer;
      -webkit-transition: .2s;
      transition: all .2s;

      &:hover {
        width: 24px;
        height: 24px;
      }
    }
  }
`;