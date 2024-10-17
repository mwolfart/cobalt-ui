import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  render: ({ ...args }) => <Typography {...args} />,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, World!',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Hello, World!',
  },
};
