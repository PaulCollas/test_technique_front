import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commune } from '../../model/commune.model';
import { ApiService } from '../../../../shared/services/api/api.service';
import { TestTechniqueTableComponent } from '../../../../shared/components/test-technique-table/test-technique-table.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
  imports: [TestTechniqueTableComponent],
})

export class DepartmentListComponent implements OnInit {

  allCommunes: Commune[] = [];
  communeColumns = [
    { field: 'nom', header: 'Nom' },
    { field: 'codesPostaux', header: 'Code postal' },
    { field: 'population', header: 'Population' },
    // Special action column that opens Google Maps for the commune
    { field: 'maps', header: 'Carte', action: 'maps', width: '6rem' },
  ];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Get department code from route param and fetch communes
    this.route.paramMap.subscribe(params => {
      const code = params.get('code');
      if (code) {
        this.api.getCommunesByDepartmentCode(code).subscribe({
          next: (data: unknown) => {
            this.allCommunes = Array.isArray(data) ? data as Commune[] : [];
          },
          error: (err: unknown) => {
            console.error('Failed to load communes for department', code, err);
            this.allCommunes = [];
          }
        });
      }
    });
  }

}
