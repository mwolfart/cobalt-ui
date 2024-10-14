import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '.';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  render: ({ ...args }) => <Heading {...args} />,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  name: 'Heading 1',
  args: {
    variant: 'h1',
    children: 'Hello, World!',
  },
};

export const Heading2: Story = {
  name: 'Heading 2',
  args: {
    variant: 'h2',
    children: 'Hello, World!',
  },
};

export const Heading3: Story = {
  name: 'Heading 3',
  args: {
    variant: 'h3',
    children: 'Hello, World!',
  },
};

export const Heading4: Story = {
  name: 'Heading 4',
  args: {
    variant: 'h4',
    children: 'Hello, World!',
  },
};

export const Heading5: Story = {
  name: 'Heading 5',
  args: {
    variant: 'h5',
    children: 'Hello, World!',
  },
};

export const Heading6: Story = {
  name: 'Heading 6',
  args: {
    variant: 'h6',
    children: 'Hello, World!',
  },
};

export const Heading2as1: Story = {
  name: 'Heading 2 as 1',
  args: {
    variant: 'h2',
    as: 'h1',
    children: 'Hello, World!',
  },
};

export const Heading4as6: Story = {
  name: 'Heading 4 as 6',
  args: {
    variant: 'h4',
    as: 'h6',
    children: 'Hello, World!',
  },
};
