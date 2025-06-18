import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay, map } from 'rxjs/operators'; // 'delay' para simular latencia de red
import { ProjectItem } from '../models/project-item.interface';



@Injectable({
  providedIn: 'root' // Este servicio se proveerá en la raíz, disponible en toda la aplicación
})
export class ProjectsService {

  // Array privado que contiene todos los ítems de los proyectos.
  // Esto simula una base de datos o una fuente de datos externa.
  private projectsData: ProjectItem[] = [
    {
      'id': 'boton-anti-panico',
      'date': 'FEB, 2021',
      'title': 'Botón anti pánico',
      'description': 'Desarrollo de una aplicación mobile y backoffice web para la administración de alertas de víctimas de violencia de género. Alojé el sistema en AWS, implementando un backend con Node.js y PHP.',
      'imageUrl': './assets/proyectos/logobap.png',
      'externalLink': 'projects-view/boton-anti-panico',
      'content': 'Desarrollé una aplicación móvil destinada a víctimas de violencia de género, que les permite enviar alertas de pánico. Estas alertas son visualizadas en un mapa en tiempo real por operadores en un backoffice web que también diseñé, el cual cuenta con diversas funcionalidades para gestionar y realizar acciones sobre dichas alertas.\n\nPara el stack tecnológico, implementé un backoffice administrativo con Angular 17 que se comunica con una API robusta que construí en PHP. Manejé la persistencia de los datos con una base de datos MySQL y gestioné toda la comunicación en tiempo real para las alertas a través de un servidor dedicado en Node.js, utilizando Socket.io.\n\nPara el despliegue, configuré desde cero un servidor Ubuntu en AWS. Sobre este, instalé y configuré un servidor web Apache para servir la API de PHP, un servidor FTP para la transferencia de archivos, el entorno de Node.js para el servicio de sockets y herramientas de gestión como phpMyAdmin.',
      'tags': ['Angular', 'Node.js', 'Socket.io', 'MySQL', 'PHP', 'Ionic', 'AWS'],
      'tecnologies': 'Angular,  PHP, Ionic, Mysql',
      'order': 1
    },
    {
      id: 'tramites-online',
      date: 'JUN 01, 2024',
      title: 'Plataforma de Trámites Municipales Online',
      description: 'Portal web integral para gestionar trámites municipales como tasas, habilitaciones, visado de planos, timbrado y más.',
      imageUrl: './assets/proyectos/tramitesb.png',
      externalLink: 'projects-view/tramites-online', 
      content: 'Este proyecto consistió en el desarrollo completo de una plataforma para gestionar trámites municipales desde la web. Implementé funcionalidades como login y registro de usuarios, recuperación de credenciales, y múltiples flujos para la gestión de tasas (inmuebles, comercios, rodados), visado de planos, timbrados, habilitaciones comerciales, carga de CV en RRHH,estacionamiento mediido y libre deuda. La aplicación brinda una experiencia centralizada para que los ciudadanos puedan gestionar trámites sin necesidad de asistir físicamente.',
      tags: ['PHP', 'JQuery', 'Mysql'],
      tecnologies: 'PHP JQuery Mysql',
      order: 6
    },
    {
      'id': 'turnos-sabato',
      'date': 'MAR, 2010',
      'title': 'Sistema de Turnos - Centro de Diagnóstico Sábato',
      'description': 'Sistema para la administración de turnos del Centro de Diagnóstico Sábato, desarrollado íntegramente con PHP y jQuery.',
      'imageUrl': './assets/experiencia/bera.png',
      'externalLink': 'projects-view/turnos-sabato',
      'content': 'Este fue uno de mis primeros proyectos full-stack, donde desarrollé un sistema completo para la gestión de turnos del Centro de Diagnóstico Sábato. La aplicación fue construida desde cero utilizando PHP para el backend y jQuery para la interactividad del frontend.\n\nEl sistema centraliza toda la operatoria del centro y para ello implementé las siguientes funcionalidades clave:\n\n- Gestión completa (CRUD) de Pacientes, Profesionales y Obras Sociales.\n- Administración de Turnos, permitiendo crear, modificar, cancelar y visualizar la agenda por profesional o por día.\n- Manejo de Usuarios con diferentes roles y permisos dentro del sistema.\n- Filtros de búsqueda avanzada en todas las secciones para facilitar la localización de información específica de forma rápida.\n- Generación e impresión de reportes y listados en formato PDF, como la agenda diaria de un profesional o listados de pacientes por obra social.\n- Desarrollé también un manual de usuario detallado para facilitar la capacitación del personal administrativo.<img  class="block mx-auto max-w-full h-auto shadow-md mt-8 mb-8"   src="./assets/proyectos/sabato1.png"> <img  class="block mx-auto max-w-full h-auto shadow-md mt-8 mb-8"   src="./assets/proyectos/sabato2.png">',
      'tags': ['PHP', 'jQuery', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      'tecnologies': 'PHP, jQuery, MySQL',
      'order': 5
    },
    {
      "id": "reintegros-galicia",
      "date": "Marzo de 2022",
      "title": "AGREGAR DESRIPCION DEL PREMIOReintegros Galicia - Plataforma de Reintegros en Tiempo Real",
      "description": "Desarrollo de una plataforma de reintegros en tiempo real para Banco Galicia, integrando .NET Core, Kafka, NiFi y bases de datos SQL Server y MongoDB.",
      'imageUrl': './assets/experiencia/galicia.png',
      "externalLink": "projects-view/reintegros-galicia",
      "content": "Desarrollo de una plataforma de reintegros en tiempo real para Banco Galicia, utilizando tecnologías como Microservicios con .NET Core, Kafka y NiFi. Implementando el patrón publicador-subscriptor con Kafka y configuración de flujos de datos en NiFi para la orquestación y transformación de información. Integración de bases de datos SQL Server y MongoDB para el almacenamiento eficiente de datos relevantes del proyecto.<img  class='block mx-auto max-w-full h-auto shadow-md mt-8 mb-8'   src='./assets/proyectos/galicia1.png'>",
      "tags": ["Microservicios", ".NET Core", "Kafka", "Apache NiFi", "SQL Server", "MongoDB"],
      "tecnologies": ".NET, Kafka,NiFi",
      "order": 4
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
