import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  render: ({ ...args }) => <Switch {...args} />,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {},
};

export const Labelled: Story = {
  name: 'Labelled',
  args: {
    label: 'Test Label',
  },
};
