import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomePage from './homePage';

test('Navigates to testData', () => {
    const { container, getByText } = render(<HomePage />)
    const link = getByText('Click here to see the test data.');
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('href', '/testData')
  })

  test('renders a message', () => {
    const { container, getByText } = render(<HomePage />)    
    expect(getByText('Welcome')).toBeInTheDocument()    
  })

  test('Navigates to Performance', () => {
    const { container, getByText } = render(<HomePage />)
    const link = getByText('Click here to see the rendering performance of test data.');
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('href', '/performance')   
  })