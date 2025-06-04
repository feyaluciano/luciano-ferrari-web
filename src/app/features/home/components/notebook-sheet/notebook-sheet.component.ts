import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notebook-sheet',
  standalone: true,
  imports: [RouterModule,CommonModule,HomeHeaderComponent,SubscriptionPanelComponent],
  templateUrl: './notebook-sheet.component.html',
  styleUrls: ['./notebook-sheet.component.css']
})
export class NotebookSheetComponent {
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            const id = params['id'];
            //alert(id);
            // Aquí puedes usar el ID para cargar los datos correspondientes
        });
    }
} 