import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
@Component({
  selector: 'app-about',
  imports: [HomeHeaderComponent,SubscriptionPanelComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showAlert() {
    alert('Seguir con ete aboit, ver la imagen como queda , hacerla mas ancha o ver como rellenar al costado derecho.. seguir con resume');
  }
  ngOnInit() {
    this.showAlert();
  }
}
