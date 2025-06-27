import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '@/features/projects/models/project-item.interface';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent {
  @Input() project!: ProjectItem;
}
