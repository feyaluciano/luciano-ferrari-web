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
      id: '1',
      logoUrl: './assets/resume/unlp.png', // Podés cambiar esta ruta al logo real de la UNLP
      startDate: 'MAR 1995',
      endDate: 'DIC 2000',
      degree: 'Licenciatura en Sistemas',
      university: 'Universidad Nacional de La Plata',
      description: 'Carrera orientada al análisis, diseño y desarrollo de sistemas informáticos, con fuerte base en matemática, programación y teoría de la computación.',
      order: 1
    },
    {
      id: '2',
      logoUrl: './assets/resume/ensa.jpg', // Podés cambiar esta ruta al logo real de la escuela
      startDate: 'MAR 1995',
      endDate: 'DIC 2000',
      degree: 'Bachiller con orientación en Exactas y Naturales',
      university: 'Escuela de Enseñanza Media N° 1',
      description: 'Formación secundaria con enfoque en ciencias exactas, matemática, física y biología.',
      order: 2
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
