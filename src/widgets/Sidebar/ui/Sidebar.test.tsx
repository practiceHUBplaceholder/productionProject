import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/config/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('Sidebar rendered', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });
    test('Toggle works correctly', () => {
        componentRender(<Sidebar />);
        const ToggleButton = screen.getByTestId('Sidebar-toggle');
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
        fireEvent.click(ToggleButton);
        expect(screen.getByTestId('Sidebar')).not.toHaveClass('collapsed');
    });
});
