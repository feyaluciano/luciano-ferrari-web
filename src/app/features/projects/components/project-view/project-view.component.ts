import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectItem } from '../../models/project-item.interface';
import { Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-project-view',
    standalone: true,
    imports: [
      CommonModule,
      RouterModule, // Incluye RouterModule para la navegación (si tienes enlaces dentro de la vista)
      HomeHeaderComponent,
      SubscriptionPanelComponent
    ],
    templateUrl: './project-view.component.html',
    styleUrls: ['./project-view.component.css']
  })
  export class ProjectViewComponent implements OnInit {
    // project$: Un Observable que emitirá el ProjectItem cuando se cargue.
    // Es una buena práctica usar Observables para datos asíncronos en la plantilla con el async pipe.
    project$!: Observable<ProjectItem | undefined>; // Puede ser ProjectItem o undefined si no se encuentra
  
    // El estado de carga y error para la UI
    isLoading: boolean = true;
    error: string | null = null;
  
    constructor(
      private route: ActivatedRoute,       // Para acceder a los parámetros de la URL
      private projectsService: ProjectsService // Para obtener los datos del proyecto
    ) { }
  
    ngOnInit(): void {
      // Escucha los cambios en los parámetros de la ruta (como el 'id').
      // 'paramMap' es un Observable que emite un nuevo mapa de parámetros cada vez que cambian.
      // 'switchMap' es un operador de RxJS que cancela la petición anterior si llega una nueva,
      // y luego mapea el parámetro 'id' a una nueva petición al ProjectsService.
      this.project$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.isLoading = true; // Inicia el estado de carga
          this.error = null;     // Limpia errores anteriores
          const projectId = params.get('id'); // Obtiene el valor del parámetro 'id' de la URL
  
          if (projectId) {
            // Llama al servicio para obtener el proyecto por su ID
            return this.projectsService.getProjectById(projectId).pipe(
              catchError(err => {
                this.error = 'Error al cargar el proyecto. Por favor, inténtalo de nuevo más tarde.';
                console.error('Error al cargar proyecto:', err);
                this.isLoading = false;
                return of(undefined); // Retorna un Observable de undefined en caso de error
              })
            );
          } else {
            // Si no hay ID en la ruta, no se puede buscar el proyecto.
            this.error = 'No se proporcionó un ID de proyecto válido en la URL.';
            this.isLoading = false;
            return of(undefined); // Retorna un Observable de undefined
          }
        }),
        // Una vez que la petición se completa (éxito o error), desactiva el estado de carga
        // Esto se puede hacer con un 'tap' o manejando el 'async' pipe en el HTML.
        // Aquí lo haremos directamente en el subscribe implícito del async pipe.
        // Alternativamente, se podría usar un operador 'finalize' si la lógica es más compleja.
      );
  
      // Para manejar el estado de carga y error en la plantilla, nos suscribimos al Observable
      // Esto es un ejemplo de cómo podrías hacerlo si no usas el async pipe con *ngIf="project$ | async as project"
      // Pero con el async pipe y las plantillas #loading y #error, es más limpio.
      this.project$.subscribe({
        next: (project) => {
          this.isLoading = false;
          // console.log('Proyecto cargado:', project);
        },
        error: (err) => {
          this.isLoading = false;
          // El catchError ya manejó esto, pero por si acaso.
        }
      });
    }
  }
  