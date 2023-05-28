import { Meta, StoryObj } from '@storybook/angular';
import { MandBadgePillComponent } from './mand-badge-pill.component';

const meta: Meta<MandBadgePillComponent> = {
  title: 'MandUI/MandBadgePill',
  component: MandBadgePillComponent,
  tags: ['autodocs'],
  render: (args: MandBadgePillComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<MandBadgePillComponent>;

export const Primary: Story = {
    args: {
      text: 'Primary',
      type: 'primary'
    },
};

export const Warning: Story = {
  args: {
    text: 'Warning',
    type: 'warning'
  },
};

export const Success: Story = {
  args: {
    text: 'Success',
    type: 'success'
  },
};

export const Danger: Story = {
  args: {
    text: 'Danger',
    type: 'danger'
  },
};