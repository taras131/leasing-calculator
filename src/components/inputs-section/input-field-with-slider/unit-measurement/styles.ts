import styled from "styled-components";

interface IUnitMeasurementProps {
    isLoading: boolean
    isPercent: boolean
}

export const UnitMeasurementWrapper = styled.div<IUnitMeasurementProps>`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.isPercent ? props.theme.colors.darkSecondary : "none"};
  border-radius: ${props => props.theme.size.borderRadius};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 69px;
  right: 7px;
  bottom: 7px;
  font-family: 'Nekst', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${props => props.isPercent ? "22px" : "30px"};
  line-height: 36px;
  opacity: ${props => props.isLoading ? "0.4" : "1"};
`;