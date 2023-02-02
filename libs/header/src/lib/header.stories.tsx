import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header';

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default Story;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
