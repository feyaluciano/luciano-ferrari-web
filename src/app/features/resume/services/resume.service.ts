import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay, map } from 'rxjs/operators'; // 'delay' para simular latencia de red
import { EducationItem } from '../models/education-item.interface';
import { ExperienceItem } from '../models/experience-item.interface';

@Injectable({
  providedIn: 'root', // Este servicio se proveerá en la raíz, disponible en toda la aplicación
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
      description:
        'Carrera orientada al análisis, diseño y desarrollo de sistemas informáticos, con fuerte base en matemática, programación y teoría de la computación.',
      order: 1,
    },
    {
      id: '2',
      logoUrl: './assets/resume/ensa.jpg', // Podés cambiar esta ruta al logo real de la escuela
      startDate: 'MAR 1995',
      endDate: 'DIC 2000',
      degree: 'Bachiller con orientación en Exactas y Naturales',
      university: 'Escuela de Enseñanza Media N° 1',
      description: 'Formación secundaria con enfoque en ciencias exactas, matemática, física y biología.',
      order: 2,
    },
  ];

  private experienceData: ExperienceItem[] = [
    {
      id: 'exp-1',
      logoUrl: './assets/resume/oinfo.png', // Reemplaza con el logo real
      startDate: 'MAR 2022',
      endDate: 'ACTUALIDAD',
      position: 'Desarrollador Backend',
      company: 'ONEINFO CONSULTING',
      description: 'Desarrollo de una plataforma de reintegros en tiempo real para Banco Galicia.',
      responsibilities: [
        'Implementación de microservicios con .NET Core, Kafka y NiFi.',
        'Aplicación del patrón publicador-subscriptor con Kafka para mensajería asíncrona.',
        'Configuración de flujos de datos en NiFi para la orquestación y transformación de información.',
        'Integración de bases de datos SQL Server y MongoDB para almacenamiento de datos.',
      ],
      technologies: ['.NET Core', 'Microservicios', 'Kafka', 'Apache NiFi', 'SQL Server', 'MongoDB'],
      order: 3,
    },
    {
      id: 'exp-2',
      logoUrl: './assets/experiencia/cetap.png', // Reemplaza con el logo real
      startDate: 'MAY 2023',
      endDate: 'ACTUALIDAD',
      position: 'Desarrollador Full Stack',
      company: 'CETAP',
      description:
        'Participación en el desarrollo y mantenimiento de soluciones críticas para la gestión de incidentes medioambientales y riesgos, utilizando tecnologías Angular, Vue 3 y .NET.',
      responsibilities: [
        'Desarrollo y mantenimiento de un backoffice en Angular para la gestión de incidentes medioambientales.',
        'Implementación de nuevas funcionalidades para el producto principal de la empresa, enfocado en la gestión de riesgos. Utilizando Vue 3 y .Net',
      ],
      technologies: ['Angular', 'TypeScript', 'Vue3', 'SQL Server', '.NET'],
      order: 1,
    },
    {
      id: 'exp-3',
      logoUrl: './assets/resume/freelance.png',
      startDate: '2020',
      endDate: 'ACTUALIDAD',
      position: 'Desarrollador Full Stack',
      company: 'Autónomo',
      description:
        'Desarrollo Full Stack con Angular/Vue 3, .NET y SQL Server, y aplicaciones para celulares para diversos clientes.',
      responsibilities: [
        'Desarrollo de Landing Pages para instituciones y clientes en general.',
        'Desarrollo backend con .NET 6 y .NET Core, implementando servicios con Apache Kafka y Apache Nifi.',
        'Uso de herramientas de CI/CD y calidad de código como Jenkins, Veracode y SonarQube.',
        'Trabajo bajo metodologías Ágiles para la entrega continua de valor.',
      ],
      technologies: ['.NET 6', 'Angular', 'Laravel', 'php', 'Mysql', 'SQL Server'],
      order: 2,
    },
    {
      id: 'exp-4',
      logoUrl: './assets/experiencia/bera.png', // Reemplaza con el logo real
      startDate: '2008',
      endDate: '2020',
      position: 'Desarrollador Full Stack',
      company: 'Municipalidad de Berazategui',
      description: 'Desarrollo y mantenimiento de sistemas y páginas web para la gestión municipal.',
      responsibilities: [
        'Análisis y desarrollo de aplicaciones clave como "Trámites Berazategui", "YoCompro", "BeraCreativa", y "Cementerio Berazategui".',
        'Creación del sistema de alerta "Botón CIPAV".',
        'Manejo de bases de datos relacionales y desarrollo de APIs para el consumo de datos.',
        'Implementación de sistemas para inscripciones a **Deportes** y **Talleres de Cultura**.',
        'Integración y soporte del sistema **Adempiere**.',
        'Desarrollo de sistemas de **acreditación para eventos** del municipio.',
        'Creación de un **sistema de tickets** para el área de soporte técnico.',
        'Implementación del **sistema de turnos "Sabatto"**.',
        'Desarrollo de un **sistema de reclamos** para control urbano.',
        'Gestión e implementación de la descarga de **tasas municipales**.',
        'Desarrollo del sistema de acreditación para **estacionamiento medido**.',
      ],
      technologies: ['PHP', 'C#', 'Web API', 'Entity Framework', 'MySQL', 'SQL Server'],
      order: 4,
    },
    {
      id: 'exp-5',
      logoUrl: './assets/experiencia/dm.png', // Reemplaza con el logo real
      startDate: '2007',
      endDate: '2008',
      position: 'Desarrollador Web',
      company: 'DMFUSIÓN',
      description: 'Creación de sitios web para clientes utilizando tecnologías del lado del servidor y del cliente.',
      responsibilities: [
        'Desarrollo de páginas web dinámicas.',
        'Maquetación de diseños a partir de requerimientos.',
        'Mantenimiento de bases de datos para los sitios.',
      ],
      technologies: ['PHP', 'MySQL', 'ASP', 'HTML', 'CSS'],
      order: 5,
    },
  ];

  constructor() {}

  /**
   * Obtiene todos los ítems de proyectos, ordenados por el campo 'order'.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @returns Un Observable que emite un array de ProjectItem.
   */
  getEducation(): Observable<EducationItem[]> {
    return of([...this.educationData]).pipe(
      // Usamos 'of' para crear un Observable
      delay(300), // Simula latencia de red
      map((projects: EducationItem[]) => {
        // Ordena los proyectos basándose en el campo 'order'.
        // Los proyectos sin 'order' o con el mismo orden se ordenarán por su posición original.
        return projects.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
      }),
    );
  }

  /**
   * Busca un ítem de proyecto específico por su ID.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @param id El identificador único del proyecto.
   * @returns Un Observable que emite el ProjectItem encontrado o undefined si no existe.
   */
  getEducationById(id: string): Observable<EducationItem | undefined> {
    const foundProject = this.educationData.find((edu) => edu.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundProject).pipe(delay(200));
  }

  getExperience(): Observable<ExperienceItem[]> {
    return of([...this.experienceData]).pipe(
      // Usamos 'of' para crear un Observable
      delay(300), // Simula latencia de red
      map((experience: ExperienceItem[]) => {
        // Ordena las experiencias basándose en el campo 'order'.
        return experience.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
      }),
    );
  }

  /**
   * Busca una experiencia específica por su ID.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @param id El identificador único de la experiencia.
   * @returns Un Observable que emite el ExperienceItem encontrado o undefined si no existe.
   */
  getExperienceById(id: string): Observable<ExperienceItem | undefined> {
    const foundExperience = this.experienceData.find((exp) => exp.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundExperience).pipe(delay(200));
  }
}
