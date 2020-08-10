import React from 'react';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Question from './index';

describe('Question', function () {
  beforeEach(() => {
    this.props = {
      currentQuestion: {
        question: 'Test Question',
        options: [{ '<h1>Test Label</h1>': 'test value' }],
      },
      nextQuestion: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { container } = withThemeProvider(<Question {...this.props} />);
    expect(container).toMatchSnapshot();
  });

  it('should select and display next question', () => {
    const { getByText } = withThemeProvider(<Question {...this.props} />);

    fireEvent.click(getByText(/test value/i));
    expect(this.props.nextQuestion).toBeCalledWith('test value');
  });
});
