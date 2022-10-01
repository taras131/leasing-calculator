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
    padding-left: 48px;
    padding-right: 48px;
  }

  h1 {
    text-align: left;
  }

  .calculator_section {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`
