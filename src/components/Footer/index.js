import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from 'components/Logo';
import { ReactComponent as FacebookIcon } from 'assets/facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/twitter.svg';
import { ReactComponent as LinkedInIcon } from 'assets/linkedin.svg';
import {
  Wrapper,
  GroupText,
  Icon,
  IconContainer,
  LinkText,
  Divider,
  CopyrightText,
  LogoContainer,
} from './Footer.styled';

const Footer = () => {
  return (
    <Wrapper>
      <Row>
        <LogoContainer xs={12} sm={3}>
          <Logo size='med' />
        </LogoContainer>
        <Col xs={4} sm={2}>
          <GroupText>Product</GroupText>
          <LinkText>Popular</LinkText>
          <LinkText>Trending</LinkText>
          <LinkText>Guided</LinkText>
          <LinkText>Products</LinkText>
        </Col>
        <Col xs={4} sm={2}>
          <GroupText>Company</GroupText>
          <LinkText>Press Releases</LinkText>
          <LinkText>Mission</LinkText>
          <LinkText>Strategy</LinkText>
          <LinkText>About</LinkText>
        </Col>
        <Col xs={4} sm={2}>
          <GroupText>Info</GroupText>
          <LinkText>Support</LinkText>
          <LinkText>Customer Service</LinkText>
          <LinkText>Get Started Guide</LinkText>
        </Col>
        <Col xs={12} sm={3}>
          <GroupText>Follow us</GroupText>
          <IconContainer>
            <Icon>
              <FacebookIcon />
            </Icon>
            <Icon>
              <TwitterIcon />
            </Icon>
            <Icon>
              <LinkedInIcon />
            </Icon>
          </IconContainer>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Divider />
        </Col>
        <Col sm={12}>
          <CopyrightText>© 2019 Manual. All rights reserved.</CopyrightText>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Footer;
