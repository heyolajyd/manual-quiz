import React from 'react';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Result from './index';

const startkQuizMock = jest.fn();

describe('Result', function () {
  beforeEach(() => {
    this.props = {
      isSupportAvailable: true,
      startQuiz: startkQuizMock,
    };
  });

  it('should match snapshot', () => {
    const { container } = withThemeProvider(<Result {...this.props} />);
    expect(container).toMatchSnapshot();
  });

  it('should show not supporting text when support if not available', () => {
    this.props.isSupportAvailable = false;
    const { getByText } = withThemeProvider(<Result {...this.props} />);

    expect(getByText(/Unfortunately, we are unable/)).toBeInTheDocument();
  });

  it('should start quiz again', () => {
    const { getByText } = withThemeProvider(<Result {...this.props} />);

    fireEvent.click(getByText(/Start Again/i));

    expect(startkQuizMock).toBeCalled();
  });
});
