import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './radio-group';
import { useState } from 'react';

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  render: ({ options, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('one');
    return (
      <RadioGroup
        {...args}
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
];

export const Horizontal: Story = {
  args: {
    name: 'test',
    options,
    value: 'one',
  },
};

export const Vertical: Story = {
  args: {
    name: 'test',
    options,
    value: 'one',
    orientation: 'vertical',
  },
};

export const Disabled: Story = {
  args: {
    name: 'test',
    options,
    value: 'two',
    disabled: true,
  },
};
