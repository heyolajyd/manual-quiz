import React from 'react';
import PropTypes from 'prop-types';
import { ProgressContainer, Progress } from './ProgressBar.styled';

const ProgressBar = ({ questionNumber, questionCount }) => {
  const width =
    questionNumber && questionCount
      ? (questionNumber / questionCount) * 100
      : 0;

  return (
    <ProgressContainer>
      <Progress width={width} />
    </ProgressContainer>
  );
};

ProgressBar.propTypes = {
  questionNumber: PropTypes.number,
  questionCount: PropTypes.number,
};

export default ProgressBar;
