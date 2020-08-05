import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { breakpoints } from 'styles/global';

export const Wrapper = styled.footer`
  padding: 78px 40px 0;
  background-color: ${(props) => props.theme.colors.lightTeal};

  @media ${breakpoints.sm} {
    padding-top: 40px;
  }
`;

export const LogoContainer = styled(Col)`
  padding-left: 38px;

  @media ${breakpoints.sm} {
    padding-left: unset;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const GroupText = styled.h5`
  font-size: ${(props) => props.theme.textSizes.small};
  color: ${(props) => props.theme.colors.tealLight};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 2.4px;
  text-transform: uppercase;
  margin-bottom: 17px;
`;

export const LinkText = styled.a`
  display: block;
  font-size: ${(props) => props.theme.textSizes.regular};
  color: ${(props) => props.theme.colors.tealDark};
  font-family: ${(props) => props.theme.fonts.helvetica};
  text-transform: capitalize;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

export const IconContainer = styled.div`
  flex: display;
  flex-direction: row;
`;

export const Icon = styled.span`
  margin-right: 30px;
`;

export const Divider = styled.hr`
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  margin-top: 4rem;
  margin-bottom: 0;
  opacity: 0.3;
`;

export const CopyrightText = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  font-size: ${(props) => props.theme.textSizes.small};
  color: rgba(108, 108, 108, 0.5);
`;
