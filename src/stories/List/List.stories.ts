import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import List from './list.component';
export default {
  title: 'Example/List',
  component: List,
  decorators: [
    moduleMetadata({
      declarations: [List],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<List> = (args: List) => ({
  props: args,
});

export const Lista = Template.bind({});
Lista.args = {
  user: {},
};
