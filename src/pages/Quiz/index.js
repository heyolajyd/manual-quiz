import React, { useEffect, useState } from 'react';
import { getQuestion } from 'utils/request';
import ProgressBar from 'components/ProgressBar';
import Result from 'components/Result';
import Header from 'components/Header';
import Question from 'components/Question';
import { QuizContainer, QuizContent } from './Quiz.styled';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentNumber, setCurrentNumber] = useState(0);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length) {
      const question = questions[currentNumber];
      setCurrentQuestion(question);
    }
  }, [questions, currentNumber]);

  const initializeState = () => {
    setQuestions([]);
    setCurrentQuestion({});
    setCurrentNumber(0);
    setCompletedQuiz(false);
    setSelectedAnswers([]);
  };

  const fetchQuestions = async () => {
    const { questions: quizQuestions } = await getQuestion();

    setQuestions(quizQuestions);
  };

  const handleNextQuestion = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);

    const nextNumber = currentNumber + 1;
    return nextNumber < questionCount
      ? setCurrentNumber(nextNumber)
      : setCompletedQuiz(true);
  };

  const handleStartQuiz = () => {
    initializeState();
    fetchQuestions();
  };

  const questionCount = questions.length;

  return (
    <QuizContainer>
      <ProgressBar
        questionCount={questionCount}
        questionNumber={currentNumber + 1}
      />
      <QuizContent>
        {completedQuiz ? (
          <Result
            isSupportAvailable={!selectedAnswers.includes('true')}
            startQuiz={handleStartQuiz}
          />
        ) : (
          <>
            <Header
              questionNumber={currentNumber}
              questionCount={questionCount}
            />
            <Question
              currentQuestion={currentQuestion}
              nextQuestion={handleNextQuestion}
            />
          </>
        )}
      </QuizContent>
    </QuizContainer>
  );
};

export default Quiz;
