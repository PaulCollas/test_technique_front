/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent; // Instance of the component
  let fixture: ComponentFixture<FooterComponent>; // Test fixture

  // Configure testing module asynchronously
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FooterComponent ], // Import the component
    }).compileComponents(); // Compile template and CSS
  }));

  // Create component instance before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  // Test if component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test if footer title is displayed correctly
  it('should display the correct title', () => {
    const titleEl = fixture.debugElement.query(By.css('.footer-title')).nativeElement;
    expect(titleEl.textContent).toContain('Paul Collas');
  });

  // Test if footer description is displayed correctly
  it('should display the correct description', () => {
    const descEl = fixture.debugElement.query(By.css('.footer-description')).nativeElement;
    expect(descEl.textContent).toContain(
      `L'application pour la réalisation du test technique frontend`
    );
  });

  // Test if there are exactly 3 social links
  it('should contain 3 social links', () => {
    const links = fixture.debugElement.queryAll(By.css('.social-link'));
    expect(links.length).toBe(3);
  });

  // Test the personal website link
  it('should have a link to the personal website', () => {
    const link = fixture.debugElement.queryAll(By.css('.social-link'))[0].nativeElement;
    expect(link.getAttribute('href')).toBe('https://studio210.fr/');
    expect(link.getAttribute('target')).toBe('_self');
    expect(link.getAttribute('aria-label')).toBe('Mon site');
  });

  // Test the LinkedIn link
  it('should have a link to LinkedIn', () => {
    const link = fixture.debugElement.queryAll(By.css('.social-link'))[1].nativeElement;
    expect(link.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/paul-collas-5631ab174/'
    );
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('aria-label')).toBe('LinkedIn');
  });

  // Test the GitHub link
  it('should have a link to GitHub', () => {
    const link = fixture.debugElement.queryAll(By.css('.social-link'))[2].nativeElement;
    expect(link.getAttribute('href')).toBe('https://github.com/PaulCollas');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('aria-label')).toBe('GitHub');
  });
});
