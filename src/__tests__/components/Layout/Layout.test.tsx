import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../../../components/Layout/Layout';

describe('Layout Component', () => {
  it('renders its children correctly', () => {
    const testMessage = 'Test content';
    const { getByText } = render(<Layout>{testMessage}</Layout>);

    expect(getByText(testMessage)).toBeInTheDocument();
  });

  it('applies correct styles to the Container', () => {
    const { container } = render(
      <Layout>
        <div />
      </Layout>
    );
    const firstChild = container.firstChild;

    expect(firstChild).toHaveStyleRule('min-height', '100vh');
    expect(firstChild).toHaveStyleRule('display', 'flex');
    expect(firstChild).toHaveStyleRule('justify-content', 'center');
    expect(firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('applies correct styles to the ContainerRow', () => {
    const { container } = render(
      <Layout>
        <div />
      </Layout>
    );
    const containerRow = container.querySelector('div > div > div');

    expect(containerRow).toHaveStyleRule('width', '100%');
  });
});
