import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DepartmentListComponent } from './department-list.component';
import { ApiService } from '../../../../shared/services/api/api.service';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  const mockCommunes = [
    { nom: 'Aix-en-Provence', codesPostaux: ['13090'], population: 146821, code: '001' },
    { nom: 'Marseille', codesPostaux: ['13000'], population: 861635, code: '002' }
  ];

  // Mock ActivatedRoute (simulate paramMap with code=13)
  const activatedRouteMock = {
    paramMap: of({
      get: (key: string) => (key === 'code' ? '13' : null)
    })
  };

  // Mock ApiService
  const apiMock = {
    getCommunesByDepartmentCode: jasmine
      .createSpy('getCommunesByDepartmentCode')
      .and.returnValue(of(mockCommunes)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentListComponent],  // <-- standalone component !
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ApiService, useValue: apiMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call API with department code from route', () => {
    expect(apiMock.getCommunesByDepartmentCode).toHaveBeenCalledWith('13');
  });

  it('should load communes on init', () => {
    expect(component.allCommunes.length).toBe(2);
    expect(component.allCommunes[0].nom).toBe('Aix-en-Provence');
  });

  it('should handle API error', () => {
    apiMock.getCommunesByDepartmentCode.and.returnValue(
      throwError(() => new Error('API error'))
    );

    // Trigger ngOnInit again manually
    component.ngOnInit();

    expect(component.allCommunes).toEqual([]);
  });
});
