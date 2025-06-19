import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { HomeHeaderComponent } from './features/home/components/home-header/home-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HomeHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'luciano-ferrari-web';
}
