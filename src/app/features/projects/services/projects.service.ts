import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay, map } from 'rxjs/operators'; // 'delay' para simular latencia de red
import { ProjectItem } from '../models/project-item.interface';

// Definición de la interfaz ProjectItem (proporcionada por el usuario)


@Injectable({
  providedIn: 'root' // Este servicio se proveerá en la raíz, disponible en toda la aplicación
})
export class ProjectsService {

  // Array privado que contiene todos los ítems de los proyectos.
  // Esto simula una base de datos o una fuente de datos externa.
  private projectsData: ProjectItem[] = [
    {
      id: '1',
      date: 'MAY 20, 2024',
      title: 'Botón anti pánico',
      description: 'Aplicación mobile y backoffice web para la administración y seguimiento de alertas de víctimas de violencia de género',
      imageUrl: './assets/proyectos/logobap.png',
      externalLink: 'https://github.com/LucianoFerrari/angular-firebase-chat', // Ejemplo de enlace a GitHub
      content: 'Este proyecto fue un desafío interesante para aprender sobre la integración de Angular con servicios de backend en tiempo real como Firebase. Se implementaron autenticación de usuarios, envío y recepción de mensajes, y persistencia de datos.',
      tags: ['Angular', 'Firebase', 'Firestore', 'TypeScript', 'TailwindCSS'],
      tecnologies: 'Angular .NET Ionic',
      order: 1
    },
    {
        id: '2',
        date: 'JUN 01, 2024',
        title: 'Plataforma de Trámites Municipales Online',
        description: 'Portal web integral para gestionar trámites municipales como tasas, habilitaciones, visado de planos, timbrado y más.',
        imageUrl: './assets/proyectos/tramitesb.png',
        externalLink: '', 
        content: 'Este proyecto consistió en el desarrollo completo de una plataforma para gestionar trámites municipales desde la web. Implementé funcionalidades como login y registro de usuarios, recuperación de credenciales, y múltiples flujos para la gestión de tasas (inmuebles, comercios, rodados), visado de planos, timbrados, habilitaciones comerciales, carga de CV en RRHH, y libre deuda. Se integraron medios de pago como tarjeta, homebanking, Mercado Pago y generación de comprobantes para Pago Fácil, Rapi Pago y Bapro Pagos. La aplicación brinda una experiencia centralizada para que los ciudadanos puedan gestionar trámites sin necesidad de asistir físicamente.',
        tags: ['Angular', '.NET', 'Autenticación', 'Pagos online', 'UX/UI'],
        tecnologies: 'PHP JQuery CSS Mysql',
        order: 6
      }
  ];

  constructor() { }

  /**
   * Obtiene todos los ítems de proyectos, ordenados por el campo 'order'.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @returns Un Observable que emite un array de ProjectItem.
   */
  getProjects(): Observable<ProjectItem[]> {
    return of([...this.projectsData]).pipe( // Usamos 'of' para crear un Observable
      delay(300), // Simula latencia de red
      map((projects: ProjectItem[]) => {
        // Ordena los proyectos basándose en el campo 'order'.
        // Los proyectos sin 'order' o con el mismo orden se ordenarán por su posición original.
        return projects.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
      })
    );
  }

  /**
   * Busca un ítem de proyecto específico por su ID.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @param id El identificador único del proyecto.
   * @returns Un Observable que emite el ProjectItem encontrado o undefined si no existe.
   */
  getProjectById(id: string): Observable<ProjectItem | undefined> {
    const foundProject = this.projectsData.find(project => project.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundProject).pipe(delay(200));
  }
}
