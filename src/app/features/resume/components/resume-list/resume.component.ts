import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationItem } from '../../models/education-item.interface';

import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';
import { SubscriptionPanelComponent } from '../../../../shared/components/subscription-panel/subscription-panel.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { ResumeEducationComponent } from '../resume-education/resume-education.component';
import { ResumeExperienceComponent } from '../resume-experience/resume-experience.component';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [
    HomeHeaderComponent,
    SubscriptionPanelComponent,
    AsyncPipe,
    CommonModule,
    ResumeEducationComponent,
    ResumeExperienceComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent implements OnInit {
  education$!: Observable<EducationItem[]>;
  private resumeService = inject(ResumeService);   
  ngOnInit(): void {
    // Al inicializar el componente, llamamos al método getProjects() del servicio
    // para obtener el Observable de proyectos.
    this.education$ = this.resumeService.getEducation();
  }
}
