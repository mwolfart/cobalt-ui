import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  render: ({ ...args }) => (
    <div style={{ maxWidth: '280px' }}>
      <Select {...args} />
    </div>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const Error: Story = {
  args: {
    options,
    error: 'This is an error',
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
  },
};
