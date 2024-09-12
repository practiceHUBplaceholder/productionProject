import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    decorators: [StoreDecorator({
        login: {
            username: '123',
            password: 'test',
        },
    })],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        login: {
            username: '123',
            password: 'test',
        },
    })],
};

export const WithError: Story = {
    decorators: [StoreDecorator({
        login: {
            username: '123',
            password: 'test',
            error: 'ERROR',
        },
    })],
};

export const WithErrorDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        login: {
            username: '123',
            password: 'test',
            error: 'ERROR',
        },
    })],
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        login: {
            username: '123',
            password: 'test',
            isLoading: true,
        },
    })],
};

export const LoadingDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        login: {
            username: '123',
            password: 'test',
            isLoading: true,
        },
    })],
};
