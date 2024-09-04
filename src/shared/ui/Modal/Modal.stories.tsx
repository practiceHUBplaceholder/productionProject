import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children:
    <div style={{ display: 'flex', gap: '20px' }}>
        <button type="button">1</button>
        <input placeholder="2" />
        <a href="javascript:void(0)" style={{ color: 'red' }}>3</a>
        <textarea placeholder="4" />
    </div>,
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
    <div style={{ display: 'flex', gap: '20px' }}>
        <button type="button">1</button>
        <input placeholder="2" />
        <a href="javascript:void(0)" style={{ color: 'red' }}>3</a>
        <textarea placeholder="4" />
    </div>,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
