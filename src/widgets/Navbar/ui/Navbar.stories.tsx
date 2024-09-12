import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NoAuth: Story = {
    decorators: [StoreDecorator({})],
};

export const NoAuthDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const Auth: Story = {
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '3',
                username: 'test',
            },
        },
    })],
};

export const AuthDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: {
                id: '3',
                username: 'test',
            },
        },
    })],
};
