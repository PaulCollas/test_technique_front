import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ApiService {

  readonly BASE_GEO_API_URL = 'https://geo.api.gouv.fr';

  constructor(readonly http: HttpClient) { }

  private getHeaders() {
    return {
      'Content-Type': 'application/json'
    };
  }

  private checkBaseUrl() {
    if (!this.BASE_GEO_API_URL) {
      throw new Error('BASE_GEO_API_URL is not defined');
    }
  }

  getRegions() {
    this.checkBaseUrl();

    const url = `${this.BASE_GEO_API_URL}/regions`;
    return this.http.get(url, { headers: this.getHeaders() });
  }



  getRegionsByName(regionName: string) {
    this.checkBaseUrl();

    const url = `${this.BASE_GEO_API_URL}/regions?nom=${regionName}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }


  getDepartmentsByRegionCode(regionCode: string) {
    this.checkBaseUrl();

    const url = `${this.BASE_GEO_API_URL}/regions/${regionCode}/departements`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getCommunesByDepartmentCode(departmentCode: string) {
    this.checkBaseUrl();

    const url = `${this.BASE_GEO_API_URL}/departements/${departmentCode}/communes`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

}
