import React from 'react';
import PropTypes from 'prop-types';
import {
  QuestionContainer,
  Content,
  Options,
  Item,
  ItemName,
} from './Question.styled';

function createMarkup(markup) {
  return { __html: markup };
}

const Question = ({ currentQuestion, nextQuestion }) => {
  const { question, options = [] } = currentQuestion;

  const handleNext = (answer) => {
    nextQuestion(answer);
  };

  return (
    <QuestionContainer>
      <Content>{question}</Content>
      <Options>
        {options.map((item) => {
          const optionImage = Object.keys(item)[0];
          const optionName = Object.values(item)[0];

          const selectedOption = optionName.toString();

          return (
            <Item key={optionName} onClick={() => handleNext(selectedOption)}>
              <div dangerouslySetInnerHTML={createMarkup(optionImage)} />
              <ItemName>{optionName}</ItemName>
            </Item>
          );
        })}
      </Options>
    </QuestionContainer>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.array,
  }),
  nextQuestion: PropTypes.func,
};

export default Question;
