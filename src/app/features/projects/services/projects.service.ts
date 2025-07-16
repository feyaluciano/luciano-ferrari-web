import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay, map } from 'rxjs/operators'; // 'delay' para simular latencia de red
import { ProjectItem } from '@/features/projects/models/project-item.interface';

@Injectable({
  providedIn: 'root', // Este servicio se proveerá en la raíz, disponible en toda la aplicación
})
export class ProjectsService {
  // Array privado que contiene todos los ítems de los proyectos.
  // Esto simula una base de datos o una fuente de datos externa.
  private projectsData: ProjectItem[] = [
    {
      id: 'boton-anti-panico',
      date: 'FEB, 2021',
      title: 'Botón anti pánico',
      description:
        'Desarrollo de una aplicación mobile y backoffice web para la administración de alertas de víctimas de violencia de género. Alojé el sistema en AWS, implementando un backend con Node.js y PHP.',
      imageUrl: './assets/proyectos/logobap.png',
      externalLink: '#/projects-view/boton-anti-panico',
      content:
        'Desarrollé una aplicación móvil destinada a víctimas de violencia de género, que les permite enviar alertas de pánico. Estas alertas son visualizadas en un mapa en tiempo real por operadores en un backoffice web que también diseñé, el cual cuenta con diversas funcionalidades para gestionar y realizar acciones sobre dichas alertas.\n\nPara el stack tecnológico, implementé un backoffice administrativo con Angular 17 que se comunica con una API robusta que construí en PHP. Manejé la persistencia de los datos con una base de datos MySQL y gestioné toda la comunicación en tiempo real para las alertas a través de un servidor dedicado en Node.js, utilizando Socket.io.\n\nPara el despliegue, configuré desde cero un servidor Ubuntu en AWS. Sobre este, instalé y configuré un servidor web Apache para servir la API de PHP, un servidor FTP para la transferencia de archivos, el entorno de Node.js para el servicio de sockets y herramientas de gestión como phpMyAdmin.',
      tags: ['Angular', 'Node.js', 'Socket.io', 'MySQL', 'PHP', 'Ionic', 'AWS'],
      tecnologies: 'Angular,  PHP, Ionic, Mysql',
      order: 1,
    },
    {
      id: 'tramites-online',
      date: 'JUN 01, 2024',
      title: 'Plataforma de Trámites Municipales Online',
      description:
        'Portal web integral para gestionar trámites municipales como tasas, habilitaciones, visado de planos, timbrado y más.',
      imageUrl: './assets/proyectos/tramitesb.png',
      externalLink: '#/projects-view/tramites-online',
      content:
        'Este proyecto consistió en el desarrollo completo de una plataforma para gestionar trámites municipales desde la web. Implementé funcionalidades como login y registro de usuarios, recuperación de credenciales, y múltiples flujos para la gestión de tasas (inmuebles, comercios, rodados), visado de planos, timbrados, habilitaciones comerciales, carga de CV en RRHH,estacionamiento mediido y libre deuda. La aplicación brinda una experiencia centralizada para que los ciudadanos puedan gestionar trámites sin necesidad de asistir físicamente.',
      tags: ['PHP', 'JQuery', 'Mysql'],
      tecnologies: 'PHP JQuery Mysql',
      order: 6,
    },
    {
      id: 'turnos-sabato',
      date: 'MAR, 2010',
      title: 'Sistema de Turnos - Centro de Diagnóstico Sábato',
      description:
        'Sistema para la administración de turnos del Centro de Diagnóstico Sábato, desarrollado íntegramente con PHP y jQuery.',
      imageUrl: './assets/experiencia/bera.png',
      externalLink: '#/projects-view/turnos-sabato',
      content:
        'Este fue uno de mis primeros proyectos full-stack, donde desarrollé un sistema completo para la gestión de turnos del Centro de Diagnóstico Sábato. La aplicación fue construida desde cero utilizando PHP para el backend y jQuery para la interactividad del frontend.\n\nEl sistema centraliza toda la operatoria del centro y para ello implementé las siguientes funcionalidades clave:\n\n- Gestión completa (CRUD) de Pacientes, Profesionales y Obras Sociales.\n- Administración de Turnos, permitiendo crear, modificar, cancelar y visualizar la agenda por profesional o por día.\n- Manejo de Usuarios con diferentes roles y permisos dentro del sistema.\n- Filtros de búsqueda avanzada en todas las secciones para facilitar la localización de información específica de forma rápida.\n- Generación e impresión de reportes y listados en formato PDF, como la agenda diaria de un profesional o listados de pacientes por obra social.\n- Desarrollé también un manual de usuario detallado para facilitar la capacitación del personal administrativo.<img  class="block mx-auto max-w-full h-auto shadow-md mt-8 mb-8"   src="./assets/proyectos/sabato1.png"> <img  class="block mx-auto max-w-full h-auto shadow-md mt-8 mb-8"   src="./assets/proyectos/sabato2.png">',
      tags: ['PHP', 'jQuery', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      tecnologies: 'PHP, jQuery, MySQL',
      order: 5,
    },
    {
      id: 'reintegros-galicia',
      date: 'Marzo de 2022',
      title: 'Reintegros Galicia - Plataforma de Reintegros en Tiempo Real',
      description:
        'Desarrollo de una plataforma de reintegros en tiempo real para Banco Galicia, integrando .NET Core, Kafka, NiFi y bases de datos SQL Server y MongoDB.',
      imageUrl: './assets/experiencia/galicia.png',
      externalLink: '#/projects-view/reintegros-galicia',
      content:
        "Desarrollo de una plataforma de reintegros en tiempo real para Banco Galicia, utilizando tecnologías como Microservicios con .NET Core, Kafka y NiFi. Implementando el patrón publicador-subscriptor con Kafka y configuración de flujos de datos en NiFi para la orquestación y transformación de información. Integración de bases de datos SQL Server y MongoDB para el almacenamiento eficiente de datos relevantes del proyecto.\n\n**¡Premio al Equipo!** El equipo detrás de esta plataforma recibió el **Primer Premio PLATINO 🥇 en la Categoría Experiencia del Cliente (CX) e Innovación en los Premios País a los Innovadores Financieros en las Américas 2024 de Fintech Americas**, un reconocimiento a la excelencia e impacto de la solución desarrollada.\n\n<img class='block mx-auto max-w-full h-auto shadow-md mt-8 mb-8' src='./assets/proyectos/galicia1.png'>",
      tags: ['Microservicios', '.NET Core', 'Kafka', 'Apache NiFi', 'SQL Server', 'MongoDB'],
      tecnologies: '.NET, Kafka,NiFi',
      order: 4,
    },
    {
      id: 'ypf-incidentes-medioambientales',
      date: 'JUL, 2023',
      title: 'Sistema de Gestión de Incidentes Medioambientales - YPF',
      description:
        'Desarrollo y arquitectura de backoffice en Angular para el seguimiento de incidentes medioambientales en yacimientos de YPF.', // Descripción actualizada
      imageUrl: './assets/proyectos/ypf.png',
      externalLink: '#/projects-view/ypf-incidentes-medioambientales',
      content:
        'Fui el encargado principal del desarrollo del backoffice para un sistema crítico en la gestión de **incidentes medioambientales** dentro de los yacimientos de YPF, la empresa de combustibles más importante de Argentina. Mi rol abarcó desde la concepción de la arquitectura del backoffice hasta la implementación de su estructura de directorios y la navegación del menú, asegurando una base sólida y escalable para futuras expansiones.\n\nEste sistema permite registrar y realizar un seguimiento exhaustivo de diferentes tipos de **incidentes medioambientales**, facilitando la gestión y el análisis de incidentes en todos los sitios operativos de la compañía. La implementación de una arquitectura robusta y el uso de patrones de diseño avanzados fueron cruciales para garantizar la mantenibilidad y eficiencia del sistema.<img  class="block mx-auto max-w-full h-auto shadow-md mt-8 mb-8"   src="./assets/proyectos/ypf-cetap.png">',
      tags: [
        'Angular',
        '.NET',
        'API REST',
        'SQL Server',
        'TypeScript',
        'Patrones de Diseño',
        'API REST',
        'Arquitectura en Capas',
      ],
      tecnologies: 'Angular, .NET',
      order: 2,
    },
    {
      id: 'inscripciones-municipales',
      date: '20116',
      title: 'Sistemas de Inscripciones Municipales',
      description:
        'Desarrollo de múltiples sistemas de inscripción para diversas áreas municipales, facilitando el acceso de los vecinos a deportes, talleres y otras actividades.',
      imageUrl: './assets/experiencia/bera.png',
      externalLink: '#/projects-view/inscripciones-municipales',
      content:
        'Durante este período, lideré el desarrollo de varios sistemas de inscripción destinados a diferentes áreas del municipio. Estos sistemas permitieron a los vecinos inscribirse fácilmente en una amplia gama de actividades, incluyendo deportes, talleres y otros eventos municipales.\n\nCada sistema incluía un backoffice completo para la administración eficiente de las inscripciones, con funcionalidades como:\n\n- Gestión de inscripciones (creación, modificación, cancelación).\n- Generación de informes en formatos Excel y PDF.\n- Envío de notificaciones a los usuarios.\n- Diversas funcionalidades adicionales para una gestión integral.',
      tags: ['.NET', 'AngularJS', 'SQL Server', 'C#', 'HTML', 'CSS'],
      tecnologies: '.NET, AngularJS, SQL Server',
      order: 3, // Ajusta el orden según corresponda
    },
    {
      id: 'cementerio-berazategui',
      date: '2018',
      title: 'Sistema de Gestión - Cementerio Municipal de Berazategui',
      description:
        'Desarrollo integral de un sistema para la administración completa de los servicios del cementerio municipal, incluyendo nichos, bóvedas y arrendatarios.',
      imageUrl: './assets/experiencia/bera.png',
      externalLink: '#/projects-view/cementerio-berazategui', // Placeholder - Ajusta si tienes un enlace específico
      content:
        'Desarrollé un sistema robusto para la administración integral del Cementerio Municipal de Berazategui. Esta plataforma centraliza y gestiona todos los aspectos operativos, permitiendo una administración eficiente de:\n\n- Servicios de **nichos**, **tierra**, **bóvedas** y **panteones**.\n- Información de **arrendatarios** y gestión de sus contratos.\n- **Generación e impresión de recibos** y otros documentos administrativos.\n- Funcionalidades avanzadas para la búsqueda, filtrado y reporte de datos, mejorando la gestión y el acceso a la información crítica del cementerio.',
      tags: ['.NET', 'AngularJS', 'SQL Server', 'C#', 'HTML', 'CSS'], // Mismos tags que "Inscripciones Municipales"
      tecnologies: '.NET, AngularJS, SQL Server', // Mismas tecnologías que "Inscripciones Municipales"
      order: 5, // Ajusta el orden según tu preferencia
    },
    {
      id: 'cetapp-go',
      date: 'MAY 2023',
      title: 'CetApp GO - Solución Web y Móvil de Gestión HSE',
      description:
        'Desarrollo de nuevas funcionalidades para CetApp GO, una herramienta móvil y web líder en la digitalización y optimización de la gestión HSE en terreno.',
      imageUrl: './assets/experiencia/cetap.png',
      externalLink: '#/projects-view/cetapp-go',
      content:
        "Actualmente, contribuyo al desarrollo continuo de **CetApp GO**, el producto principal de CeTAP SA, una consultora argentina especializada en Gestión de HSE (Salud, Seguridad y Medio Ambiente). CetApp GO es una solución móvil y escalable, disponible para **Android e iOS**, diseñada para digitalizar y optimizar la gestión de seguridad y ambiente directamente en terreno.\n\nMi rol principal implica el desarrollo de **nuevas funcionalidades** críticas, trabajando tanto en el **frontend con Vue 3** como en el **backend con .NET**. Durante este proceso, aplico rigurosamente **buenas prácticas de desarrollo**, **patrones de diseño**, principios de **clean code** y una **arquitectura en capas** robusta, asegurando la calidad, escalabilidad y mantenibilidad del software.<img  class='block mx-auto max-w-full h-auto shadow-md mt-8 mb-8'   src='./assets/proyectos/cetap-go.png'>",
      tags: ['.NET', 'Vue3', 'SQL Server', 'Azure', 'Mobile Development', 'HSE'],
      tecnologies: '.NET, Vue3, SQL Server, Azure',
      order: 0,
    },
    {
      id: 'fiesta-ternero',
      date: 'MAR 2024',
      title: 'Fiesta Nacional del Ternero – Sitio Web Oficial',
      description:
        'Desarrollo completo del sitio web oficial de la Fiesta Nacional del Ternero y Día de la Yerra, integrando diseño moderno, agenda interactiva y gestión dinámica de contenidos.',
      imageUrl: './assets/proyectos/cabeza.png',
      externalLink: '#/projects-view/fiesta-ternero',
      content:
        "Tuve la oportunidad de desarrollar el nuevo **sitio web oficial** de la [Fiesta Nacional del Ternero y Día de la Yerra](https://www.fiestadelternero.org.ar/), un evento tradicional que forma parte de la identidad cultural argentina, celebrado cada año en Ayacucho, provincia de Buenos Aires.\n\nMi responsabilidad fue llevar a cabo el desarrollo **fullstack**, combinando un **frontend moderno en Angular** con un backend robusto en Laravel, integrando una base de datos relacional para almacenar y administrar la información del evento.\n\nEntre las funcionalidades destacadas se encuentran:\n\n- Agenda interactiva con actividades diarias\n- Gestión dinámica de contenidos institucionales\n- Galería multimedia\n- Integración con redes sociales\n- Diseño responsive para experiencia móvil\n\nEste proyecto buscó **reforzar la presencia digital** del evento, ofreciendo una plataforma estable, atractiva y fácil de actualizar para los organizadores y útil para el público asistente.<img  class='block mx-auto max-w-full h-auto shadow-md mt-8 mb-8' src='./assets/proyectos/fiesta-del-ternero.png'>",
      tags: ['PHP', 'Angular', 'Laravel', 'Fullstack', 'Responsive Design', 'Cultura'],
      tecnologies: 'Laravel, Angular, MySql',
      order: 1,
    },
  ];

  constructor() {}

  /**
   * Obtiene todos los ítems de proyectos, ordenados por el campo 'order'.
   * Simula una llamada asíncrona a un backend con un pequeño retraso.
   * @returns Un Observable que emite un array de ProjectItem.
   */
  getProjects(): Observable<ProjectItem[]> {
    return of([...this.projectsData]).pipe(
      // Usamos 'of' para crear un Observable
      delay(300), // Simula latencia de red
      map((projects: ProjectItem[]) => {
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
  getProjectById(id: string): Observable<ProjectItem | undefined> {
    const foundProject = this.projectsData.find((project) => project.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundProject).pipe(delay(200));
  }
}
