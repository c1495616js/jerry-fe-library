import { ComponentStory, ComponentMeta } from '@storybook/react';

import Callout, { CalloutProps } from '.';

export default {
  title: 'Callout',
  component: Callout,
  argTypes: {
    variant: {
      options: ['info', 'danger'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args}>
    <div>Child 1</div>
  </Callout>
);

export const Default = Template.bind({});
Default.args = { variant: 'info', label: 'CallOut' };
