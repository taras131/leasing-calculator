import styled from "styled-components";

export const ResultItemWrapper = styled.div`
  width: 100%;
  text-align: left;
  color: ${props => props.theme.colors.text};

  p {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    display: block;
    margin-top: 8px;
    font-family: 'Nekst-Black';
    font-style: normal;
    font-weight: 900;
    font-size: 54px;
    line-height: 90%;
   
  }
  @media ${props => props.theme.media.tablet} {
    span {
      font-size: 44px;
    }
  }
  @media ${props => props.theme.media.phone} {
    span {
      font-size: 24px;
      margin-top: 0;
    }
  }
`;