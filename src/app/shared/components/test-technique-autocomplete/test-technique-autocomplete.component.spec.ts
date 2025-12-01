/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TestTechniqueAutocompleteComponent } from './test-technique-autocomplete.component';

// PrimeNG
import { AutoCompleteModule } from 'primeng/autocomplete';

describe('TestTechniqueAutocompleteComponent', () => {
  let component: TestTechniqueAutocompleteComponent;
  let fixture: ComponentFixture<TestTechniqueAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AutoCompleteModule, TestTechniqueAutocompleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTechniqueAutocompleteComponent);
    component = fixture.componentInstance;

    // Default initial values for component inputs
    component.optionLabel = 'name';
    component.placeholder = 'Rechercher';
    component.dropdown = true;
    component.emptyMessage = 'Aucun résultat';
    component.inputId = 'test-autocomplete';
    component.disabled = false;

    fixture.detectChanges();
  });

  // Test: the component should be instantiated properly
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test: the <p-autocomplete> element should be rendered in the template
  it('should render the p-autocomplete component', () => {
    const ac = fixture.debugElement.query(By.css('p-autocomplete'));
    expect(ac).toBeTruthy();
  });

  // Test: placeholder should be correctly bound to the input element
  it('should bind the placeholder correctly', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.getAttribute('placeholder')).toBe('Rechercher');
  });

  // Test: inputId should be correctly applied to the input DOM element
  it('should bind the inputId correctly', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.getAttribute('id')).toBe('test-autocomplete');
  });

  // Test: when disabled=true, the input element should be disabled
  it('should disable the input when disabled=true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.disabled).toBeTrue();
  });

  // Test: onComplete should be triggered when completeMethod event is emitted
  it('should call onComplete when completeMethod is triggered', () => {
    spyOn(component, 'onComplete');

    const autocomplete = fixture.debugElement.query(By.css('p-autocomplete')).componentInstance;

    // Simulate PrimeNG autocomplete complete event
    autocomplete.completeMethod.emit({ query: 'tes' });

    expect(component.onComplete).toHaveBeenCalled();
    expect(component.onComplete).toHaveBeenCalledWith({ query: 'tes' });
  });

  // Test: onModelChange should be called when ngModel value updates
  it('should call onModelChange when ngModel changes', async () => {
    spyOn(component, 'onModelChange');

    const newValue = 'Paris';

    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    // Simulate user typing
    input.value = newValue;
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.onModelChange).toHaveBeenCalledWith(newValue);
  });
});
