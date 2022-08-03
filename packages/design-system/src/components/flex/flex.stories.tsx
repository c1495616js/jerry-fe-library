import { ComponentStory, ComponentMeta } from '@storybook/react';

import Flex from './flex';

export default {
  title: 'Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <>
      <div>sd</div>
      <div>jsfo</div>
    </>
  ),
  justifyContent: 'center',
};
