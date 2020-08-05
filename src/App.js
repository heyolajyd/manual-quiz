import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Quiz from 'pages/Quiz';
import { theme } from './styles/global';
import Landing from 'pages/Landing';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        {isQuizStarted ? (
          <Quiz />
        ) : (
          <Landing startQuiz={() => setIsQuizStarted(true)} />
        )}
      </>
    </ThemeProvider>
  );
};

export default App;
