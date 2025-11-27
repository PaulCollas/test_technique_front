import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestTechniqueAutocompleteComponent } from '../../../../shared/components/test-technique-autocomplete/test-technique-autocomplete.component';
import { ApiService } from '../../../../shared/services/api/api.service';
import type { Region } from '../../model/region.model';
import { TestTechniqueChipsComponent } from "../../../../shared/components/test-technique-chips/test-technique-chips.component";
import { Department } from '../../../department/model/department.model';


/**
 * Event interface used by PrimeNG AutoComplete component.
 */
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-region-form',
  standalone: true,
  imports: [CommonModule, TestTechniqueAutocompleteComponent, FormsModule, TestTechniqueChipsComponent],
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})

export class RegionFormComponent implements OnInit {

  regions: Region[] = [];

  selectedRegion: Region | undefined;

  filteredRegions: Region[] = [];
  /** The list of departments returned when a region is selected */
  departments: Department[] = [];
  linkDepartementsBase = '/departement/';

  constructor(private api: ApiService) { }

  /**
   * Lifecycle hook triggered on component initialization.
   * Loads region list from the API.
   */
  ngOnInit() {
    this.loadRegions();
  }

  /**
   * Called when the bound ngModel changes on the autocomplete: select or clear a region.
   * If a region is selected we fetch its departments using the ApiService.
   */
  onRegionSelected(region?: Region | null): void {
    this.selectedRegion = region ?? undefined;

    // Clear departments if no region is selected
    if (!region || !region.code) {
      this.departments = [];
      return;
    }

    // Fetch departments for the selected region
    this.api.getDepartmentsByRegionCode(region.code).subscribe({
      next: (data: unknown) => {

        // Ensure we have an array and map to a simple shape
        const arr = Array.isArray(data) ? data : [];
        this.departments = arr.map((department: Department) => ({ nom: department.nom, code: department.code, codeRegion: department.codeRegion}));
        this
      },
      error: (err: unknown) => {
        console.error('Failed to load departments for region', region, err);
        this.departments = [];
      }
    });
  }

  private loadRegions(): void {
    this.api.getRegions().subscribe({
      next: (data: Region[] | unknown) => {
        // Ensures valid array format before assignment
        this.regions = Array.isArray(data) ? data : [];
      },
      error: (err: unknown) => {
        console.error('Failed to load regions', err);
      }
    });
  }

  /**
   * Filters the list of regions based on user query in the autocomplete.
   * @param event - AutoComplete event containing the search query.
  */

  filterRegion(event: AutoCompleteCompleteEvent): void {
    const query = event.query?.trim().toLowerCase() ?? '';

    // Early return improves readability and performance for empty queries
    if (!query) {
      this.filteredRegions = this.regions;
      return;
    }

    // Uses functional methods for clearer logic and immutability
    this.filteredRegions = this.regions.filter(region =>
      region.nom.toLowerCase().startsWith(query)
    );
  }

}
