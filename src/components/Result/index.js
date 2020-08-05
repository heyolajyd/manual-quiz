import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ResultContainer, Text } from './Result.styled';

const Result = ({ startQuiz, isSupportAvailable }) => {
  return (
    <ResultContainer>
      {isSupportAvailable ? (
        <Text>
          Great news! We have the perfect treatment for your hair loss. Proceed
          to
          <a
            href='https://www.manual.co/'
            target='_blank'
            rel='noopener noreferrer'
          >
            www.manual.co
          </a>
          , and prepare to say hello to your new hair!
        </Text>
      ) : (
        <Text>
          Unfortunately, we are unable to prescribe this medication for you.
          This is because finasteride can alter the PSA levels, which maybe used
          to monitor for cancer. You should discuss this further with your GP or
          specialist if you would still like this medication.
        </Text>
      )}
      <Button onClick={startQuiz}>Start Again</Button>
    </ResultContainer>
  );
};

Result.propTypes = {
  isSupportAvailable: PropTypes.bool,
  startQuiz: PropTypes.func,
};

export default Result;
