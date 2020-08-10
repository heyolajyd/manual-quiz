import React from 'react';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Landing from './index';

const startQuizMock = jest.fn();

describe('Landing page', function () {
  it('should match snapshot', () => {
    const { container } = withThemeProvider(<Landing />);

    expect(container).toMatchSnapshot();
  });

  it('should start quiz', () => {
    const { getByText } = withThemeProvider(
      <Landing startQuiz={startQuizMock} />
    );

    fireEvent.click(getByText(/TAKE THE QUIZ/));

    expect(startQuizMock).toBeCalled();
  });
});
