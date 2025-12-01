import type { Meta, StoryObj } from '@storybook/angular';

import { TestTechniqueChipsComponent } from './test-technique-chips.component';

const meta: Meta<TestTechniqueChipsComponent> = {
  title: 'Shared/Chips',
  component: TestTechniqueChipsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TestTechniqueChipsComponent>;

export const Default: Story = {
  args: {
    label: 'Paris',
  },
};

export const WithLink: Story = {
  args: {
    label: 'Rouen',
    href: '/department/76'
  }
};
