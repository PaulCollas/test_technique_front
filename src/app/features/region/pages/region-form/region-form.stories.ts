import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { of } from 'rxjs';

import { RegionFormComponent } from './region-form.component';
import { ApiService } from '../../../../shared/services/api/api.service';

const sampleRegions = [
  { nom: 'Normandie', code: '28' },
  { nom: 'Île-de-France', code: '11' },
];

const mockApi = {
  getRegions: () => of(sampleRegions),
  getRegionsByName: (n: string) => of(sampleRegions.filter(r => r.nom.includes(n))),
};

const meta: Meta<RegionFormComponent> = {
  title: 'Pages/RegionForm',
  component: RegionFormComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [{ provide: ApiService, useValue: mockApi }],
    }),
  ],
};

export default meta;
type Story = StoryObj<RegionFormComponent>;

export const Default: Story = {};
