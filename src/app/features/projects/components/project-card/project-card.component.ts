import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas como *ngIf
import { ProjectItem } from '@/features/projects/models/project-item.interface';

@Component({
  selector: 'app-project-card', // Selector que se usará en el HTML de otros componentes (<app-project-card>)
  standalone: true, // Este componente es standalone, no necesita un NgModule
  imports: [CommonModule], // Importa módulos que proporcionan directivas comunes de Angular
  templateUrl: './project-card.component.html', // ¡Enlaza al archivo HTML externo!
  styleUrls: ['./project-card.component.css'], // Enlaza al archivo CSS externo (puede estar vacío)
})
export class ProjectCardComponent {
  /**
   * @Input() project: Recibe un objeto ProjectItem del componente padre.
   * El '!' (definite assignment assertion) indica que esta propiedad
   * será definitivamente asignada por el componente padre.
   */
  @Input() project!: ProjectItem;

  // No se necesita lógica adicional aquí para la funcionalidad actual,
  // pero este es el lugar donde agregarías métodos o propiedades
  // si la tarjeta necesitara comportamientos interactivos específicos.
}
