import {GestureHandlerRootView as Component} from './GestureHandlerRootView';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Utilities/Gesture',
  component: Component,
};

export const Sandbox: Story = {};

export default meta;
