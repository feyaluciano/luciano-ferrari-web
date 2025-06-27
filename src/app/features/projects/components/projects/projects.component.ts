import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectItem } from '@/features/projects/models/project-item.interface';
import { ProjectsService } from '@/features/projects/services/projects.service';
import { HomeHeaderComponent } from '@/features/home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '@/shared/components/subscription-panel/subscription-panel.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProjectItemComponent } from '@/features/projects/components/project-item/project-item.component';

@Component({
  selector: 'app-projects',
  imports: [HomeHeaderComponent, SubscriptionPanelComponent, ProjectItemComponent, AsyncPipe, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  /**
   * projects$: Un Observable que emitirá un array de ProjectItem.
   * El '$' al final es una convención de Angular para indicar que es un Observable.
   * El '!' (definite assignment assertion) indica que será inicializado en ngOnInit.
   */
  projects$!: Observable<ProjectItem[]>;

  /**
   * Constructor del componente.
   * Aquí inyectamos el ProjectsService, que nos permitirá acceder a los datos de los proyectos.
   */
  constructor(private projectsService: ProjectsService) {}

  /**
   * ngOnInit: Lifecycle hook que se ejecuta una vez que el componente ha sido inicializado.
   * Es el lugar ideal para cargar datos iniciales.
   */
  ngOnInit(): void {
    // Al inicializar el componente, llamamos al método getProjects() del servicio
    // para obtener el Observable de proyectos.
    this.projects$ = this.projectsService.getProjects();
  }
}
