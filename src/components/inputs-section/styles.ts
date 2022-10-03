import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  @media ${props => props.theme.media.laptop}
  , ${props => props.theme.media.tablet}
  , ${props => props.theme.media.phone} {
    grid-template-columns: 1fr
  }
`;