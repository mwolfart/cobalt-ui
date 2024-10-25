import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../heading';
import { Typography } from '../typography';
import { Tab, TabGroup } from '.';

const meta = {
  title: 'Components/Tabs',
  component: TabGroup,
  render: ({ ...args }) => <TabGroup {...args} />,
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    children: (
      <Tab title="Tab 1">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Heading variant="h2">Hello world</Heading>
          <Typography>This is an example tab</Typography>
        </div>
      </Tab>
    ),
  },
};

export const Multiple: Story = {
  args: {
    children: [
      <Tab title="Tab 1" key={1}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Heading variant="h2">Hello world</Heading>
          <Typography>This is an example tab</Typography>
        </div>
      </Tab>,

      <Tab title="Tab 2" key={2}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Heading variant="h2">Hello earth</Heading>
          <Typography>This is another example</Typography>
        </div>
      </Tab>,

      <Tab title="Tab 3" key={3}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Heading variant="h2">Hello mars</Heading>
          <Typography>This is a final example</Typography>
        </div>
      </Tab>,
    ],
  },
};
