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
  font-weight: ${(props) => props.theme.fontWeight.bold};
  padding-top: 6.5rem;
  text-transform: uppercase;
  max-width: 600px;
  margin-bottom: 0;
  line-height: 98px;
`;

export const ProductSection = styled.section`
  padding: 80px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.tealDark};

  h2 {
    font-size: 36px;
    font-family: ${(props) => props.theme.fonts.helvetica};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;

export const ProductItem = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1;

  img {
    width: 400px;
    height: 480px;
    object-fit: contain;
    z-index: 1;
  }

  &.reversed {
    img {
      margin-left: -9%;
    }
  }
`;

export const ProductDetails = styled.div`
  margin-left: -9%;
  position: relative;
`;

export const NumberText = styled.span`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: #eeeeee;
  font-size: 427px;
`;

export const ProductSpec = styled.article`
  position: absolute;
  width: 300px;
  top: 25%;
  left: 50%;
  text-align: left;

  h5 {
    font-size: 21px;
    font-family: ${(props) => props.theme.fonts.helvetica};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    margin-bottom: 12px;
    line-height: 1.45;
  }

  p {
    line-height: 1.83;
    font-size: ${(props) => props.theme.textSizes.small};
  }

  &.reversed {
    top: 30%;
    left: 13%;
    text-align: right;
  }
`;

export const Text = styled.h6`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.tealLight};
  letter-spacing: 2.4px;
  font-size: ${(props) => props.theme.textSizes.small};
  margin-bottom: 17px;
  text-transform: uppercase;
`;
