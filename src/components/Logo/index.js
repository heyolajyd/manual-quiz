import React from 'react';
import PropTypes from 'prop-types';
import { ManualLogo } from './Logo.styled';

const Logo = ({ size }) => {
  let logoStyles = {};

  if (size === 'med') {
    logoStyles = { width: 80, height: 75 }
  }

  return (
    <ManualLogo {...logoStyles} />
  );
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
