import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { MenuComponent } from './core/layout/menu/menu.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

describe('App', () => {

  // Before each test, configure the testing module with the App component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Standalone App component
    }).compileComponents();
  });

  // Test if the App component is created successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Test if the App component contains the <app-menu> element
  it('should contain <app-menu>', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-menu')).toBeTruthy();
  });

  // Test if the App component contains the <router-outlet> element
  it('should contain <router-outlet>', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  // Test if the App component contains the <app-footer> element
  it('should contain <app-footer>', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  // Test if the App component contains a <video> element with the correct src
  it('should contain <video> element', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const videoEl = compiled.querySelector('video') as HTMLVideoElement;
    expect(videoEl).toBeTruthy();
    expect(videoEl.src)
      .toContain('https://www.tooplate.com/templates/2136_kool_form_pack/videos/video.mp4');
  });

});
