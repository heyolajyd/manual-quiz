import React from 'react';
import 'jest-styled-components';
import { cleanup } from '@testing-library/react';
import { withThemeProvider } from 'utils/testUtils';

import Quiz from './index';

describe('Quiz page', function () {
  afterEach(cleanup);

  it('should match snapshot', async () => {
    const { container } = withThemeProvider(<Quiz />);

    expect(container).toMatchSnapshot();
  });

  it('should display question', async () => {
    const { getByText } = withThemeProvider(<Quiz />);

    expect(getByText(/Question/)).toBeInTheDocument();
  });
});
