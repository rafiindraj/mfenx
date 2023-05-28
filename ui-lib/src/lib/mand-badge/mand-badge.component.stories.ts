import { Meta } from '@storybook/angular';
import { MandBadgeComponent } from './mand-badge.component';

export default {
  title: 'MandBadgeComponent',
  component: MandBadgeComponent,
} as Meta<MandBadgeComponent>;

export const Primary = {
  render: (args: MandBadgeComponent) => ({
    props: args,
  }),
  args: {},
};
