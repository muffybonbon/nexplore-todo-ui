import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../../containers/App';

const mockedHomepageComponent = <div data-testid="mock-homepage">Mock HomePage</div>;

jest.mock('../../components/Layout/Layout', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-layout">{mockedHomepageComponent}</div>,
  };
});

describe('App Component', () => {
  it('renders the Layout and HomePage components', () => {
    render(<App />);

    const layoutComponent = screen.getByTestId('mock-layout');
    const homePageComponent = screen.getByTestId('mock-homepage');

    expect(layoutComponent).toBeInTheDocument();
    expect(homePageComponent).toBeInTheDocument();
  });
});
