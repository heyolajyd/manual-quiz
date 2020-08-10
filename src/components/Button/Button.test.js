import React from 'react';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { withThemeProvider } from 'utils/testUtils';
import Button from './index';

const onClickMock = jest.fn();

describe('Button', function () {
  beforeEach(() => {
    const { container, getByText } = withThemeProvider(
      <Button onClick={onClickMock}>Testing</Button>
    );

    this.container = container;
    this.getByText = getByText;
  });

  it('should match snapshot', () => {
    expect(this.container).toMatchSnapshot();
  });

  it('should be able to click button component', () => {
    fireEvent.click(this.getByText(/Testing/));

    expect(onClickMock).toBeCalled();
  });
});
