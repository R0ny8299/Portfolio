import { Component } from '@angular/core';
import { SharedImports } from './shared-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...SharedImports],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
}