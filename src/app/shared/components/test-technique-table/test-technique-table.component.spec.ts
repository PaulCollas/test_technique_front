/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestTechniqueTableComponent } from './test-technique-table.component';
import { MessageService } from 'primeng/api';

describe('TestTechniqueTableComponent', () => {
  let component: TestTechniqueTableComponent;
  let fixture: ComponentFixture<TestTechniqueTableComponent>;
  let messageService: MessageService;

  beforeEach(waitForAsync(() => {
    // Configure the testing module for the standalone table component
    TestBed.configureTestingModule({
      imports: [TestTechniqueTableComponent],
      providers: [MessageService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTechniqueTableComponent);
    component = fixture.componentInstance;

    // Inject PrimeNG MessageService for toast notifications
    messageService = TestBed.inject(MessageService);

    // Set mock input data for columns and rows
    component.columns = [
      { field: 'nom', header: 'Nom' },
      { field: 'population', header: 'Population' },
      { field: 'maps', header: 'Carte', action: 'maps' as any }
    ];

    component.value = [
      { nom: 'Paris', population: 2140000 },
      { nom: 'Lyon', population: 515000 }
    ];

    fixture.detectChanges();
  });

  // Test: component should be instantiated correctly
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test: the table header should render the correct number of columns with correct labels
  it('should render the correct number of header columns', () => {
    const headers = fixture.debugElement.queryAll(By.css('th'));
    expect(headers.length).toBe(3);
    expect(headers[0].nativeElement.textContent.trim()).toBe('Nom');
    expect(headers[1].nativeElement.textContent.trim()).toBe('Population');
    expect(headers[2].nativeElement.textContent.trim()).toBe('Carte');
  });

  // Test: the table body should render the correct number of rows based on the input value
  it('should render rows according to value input', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);
  });

  // Test: table cells should display the correct row values
  it('should display row values correctly', () => {
    const firstRow = fixture.debugElement.query(By.css('tbody tr'));
    const cells = firstRow.queryAll(By.css('td'));

    expect(cells[0].nativeElement.textContent.trim()).toBe('Paris');
    expect(cells[1].nativeElement.textContent.trim()).toBe('2140000');
  });

  // Test: if a column has action 'maps', a map icon should be rendered
  it('should render a map icon when column.action is maps', () => {
    const icon = fixture.debugElement.query(By.css('.map-icon'));
    expect(icon).toBeTruthy();
  });

  // Test: clicking on the map icon should call the openMapWithDelay method
  it('should call openMapWithDelay when clicking on the map icon', () => {
    spyOn(component, 'openMapWithDelay');

    const iconLink = fixture.debugElement.query(By.css('td a'));
    iconLink.triggerEventHandler('click', null);

    expect(component.openMapWithDelay).toHaveBeenCalled();
  });
});
