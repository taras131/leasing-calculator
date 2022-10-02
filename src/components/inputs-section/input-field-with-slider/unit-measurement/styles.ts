import styled from "styled-components";

interface  IUnitMeasurementProps {
    backgroundColor: string
}

export const UnitMeasurementWrapper = styled.div<IUnitMeasurementProps>`
  padding-left: 17px;
  padding-right: 17px;
  background-color: ${props => props.backgroundColor} ;
  border-radius: 16px;
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
  font-size: 30px;
  line-height: 36px;

`