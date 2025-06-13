import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay, map } from 'rxjs/operators'; // 'delay' para simular latencia de red
import { EducationItem } from '../models/education-item.interface';



@Injectable({
  providedIn: 'root' // Este servicio se proveerá en la raíz, disponible en toda la aplicación
})
export class ResumeService {

  // Array privado que contiene todos los ítems de los proyectos.
  // Esto simula una base de datos o una fuente de datos externa.
  private educationData: EducationItem[] = [
    {
        id:'1',
        logoUrl: './assets/proyectos/logobap.png', // Asegúrate de que esta ruta sea correcta
        startDate: 'MAY 2017',
        endDate: 'APR 2020',
        degree: 'Master of Technology Science',
        university: 'Purdue University',
        description: 'Throughout my years at Purdue, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.',
        order:1
      },
      {
        id:'2',
        logoUrl: './assets/proyectos/logobap.png', // Asegúrate de que esta ruta sea correcta
        startDate: 'ENERO 2020',
        endDate: 'APR 2020',
        degree: 'Master of Technology Science',
        university: 'Purdue University',
        description: 'Throughout my years at Purdue, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.',
        order:2
      },
      {
        id:'3',
        logoUrl: './assets/proyectos/logobap.png', // Asegúrate de que esta ruta sea correcta
        startDate: 'MAY 2017',
        endDate: 'APR 2020',
        degree: 'unlp',
        university: 'Purdue University',
        description: 'Throughout my years at Purdue, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.',
        order:2
      }


  ];

  constructor() { }

  /**
   * Obtiene todos los ítems de proyectos, ordenados por el campo 'order'.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @returns Un Observable que emite un array de ProjectItem.
   */
  getEducation(): Observable<EducationItem[]> {
    return of([...this.educationData]).pipe( // Usamos 'of' para crear un Observable
      delay(300), // Simula latencia de red
      map((projects: EducationItem[]) => {
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
  getEducationById(id: string): Observable<EducationItem | undefined> {
    const foundProject = this.educationData.find(edu => edu.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundProject).pipe(delay(200));
  }
}
