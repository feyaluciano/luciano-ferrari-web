import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';


@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent,SubscriptionPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
