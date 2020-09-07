import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BreadCrumbs from '../components/BreadCrumbs';
const columns = [
  { title: 'Id', field: 'id', required: true, searchable: true, editable: 'onAdd' },
  { title: 'Post Id', field: 'postId', required: true, searchable: true },
  { title: 'Name', field: 'name', required: true, searchable: true },
  { title: 'Email', field: 'email', required: true, searchable: true },
  { title: 'Comments', field: 'body', required: true, searchable: true }
];

test('Find BeadCrumbs', () => {
    const { container, getByText } = render(<BreadCrumbs data-testid="child"/>)    
    const link = getByText('Home');
    expect(link.closest('a')).toHaveAttribute('href', '/home');
  })

