import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { RegionFormComponent } from './region-form.component';
import { ApiService } from '../../../../shared/services/api/api.service';

describe('RegionFormComponent', () => {
  let component: RegionFormComponent;
  let fixture: ComponentFixture<RegionFormComponent>;

  // Mocked ApiService to avoid real HTTP calls
  const apiMock = {
    // Mock getRegions() returning an empty list by default
    getRegions: jasmine.createSpy('getRegions').and.returnValue(of([])),

    // Mock getDepartmentsByRegionCode() returning an empty list by default
    getDepartmentsByRegionCode: jasmine
      .createSpy('getDepartmentsByRegionCode')
      .and.returnValue(of([])),
  };

  beforeEach(async () => {
    // Configure test module with mocked ApiService
    await TestBed.configureTestingModule({
      imports: [RegionFormComponent], // Standalone component
      providers: [
        { provide: ApiService, useValue: apiMock } // Provide mock instead of real service
      ]
    }).compileComponents();

    // Create component and trigger change detection
    fixture = TestBed.createComponent(RegionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Basic creation test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Should load regions during ngOnInit
  it('should load regions on init', () => {
    expect(apiMock.getRegions).toHaveBeenCalled();
  });

  // Test filtering method used for autocomplete
  it('should filter regions by query', () => {
    component.regions = [
      { nom: 'Normandie', code: '28' },
      { nom: 'Nouvelle-Aquitaine', code: '75' },
      { nom: 'Bretagne', code: '53' },
    ];

    // Simulate autocomplete event
    component.filterRegion({ originalEvent: new Event(''), query: 'no' });

    expect(component.filteredRegions.length).toBe(2);
    expect(component.filteredRegions[0].nom).toBe('Normandie');
  });

  // Should reset departments list when no region is selected
  it('should reset departments when region is undefined', () => {
    component.departments = [{ nom: 'Test', code: '01', codeRegion: '22' }];

    component.onRegionSelected(undefined);

    expect(component.departments).toEqual([]);
  });

  // Handle successful API response for departments
  it('should handle department API success', () => {
    apiMock.getDepartmentsByRegionCode.and.returnValue(
      of([{ nom: 'Calvados', code: '14', codeRegion: '28' }])
    );

    const region = { nom: 'Normandie', code: '28' };
    component.onRegionSelected(region);

    expect(component.departments.length).toBe(1);
    expect(component.departments[0].nom).toBe('Calvados');
  });

  // Handle API errors gracefully
  it('should handle department API error', () => {
    apiMock.getDepartmentsByRegionCode.and.returnValue(
      throwError(() => new Error('API error'))
    );

    const region = { nom: 'Normandie', code: '28' };
    component.onRegionSelected(region);

    expect(component.departments).toEqual([]); // Should fallback to empty array
  });
});
