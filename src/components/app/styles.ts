import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    max-width: 1440px;
    padding: 48px 44px;
    
  }

  .header_container{
    max-width: 750px;
  }
  
  h1 {
    text-align: left;
    font-family: 'Nekst-Black';
    font-weight: 900;
    font-size: 54px;
    line-height: 90%;
  }
  @media ${props => props.theme.media.tablet} {
    main{
      padding: 48px 36px;
    }
  }
  @media ${props => props.theme.media.phone} {
    main{
      padding: 48px 20px;
    }
    h1 {
      font-size: 34px;
    }
  }
`;
