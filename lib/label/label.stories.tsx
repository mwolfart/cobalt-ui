import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from '../input-field';
import { Label } from '.';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  render: ({ ...args }) => <Label {...args} />,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: { text: 'Test Label' },
};

export const Required: Story = {
  name: 'Required',
  args: { text: 'Test Label', required: true },
};

export const WithInput: Story = {
  name: 'With Input',
  args: {
    text: 'Test Label',
    children: <InputField defaultValue="Initial Value" />,
  },
};
