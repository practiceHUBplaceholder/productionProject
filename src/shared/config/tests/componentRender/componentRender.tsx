import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoryProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options:
     componentRenderOptions = {}) {
    const { route = '/', initialState } = options;
    return render(
        <StoryProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoryProvider>
    );
}
