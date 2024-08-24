import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button test', () => {
    test('Button rendered', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Button rendered with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
