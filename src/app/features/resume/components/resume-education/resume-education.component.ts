import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationItem } from '../../models/education-item.interface';

import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';




@Component({
  selector: 'app-resume-education',
  imports: [
    HomeHeaderComponent,
    SubscriptionPanelComponent,    
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './resume-education.component.html',
  styleUrl: './resume-education.component.css'
})
export class ResumeEducationComponent {
 
  education$!: Observable<EducationItem[]>;

  /**
   * Constructor del componente.
   * Aquí inyectamos el ProjectsService, que nos permitirá acceder a los datos de los proyectos.
   */
  constructor(private resumeService: ResumeService) { }

  /**
   * ngOnInit: Lifecycle hook que se ejecuta una vez que el componente ha sido inicializado.
   * Es el lugar ideal para cargar datos iniciales.
   */
  ngOnInit(): void {
    // Al inicializar el componente, llamamos al método getProjects() del servicio
    // para obtener el Observable de proyectos.
    this.education$ = this.resumeService.getEducation();
  }

}
