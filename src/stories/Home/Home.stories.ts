import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import HomeComponet from './home.component';


export default {
  title: 'Example/Home',
  component: HomeComponet,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<HomeComponet> = (args: HomeComponet) => ({
  props: args,
});

export const Home = Template.bind({});

