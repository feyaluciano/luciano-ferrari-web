import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { ProjectsComponent } from './features/projects/components/projects/projects.component';
import { AboutComponent } from './features/about/components/about/about.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    // { path: 'resume', component: ResumeComponent },
    { path: '**', redirectTo: '/home' }
  ];
