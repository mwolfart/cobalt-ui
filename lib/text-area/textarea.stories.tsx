import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '.';

const meta = {
  title: 'Components/Text Area',
  component: TextArea,
  render: ({ ...args }) => <TextArea {...args} />,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResizeBoth: Story = {
  name: 'Resize Both',
  args: {
    value: 'Input example',
  },
};

export const ResizeNone: Story = {
  name: 'Resize None',
  args: {
    resize: 'none',
    value: 'Input example',
  },
};
