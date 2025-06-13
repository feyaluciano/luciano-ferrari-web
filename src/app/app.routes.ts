import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { ProjectsComponent } from './features/projects/components/projects/projects.component';
import { ProjectViewComponent } from './features/projects/components/project-view/project-view.component';
import { AboutComponent } from './features/about/components/about/about.component';
import { NotebookSheetComponent } from './features/home/components/notebook-sheet/notebook-sheet.component';
import { ResumeComponent } from './features/resume/components/resume-list/resume.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent,      
    },
    { path: 'notebook-sheet/:id', component: NotebookSheetComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects-view/:id', component: ProjectViewComponent },
    {
      path: 'about-this-site', // ¡Nueva ruta para la historia de la web!
      loadComponent: () => import('./features/about-this-site/components/about-this-site.component').then(m => m.AboutThisSiteComponent),
      title: 'Luciano Ferrari - Cómo hice esta web'
    },

     { path: 'resume', component: ResumeComponent },
    { path: '**', redirectTo: '/home' }
];
