import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay } from 'rxjs/operators'; // 'delay' para simular latencia de red

// Importa la interfaz NotebookItem desde la ubicación compartida
import { NotebookItem } from '../models/notebook-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NotebookSheetService {

  
  // Array privado que contiene todos los ítems de la bitácora
  // Aquí es donde "guardamos" nuestros datos por ahora.
  private notebookData: NotebookItem[] = [
    // --- Contenido para la solapa "Enlaces" ---
    {
      id: 'enlace-refactoring-guru',
      date: 'FEB 12, 2020',
      title: 'Refactoring.guru',
      description: 'Es un sitio educativo enfocado en buenas prácticas de programación. Explica de forma clara y visual conceptos como refactorización, patrones de diseño, principios SOLID y malos olores en el código.',
      imageUrl: './assets/refactoring-guru.png',
      category: 'enlaces',
      externalLink: 'https://refactoring.guru/', // Enlace real
      content: 'Refactoring.guru es una referencia indispensable para cualquier desarrollador que busque mejorar la calidad de su código. Sus explicaciones son concisas y sus diagramas, muy útiles.'
    },
    {
      id: 'enlace-roadmap-sh',
      date: 'DEC 24, 2023',
      title: 'RoadMap.sh',
      description: 'Es una plataforma colaborativa que ofrece mapas de ruta (roadmaps), guías y recursos educativos para ayudar a los desarrolladores a planificar y seguir un camino de aprendizaje en diversas áreas del desarrollo de software.',
      imageUrl: './assets/roadmap.png',
      category: 'enlaces',
      externalLink: 'https://roadmap.sh/', // Enlace real
      content: 'RoadMap.sh es ideal para quienes se sienten perdidos sobre qué aprender a continuación. Ofrece rutas claras para diferentes roles de desarrollo y tecnologías.'
    },
    {
      id: 'enlace-css-tricks',
      date: 'MAR 01, 2023',
      title: 'CSS-Tricks',
      description: 'Un blog con miles de artículos sobre CSS, HTML, JavaScript y desarrollo web en general. Es un recurso indispensable para cualquier desarrollador frontend.',
      imageUrl: 'https://placehold.co/600x400/C8E6C9/2E7D32?text=CSS-Tricks',
      category: 'enlaces',
      externalLink: 'https://css-tricks.com/',
      content: 'CSS-Tricks es conocido por su profundidad y claridad en temas de frontend. Siempre encuentras una solución o una nueva forma de abordar un problema.'
    },
    {
      id: 'enlace-dev-to',
      date: 'ENE 20, 2022',
      title: 'DEV Community',
      description: 'Una comunidad de desarrolladores para compartir y descubrir artículos, tutoriales y proyectos. Es un lugar excelente para mantenerse al día y conectar con otros programadores.',
      imageUrl: 'https://placehold.co/600x400/D1C4E9/512DA8?text=DEV.to',
      category: 'enlaces',
      externalLink: 'https://dev.to/',
      content: 'DEV.to es una plataforma vibrante donde desarrolladores de todos los niveles comparten sus conocimientos y experiencias. Es un gran lugar para encontrar inspiración y aprender de los demás.'
    },

    // --- Contenido para la solapa "Diario técnico" ---
    {
      id: 'diario-singleton',
      date: 'MAY 10, 2024',
      title: 'Patrones de Diseño en TypeScript: Singleton',
      description: 'Explorando la implementación y casos de uso del patrón de diseño Singleton en aplicaciones TypeScript.',
      imageUrl: 'https://placehold.co/600x400/E3F2FD/1976D2?text=Singleton+Pattern',
      category: 'diario-tecnico',
      content: 'Hoy profundicé en el patrón Singleton. Es útil para asegurar que una clase tenga una sola instancia, pero hay que tener cuidado con su uso excesivo, ya que puede introducir acoplamiento.'
    },
    {
      id: 'diario-angular-perf',
      date: 'ABR 22, 2024',
      title: 'Optimización de rendimiento en Angular',
      description: 'Técnicas clave para mejorar la velocidad y eficiencia de tus aplicaciones Angular, desde lazy loading hasta OnPush strategy.',
      imageUrl: 'https://placehold.co/600x400/FCE4EC/C2185B?text=Angular+Perf',
      category: 'diario-tecnico',
      content: 'Revisé las estrategias de detección de cambios en Angular y cómo `OnPush` puede ser un gran aliado para el rendimiento. También experimenté con el lazy loading de módulos.'
    },
    {
      id: 'diario-webassembly',
      date: 'MAR 15, 2024',
      title: 'Introducción a WebAssembly (Wasm)',
      description: 'Un primer vistazo a WebAssembly: qué es, por qué es importante y cómo puedes empezar a usarlo en tus proyectos web.',
      imageUrl: 'https://placehold.co/600x400/FFF8E1/FFC107?text=WebAssembly',
      category: 'diario-tecnico',
      content: 'WebAssembly promete revolucionar el rendimiento en el navegador. Aunque aún es temprano para muchos casos de uso, su potencial para aplicaciones intensivas en CPU es enorme.'
    },
    {
      id: 'diario-rxjs-operators',
      date: 'FEB 05, 2024',
      title: 'Dominando los operadores de RxJS',
      description: 'Un estudio profundo de los operadores más comunes y cómo encadenarlos para manejar flujos de datos complejos de forma reactiva.',
      imageUrl: 'https://placehold.co/600x400/CFD8DC/607D8B?text=RxJS+Operators',
      category: 'diario-tecnico',
      content: 'RxJS es una librería poderosa, pero sus operadores pueden ser abrumadores al principio. Me enfoqué en `map`, `filter`, `switchMap` y `debounceTime` hoy. ¡Son esenciales!'
    },

    // --- Contenido para la solapa "Código con opinión" ---
    {
      id: 'opinion-microfrontends',
      date: 'JUN 01, 2024',
      title: '¿Es el microfrontend la solución para todos?',
      description: 'Analizando los pros y contras de la arquitectura de microfrontends y cuándo realmente vale la pena adoptarla.',
      imageUrl: 'https://placehold.co/600x400/E1F5FE/2196F3?text=Microfrontends',
      category: 'codigo-con-opinion',
      content: 'Los microfrontends están de moda, pero no son una bala de plata. Si bien ofrecen escalabilidad en equipos grandes, la complejidad de la orquestación y la comunicación puede ser un dolor de cabeza.'
    },
    {
      id: 'opinion-deuda-tecnica',
      date: 'ABR 05, 2024',
      title: 'La deuda técnica: ¿un mal necesario o evitable?',
      description: 'Reflexiones sobre la deuda técnica en el desarrollo de software: cómo gestionarla y cuándo aceptarla.',
      imageUrl: 'https://placehold.co/600x400/F3E5F5/9C27B0?text=Deuda+Tecnica',
      category: 'codigo-con-opinion',
      content: 'La deuda técnica es inevitable, pero no debe ser ignorada. Es como una tarjeta de crédito: útil a corto plazo, desastrosa si no se paga. Priorizar su gestión es clave para la salud del proyecto.'
    },
    {
      id: 'opinion-clean-code',
      date: 'FEB 28, 2024',
      title: 'Clean Code: ¿Dogma o guía práctica?',
      description: 'Discutiendo la aplicación de los principios de Clean Code en el día a día de un desarrollador y sus límites.',
      imageUrl: 'https://placehold.co/600x400/E8F5E9/4CAF50?text=Clean+Code',
      category: 'codigo-con-opinion',
      content: 'Clean Code es una filosofía, no un conjunto de reglas rígidas. Hay que entender el "por qué" detrás de cada principio y aplicarlo con pragmatismo. A veces, la legibilidad extrema puede ser contraproducente.'
    },
    {
      id: 'opinion-framework-choice',
      date: 'NOV 10, 2023',
      title: 'Elegir el framework adecuado: más allá del hype',
      description: 'Mi perspectiva sobre cómo seleccionar el framework o librería de frontend correcto para tu proyecto, sin dejarse llevar por las tendencias.',
      imageUrl: 'https://placehold.co/600x400/FFEBEE/F44336?text=Framework+Choice',
      category: 'codigo-con-opinion',
      content: 'La elección de un framework es una decisión estratégica. No se trata solo de popularidad, sino de la curva de aprendizaje, el ecosistema, la comunidad y, lo más importante, las necesidades específicas del proyecto y del equipo.'
    }
  ];

  constructor() { }

  /**
   * Obtiene todos los ítems de la bitácora o filtra por categoría.
   * Simula una llamada asíncrona con un pequeño retraso.
   * @param category Opcional. La categoría por la cual filtrar ('enlaces', 'diario-tecnico', 'codigo-con-opinion').
   * @returns Un Observable que emite un array de NotebookItem.
   */
  getNotebookItems(category?: 'enlaces' | 'diario-tecnico' | 'codigo-con-opinion'): Observable<NotebookItem[]> {
    let filteredItems = this.notebookData;
    if (category) {
      filteredItems = this.notebookData.filter(item => item.category === category);
    }
    // Retorna un Observable para simular asincronía (como una llamada HTTP)
    return of(filteredItems).pipe(delay(300));
  }

  /**
   * Busca un ítem específico de la bitácora por su ID.
   * Simula una llamada asíncrona con un pequeño retraso.
   * @param id El identificador único del ítem.
   * @returns Un Observable que emite el NotebookItem encontrado o undefined si no existe.
   */
  getNotebookItemById(id: string): Observable<NotebookItem | undefined> {
    const foundItem = this.notebookData.find(item => item.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundItem).pipe(delay(200));
  }
}
