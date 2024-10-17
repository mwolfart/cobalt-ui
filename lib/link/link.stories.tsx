import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '.';

const meta = {
  title: 'Components/Link',
  component: Link,
  render: ({ ...args }) => <Link {...args} />,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Anchor: Story = {
  name: 'Link as Anchor',
  args: {
    children: 'Hello, World!',
    href: 'https://example.com',
  },
};

export const Button: Story = {
  name: 'Link as Button',
  args: {
    children: 'Hello, World!',
    href: 'https://example.com',
    as: 'button',
  },
};
