import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commune } from '../../model/commune.model';
import { ApiService } from '../../../../shared/services/api/api.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],

})

export class DepartmentListComponent implements OnInit {

  allCommunes: Commune[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Get department code from route param and fetch communes
    this.route.paramMap.subscribe(params => {
      const code = params.get('code');
      if (code) {
        this.api.getCommunesByDepartmentCode(code).subscribe({
          next: (data: unknown) => {
            this.allCommunes = Array.isArray(data) ? data as Commune[] : [];
            console.log('Loaded communes for department', code, this.allCommunes);
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
