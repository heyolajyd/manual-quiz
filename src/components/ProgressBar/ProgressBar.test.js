import React from 'react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import ProgressBar from './index';

describe('ProgressBar', function () {
  beforeEach(() => {
    this.props = {
      questionNumber: 1,
      questionCount: 3,
    };
  });

  it('should match snapshot', () => {
    const { container } = withThemeProvider(<ProgressBar {...this.props} />);
    expect(container).toMatchSnapshot();
  });
});
