import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from '.';

const meta = {
  title: 'Components/Input Field',
  component: InputField,
  render: ({ ...args }) => <InputField {...args} />,
  tags: ['autodocs'],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    value: 'Input example',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    value: 'Password123!',
  },
};

export const Phone: Story = {
  args: {
    type: 'tel',
    value: '(123) 456-7890',
  },
};

export const Zip: Story = {
  args: {
    type: 'zip',
    value: '12345',
  },
};

export const WithError: Story = {
  name: 'Text with Error',
  args: {
    type: 'text',
    value: 'Input example',
    error: 'This field is required',
  },
};
