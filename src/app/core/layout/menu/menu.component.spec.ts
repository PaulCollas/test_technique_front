/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';

// Import PrimeNG modules used in the template
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

describe('MenuComponent', () => {
  let component: MenuComponent; // Component instance
  let fixture: ComponentFixture<MenuComponent>; // Test fixture

  // Configure testing module asynchronously
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenubarModule, AvatarModule, MenuComponent], // Import modules and component
    }).compileComponents(); // Compile template and CSS
  }));

  // Create component instance before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  // Test if component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test if logo image is displayed with correct src and alt
  it('should display the logo with correct src and alt', () => {
    const imgEl = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgEl.getAttribute('src')).toBe(
      'https://www.keyconsulting.fr/images/logo.svg'
    );
    expect(imgEl.getAttribute('alt')).toBe('Logo Key Consulting');
  });

  // Test if logo link redirects to "/"
  it('should have a link redirecting to "/"', () => {
    const linkEl = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(linkEl.getAttribute('href')).toBe('/');
  });

  // Test if menubar title is displayed correctly
  it('should display the correct title', () => {
    const titleEl = fixture.debugElement.query(By.css('.menubar-title span')).nativeElement;
    expect(titleEl.textContent.trim()).toBe('Test technique frontend');
  });

  // Test if avatar is displayed with correct image
  it('should display the avatar with the correct image', () => {
    const avatarEl = fixture.debugElement.query(By.css('p-avatar')).componentInstance;
    expect(avatarEl.image).toBe('https://avatars.githubusercontent.com/u/63116096?v=4');
  });
});
