import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('Sidebar rendered', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });
    test('Toggle works correctly', () => {
        renderWithTranslation(<Sidebar />);
        const ToggleButton = screen.getByTestId('Sidebar-toggle');
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
        fireEvent.click(ToggleButton);
        expect(screen.getByTestId('Sidebar')).not.toHaveClass('collapsed');
    });
});
