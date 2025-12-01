/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestTechniqueChipsComponent } from './test-technique-chips.component';

describe('TestTechniqueChipsComponent', () => {
  let component: TestTechniqueChipsComponent;
  let fixture: ComponentFixture<TestTechniqueChipsComponent>;

  beforeEach(waitForAsync(() => {
    // Configure testing module for the standalone component
    TestBed.configureTestingModule({
      imports: [TestTechniqueChipsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTechniqueChipsComponent);
    component = fixture.componentInstance;

    // Set default input values for the component
    component.href = '/test';
    component.label = 'Frontend';

    fixture.detectChanges();
  });

  // Test: component should be instantiated correctly
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test: href input should be correctly bound to the anchor tag
  it('should bind the href to the anchor tag', () => {
    const anchor = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.getAttribute('href')).toBe('/test');
  });

  // Test: label input should be correctly passed to the p-chip component
  it('should pass the label to the p-chip component', () => {
    const chip = fixture.debugElement.query(By.css('p-chip')).componentInstance;
    expect(chip.label).toBe('Frontend');
  });

  // Test: the label should be displayed inside the anchor text
  it('should render the label in the anchor title', () => {
    const anchor = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.textContent).toContain('Frontend');
  });
});
