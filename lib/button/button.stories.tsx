import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  render: ({ ...args }) => <Button {...args}>Example</Button>,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    onClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    onClick: () => {},
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    onClick: () => {},
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    onClick: () => {},
  },
};
