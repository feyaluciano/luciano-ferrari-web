import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceItem } from '../../models/experience-item.interface';

import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';




@Component({
  selector: 'app-resume-experience',
  imports: [
    HomeHeaderComponent,
    SubscriptionPanelComponent,    
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './resume-experience.component.html',
  styleUrl: './resume-experience.component.css'
})
export class ResumeExperienceComponent {
 
  experience$!: Observable<ExperienceItem[]>;

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
    this.experience$ = this.resumeService.getExperience();
  }

}
