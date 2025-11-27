import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestTechniqueAutocompleteComponent } from '../../../../shared/services/components/test-technique-autocomplete/test-technique-autocomplete.component';
import { ApiService } from '../../../../shared/services/api/api.service';
import type { Region } from '../../model/region.model';


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
  imports: [CommonModule, TestTechniqueAutocompleteComponent, FormsModule],
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})

export class RegionFormComponent implements OnInit {

  regions: Region[] = [];

  selectedRegion: Region | undefined;

  filteredRegions: Region[] = [];

  constructor(private api: ApiService) { }

  /**
   * Lifecycle hook triggered on component initialization.
   * Loads region list from the API.
   */
  ngOnInit() {
    this.loadRegions();
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
