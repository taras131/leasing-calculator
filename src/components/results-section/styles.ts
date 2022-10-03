import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin-top: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  align-items: center;
  @media ${props => props.theme.media.laptop} , ${props => props.theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
    margin-top: 37px;
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr;
    margin-top: 16px;
  }
`;