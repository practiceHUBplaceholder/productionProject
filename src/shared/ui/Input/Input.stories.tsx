import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Input, InputTheme
} from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Test',
    },
};

export const DefaultDark: Story = {
    args: {
        placeholder: 'Test',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Animated: Story = {
    args: {
        placeholder: 'Test',
        theme: InputTheme.ANIMATED,
    },
};

export const AnimatedDark: Story = {
    args: {
        placeholder: 'Test',
        theme: InputTheme.ANIMATED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
