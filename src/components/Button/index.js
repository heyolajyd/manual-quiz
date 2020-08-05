import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from './Button.styled';

const Button = (props) => {
  const { onClick, disabled = false, children } = props;

  return (
    <BaseButton onClick={onClick} disabled={disabled}>
      {children}
    </BaseButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;
