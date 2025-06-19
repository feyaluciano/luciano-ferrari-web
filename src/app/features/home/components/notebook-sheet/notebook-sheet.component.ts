import { Component, OnInit,Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NotebookSheetService } from '../../services/notebook-sheet.service';
import { NotebookItem } from '../../models/notebook-item.interface';
import { Params } from '@angular/router';


@Component({
  selector: 'app-notebook-sheet',
  standalone: true,
  imports: [RouterModule, CommonModule, HomeHeaderComponent, SubscriptionPanelComponent],
  templateUrl: './notebook-sheet.component.html',
  styleUrls: ['./notebook-sheet.component.css'],
})
export class NotebookSheetComponent implements OnInit {
  notebookItem: NotebookItem | undefined;
  isLoading: boolean = true;
  error: string | null = null;
  private notebookSheetService = Inject(NotebookSheetService);  
  private route = Inject(ActivatedRoute)

  

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.notebookSheetService.getNotebookItemById(id).subscribe({
        next: (item:NotebookItem) => {
          this.notebookItem = item;
          this.isLoading = false;
        },
        error: (error:unknown) => {
          this.error = 'Error al cargar item.';
          console.error('Error al cargar el item:', error);
          this.isLoading = false;
        },
      });
    });
  }
}
