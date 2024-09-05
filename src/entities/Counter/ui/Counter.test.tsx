import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/config/tests';
import { Counter } from './Counter';

describe('Counter test', () => {
    test('Counter rendered', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('10');
    });
    test('Increment works correctly', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const Button = screen.getByTestId('Counter-inc');
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('10');
        fireEvent.click(Button);
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('11');
    });
    test('Decrement works correctly', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const Button = screen.getByTestId('Counter-dec');
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('10');
        fireEvent.click(Button);
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('9');
    });
});
