import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const Landing = ({ startQuiz }) => {
  return (
    <div>
      <Button onClick={startQuiz}>TAKE THE QUIZ</Button>
    </div>
  );
};

Landing.propTypes = {
  startQuiz: PropTypes.func,
};

export default Landing;
