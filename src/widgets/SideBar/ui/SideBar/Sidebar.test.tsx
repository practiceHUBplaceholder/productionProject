import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('Sidebar test', () => {
    test('Sidebar rendered', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Toggle works correctly', () => {
        renderWithTranslation(<SideBar />);
        const ToggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(ToggleButton);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
