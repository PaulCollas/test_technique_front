import type { Meta, StoryObj } from '@storybook/angular';

import { TestTechniqueTableComponent } from './test-technique-table.component';

const sample = [
  { nom: 'Paris', code: '75056', codesPostaux: ['75001', '75002'], population: 2148327 },
  { nom: 'Lyon', code: '69123', codesPostaux: ['69001', '69002'], population: 513275 },
  { nom: 'Marseille', code: '13055', codesPostaux: ['13001'], population: 861635 },
];

const meta: Meta<TestTechniqueTableComponent> = {
  title: 'Shared/Table',
  component: TestTechniqueTableComponent,
  tags: ['autodocs'],
  args: { value: sample, paginator: true, rows: 10, columns: [
    { field: 'nom', header: 'Nom' },
    { field: 'code', header: 'Code' },
    { field: 'codesPostaux', header: 'Codes postaux' },
    { field: 'population', header: 'Population' },
  ] },
};

export default meta;
type Story = StoryObj<TestTechniqueTableComponent>;

export const Default: Story = {};
