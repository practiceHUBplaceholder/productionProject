import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Button, ButtonSize, ButtonTheme, ButtonColor
} from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

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

export const SquareMedium: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareLarge: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXLarge: Story = {
    args: {
        children: 'Test',
        square: true,
        size: ButtonSize.XL,
    },
};

export const Primary: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryInverted: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.PRIMARY_INVERTED,
    },
};

export const PrimaryInvertedDark: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.PRIMARY_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryInverted: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.SECONDARY_INVERTED,
    },
};

export const SecondaryInvertedDark: Story = {
    args: {
        children: 'Test',
        color: ButtonColor.SECONDARY_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};

export const DisabledDark: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
