import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('Sidebar rendered', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Toggle works correctly', () => {
        renderWithTranslation(<Sidebar />);
        const ToggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(ToggleButton);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
