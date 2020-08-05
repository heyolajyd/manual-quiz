import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle } from './Header.styled';

const Header = ({ questionNumber, questionCount }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Question {questionNumber + 1} of {questionCount}
      </HeaderTitle>
    </HeaderContainer>
  );
};

Header.propTypes = {
  questionNumber: PropTypes.number,
  questionCount: PropTypes.number,
};

export default Header;
