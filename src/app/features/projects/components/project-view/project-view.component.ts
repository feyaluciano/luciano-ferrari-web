import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [RouterModule,CommonModule,HomeHeaderComponent,SubscriptionPanelComponent],
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            const id = params['id'];
        });
    }
} 