import styled from "styled-components";

interface IUnitMeasurementProps {
    backgroundColor: string
    fontSize: string
}

export const UnitMeasurementWrapper = styled.div<IUnitMeasurementProps>`
  padding-left: 17px;
  padding-right: 17px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.theme.size.borderRadius};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  right: 7px;
  bottom: 7px;
  font-family: 'Nekst-Black';
  font-style: normal;
  font-weight: 900;
  font-size: ${props => props.fontSize};
  line-height: 36px;
`