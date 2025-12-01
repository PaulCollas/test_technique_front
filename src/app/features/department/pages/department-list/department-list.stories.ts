import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { of } from 'rxjs';

import { DepartmentListComponent } from './department-list.component';
import { ApiService } from '../../../../shared/services/api/api.service';
import { ActivatedRoute } from '@angular/router';

const sampleCommunes = [
  { nom: 'Agneaux', code: '50002', codesPostaux: ['50180'], population: 4266 },
  { nom: 'Agon-Coutainville', code: '50003', codesPostaux: ['50230'], population: 3013 },
];

const mockApi = {
  getCommunesByDepartmentCode: (_: string) => of(sampleCommunes),
};

const mockRoute = {
  paramMap: of({ get: (k: string) => '50' }),
};

const meta: Meta<DepartmentListComponent> = {
  title: 'Pages/DepartmentList',
  component: DepartmentListComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ApiService, useValue: mockApi },
        { provide: ActivatedRoute, useValue: mockRoute },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<DepartmentListComponent>;

export const Default: Story = {};
