// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-project-card',
//   imports: [],
//   templateUrl: './project-card.component.html',
//   styleUrl: './project-card.component.css'
// })
// export class ProjectCardComponent {

// }
// src/app/shared/components/project-card/project-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas como *ngIf
// Importa la interfaz ProjectItem. Asegúrate de que la ruta sea correcta
// Si ProjectItem está en projects.service.ts:
import { ProjectItem } from '../../models/project-item.interface';
// Si moviste ProjectItem a src/app/shared/models/project-item.interface.ts:
// import { ProjectItem } from '../../models/project-item.interface';

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
