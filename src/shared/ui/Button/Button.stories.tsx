import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outlined: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Funky: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.FUNKY,
    },
};

export const FunkyDark: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.FUNKY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSmall: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.S,
    },
};

export const SquareSmallDark: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.S,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareMedium: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareMediumDark: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareLarge: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareLargeDark: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareXLarge: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.XL,
    },
};

export const SquareXLargeDark: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
