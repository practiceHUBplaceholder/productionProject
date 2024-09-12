import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface renderWithRouterOptions {
    route: string;
}

export function renderWithRouter(component: ReactNode, options:
    renderWithRouterOptions = { route: '/' }) {
    return render(
        <MemoryRouter initialEntries={[options.route]}>
            {component}
        </MemoryRouter>
    );
}
