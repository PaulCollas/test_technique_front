import type { Meta, StoryObj } from '@storybook/angular';

import { MenuComponent } from './menu.component';

const meta: Meta<MenuComponent> = {
  title: 'Layout/Menu',
  component: MenuComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {};
