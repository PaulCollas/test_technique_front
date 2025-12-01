import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  // Base URL for the French government Geo API
  readonly BASE_GEO_API_URL = 'https://geo.api.gouv.fr';

  constructor(readonly http: HttpClient) { }

  // Private method to get default HTTP headers
  private getHeaders() {
    return {
      'Content-Type': 'application/json'
    };
  }

  // Private method to check if the base URL is defined
  private checkBaseUrl() {
    if (!this.BASE_GEO_API_URL) {
      throw new Error('BASE_GEO_API_URL is not defined');
    }
  }

  // Get all regions from the API
  getRegions() {
    this.checkBaseUrl();
    const url = `${this.BASE_GEO_API_URL}/regions`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Get regions filtered by name
  getRegionsByName(regionName: string) {
    this.checkBaseUrl();
    const url = `${this.BASE_GEO_API_URL}/regions?nom=${regionName}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Get all departments for a specific region code
  getDepartmentsByRegionCode(regionCode: string) {
    this.checkBaseUrl();
    const url = `${this.BASE_GEO_API_URL}/regions/${regionCode}/departements`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Get all communes for a specific department code
  getCommunesByDepartmentCode(departmentCode: string) {
    this.checkBaseUrl();
    const url = `${this.BASE_GEO_API_URL}/departements/${departmentCode}/communes`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

}
