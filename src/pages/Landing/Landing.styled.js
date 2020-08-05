import styled from 'styled-components';

export const Hero = styled.section`
  background: url(/assets/hair-cat-header.png) center;
  background-size: cover;
  min-height: 680px;
  padding: 30px 0 0 80px;

  article {
    max-width: 380px;
    margin: 22px 0 38px;

    p {
      font-size: ${(props) => props.theme.textSizes.large};
      font-family: ${(props) => props.theme.fonts.helvetica};
      line-height: 26px;
    }
  }
`;

export const HeroText = styled.h1`
  font-size: ${(props) => props.theme.textSizes.xLarge};
  color: ${(props) => props.theme.colors.tealDark};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: ${props => props.theme.fontWeight.bold};
  padding-top: 6.5rem;
  text-transform: uppercase;
  max-width: 600px;
  margin-bottom: 0;
  line-height: 98px;
`;
