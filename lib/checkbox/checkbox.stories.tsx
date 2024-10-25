import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  render: ({ ...args }) => <Checkbox {...args} />,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'This is an example',
  },
};
