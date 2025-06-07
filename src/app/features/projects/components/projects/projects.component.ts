import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectItem } from '../../models/project-item.interface';
import { ProjectsService } from '../../services/projects.service';
import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';


@Component({
  selector: 'app-projects',
  imports: [HomeHeaderComponent,SubscriptionPanelComponent,ProjectCardComponent, AsyncPipe,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
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
  constructor(private projectsService: ProjectsService) { }

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
