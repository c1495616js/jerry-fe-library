import { ComponentStory, ComponentMeta } from '@storybook/react';

import Flex, { FlexDefaultProps } from './flex';

export default {
  title: 'Flex',
  component: Flex,
  argTypes: {
    justifyContent: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <div>Child 1</div> <div>Child2</div>
  </Flex>
);

export const Default = Template.bind({});

Default.args = FlexDefaultProps;
