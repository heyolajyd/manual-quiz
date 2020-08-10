import React from 'react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Header from './index';

describe('Header', function () {
  beforeEach(() => {
    const { container, getByText } = withThemeProvider(
      <Header questionCount={4} questionNumber={0} />
    );

    this.container = container;
    this.getByText = getByText;
  });

  it('should match snapshot', () => {
    expect(this.container).toMatchSnapshot();
  });

  it('should display question number and question count', () => {
    expect(this.getByText(/Question 1 of 4/)).toBeInTheDocument();
  });
});
