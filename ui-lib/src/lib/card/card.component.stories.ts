import { Meta } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
} as Meta<CardComponent>;

export const Primary = {
  render: (args: CardComponent) => ({
    props: args,
  }),
  args: {},
};
