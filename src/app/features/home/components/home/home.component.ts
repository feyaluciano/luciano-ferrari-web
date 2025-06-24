import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf, *ngFor
import { RouterModule, RouterLink } from '@angular/router'; // Necesario para [routerLink]

// Importa los componentes que ya tenías
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';

// Importa el servicio de la bitácora y su interfaz
import { NotebookSheetService } from '../../services/notebook-sheet.service'; // Asegúrate de la ruta correcta
import { NotebookItem } from '../../models/notebook-item.interface'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // Añadir CommonModule
    RouterModule, // Añadir RouterModule (ya lo tenías, pero es bueno recordarlo)
    RouterLink, // Añadir RouterLink explícitamente si usas standalone y routerLink
    HomeHeaderComponent,
    SubscriptionPanelComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // Propiedad para controlar la solapa activa
  selectedTab: 'enlaces' | 'diario-tecnico' | 'codigo-con-opinion' = 'enlaces';

  private variable1: string;

  // Array para almacenar los ítems filtrados que se mostrarán en la solapa activa
  filteredNotebookItems: NotebookItem[] = [];

  private bitacoraService = inject(NotebookSheetService);

  // Inyecta el servicio

  ngOnInit(): void {
    // Al inicializar el componente, carga los ítems de la solapa por defecto
    this.loadItemsForSelectedTab();
  }

  /**
   * Cambia la solapa activa y recarga los ítems correspondientes.
   * @param tabId El identificador de la solapa a seleccionar.
   */
  selectTab(tabId: 'enlaces' | 'diario-tecnico' | 'codigo-con-opinion'): void {
    this.selectedTab = tabId;
    this.loadItemsForSelectedTab();
  }

  /**
   * Carga los ítems de la bitácora desde el servicio, filtrando por la solapa activa.
   */
  private loadItemsForSelectedTab(): void {
    this.bitacoraService.getNotebookItems(this.selectedTab).subscribe({
      next: (items: NotebookItem[]) => {
        this.filteredNotebookItems = items;
        console.log(`Items cargados para la solapa '${this.selectedTab}':`, this.filteredNotebookItems);
      },
      error: (err: unknown) => {
        console.error(`Error al cargar ítems para la solapa '${this.selectedTab}':`, err);
        // Aquí podrías mostrar un mensaje de error en la UI
      },
    });
  }

  /**
   * Determina la ruta del enlace "Leer más" para cada ítem.
   * Si tiene externalLink, usa href; de lo contrario, usa routerLink.
   * @param item El NotebookItem para el cual determinar el enlace.
   * @returns La ruta o URL del enlace.
   */
  getReadMoreLink(item: NotebookItem): string | string[] {
    if (item.externalLink) {
      return item.externalLink; // Para enlaces externos, retorna el string
    }
    // Para enlaces internos (detalle de bitácora), retorna un array para routerLink
    return ['/bitacora', item.id];
  }
}
