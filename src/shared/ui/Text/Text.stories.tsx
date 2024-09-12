import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Text,
    TextTheme
} from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        title: 'title test',
        text: 'text text',
    },
};

export const DefaultDark: Story = {
    args: {
        title: 'title test',
        text: 'text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'title test',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'title test',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
    args: {
        text: 'text text',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'title test',
        text: 'text text',
        theme: TextTheme.ERROR,
    },
};
