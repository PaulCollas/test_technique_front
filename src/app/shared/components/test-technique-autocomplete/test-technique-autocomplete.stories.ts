import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TestTechniqueAutocompleteComponent } from './test-technique-autocomplete.component';

const sample = [
  { nom: 'Normandie', code: '28' },
  { nom: 'Île-de-France', code: '11' },
  { nom: 'Provence-Alpes-Côte d\'Azur', code: '93' },
];

const meta: Meta<TestTechniqueAutocompleteComponent> = {
  title: 'Shared/Autocomplete',
  component: TestTechniqueAutocompleteComponent,
  tags: ['autodocs'],
  args: { suggestions: sample, optionLabel: 'nom', placeholder: 'Ex: Normandie' },
  argTypes: { complete: { action: 'complete' } },
};

export default meta;
type Story = StoryObj<TestTechniqueAutocompleteComponent>;

export const Default: Story = {};
