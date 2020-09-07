import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PerformanceDetails from './PerformanceDetails';
import MaterialTable from '../components/MaterialTable';

const columns = [
  { title: 'Id', field: 'id', required: true, searchable: true, editable: 'onAdd' },
  { title: 'Post Id', field: 'postId', required: true, searchable: true },
  { title: 'Name', field: 'name', required: true, searchable: true },
  { title: 'Email', field: 'email', required: true, searchable: true },
  { title: 'Comments', field: 'body', required: true, searchable: true }
];

const performanceData = [
    { visit: 1, action: 'get test data', startTime: 'test', endTime: 'test', duration: 'test' },
    { visit: 2, action: 'add test data', startTime: 'test', endTime: 'test', duration: 'test' }
  ];

test('render a Material Table ', () => {
    const { container, getByText } = render(<MaterialTable testData={performanceData} columns={columns} data-testid="child"/>)    
    const text  = getByText('Post Id');
    expect(text).toBeInTheDocument();
  })
