import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '@/features/home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '@/shared/components/subscription-panel/subscription-panel.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NotebookSheetService } from '../../services/notebook-sheet.service';
import { NotebookItem } from '@/features/home/models/notebook-item.interface';

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
  private notebookSheetService = inject(NotebookSheetService);
  readonly route = inject(ActivatedRoute); // usando `inject` (con minúscula)

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.notebookSheetService.getNotebookItemById(id).subscribe({
        next: (item: NotebookItem | undefined) => {
          if (item) {
            this.notebookItem = item;
          } else {
            this.error = 'Item no encontrado.';
            console.warn('No se encontró el item con ID:', id);
          }
          this.isLoading = false;
        },
        error: (error: unknown) => {
          this.error = 'Error al cargar item.';
          console.error('Error al cargar el item:', error);
          this.isLoading = false;
        },
      });
    } else {
      this.error = 'ID no válido.';
      this.isLoading = false;
    }
  }
}
