import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders learn react link', () => {
    render(<Layout children={<>test</>} />);
});
