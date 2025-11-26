import { Component, signal } from '@angular/core';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from "./core/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, LayoutComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('test_technique_front');
}
