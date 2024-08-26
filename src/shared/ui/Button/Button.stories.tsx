import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Test',
    },
};

export const DefaultDark: Story = {
    args: {
        children: 'Test',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outlined: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Funky: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.FUNKY,
    },
};

export const FunkyDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.FUNKY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
