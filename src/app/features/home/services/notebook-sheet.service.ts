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
      id: '1',
      date: 'FEB 12, 2020',
      title: 'Refactoring.guru',
      description: 'Es un sitio educativo enfocado en buenas prácticas de programación. Explica de forma clara y visual conceptos como refactorización, patrones de diseño, principios SOLID y malos olores en el código.',
      imageUrl: './assets/refactoring-guru.png',
      category: 'enlaces',
      externalLink: 'notebook-sheet/1', // Enlace real
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
   // ... (dentro del array notebookData)

{
  id: 'diario-refactor-func-delegates',
  date: 'JUN 10, 2025',
  title: 'Refactorizando con Func<>: De Código Duplicado a una Solución Elegante',
  description: 'Cómo eliminé la duplicación de código en C# al abstraer la lógica común y pasar los métodos específicos del repositorio como delegados Func<>.',
  imageUrl: 'https://placehold.co/600x400/E3F2FD/1976D2?text=Refactoring',
  category: 'diario-tecnico',
  externalLink: 'notebook-sheet/diario-refactor-func-delegates',
  content: `
    <p>Hoy dediqué un tiempo a refactorizar una parte del código que me venía haciendo ruido. Tenía tres métodos en mi capa de <br> servicio que eran casi idénticos.<br>
     Su objetivo era obtener listas de registros para diferentes vistas de una tabla (Mis Registros, Revisiones y Aprobaciones, y Aprobados), pero  <br>la estructura era la misma:<br>
      obtener usuario, verificar permisos, construir filtros, llamar al repositorio para el conteo total y luego para obtener los datos paginados.</p>
    <p class="mt-4">La duplicación era evidente y un claro "code smell". Sabía que si necesitaba cambiar la lógica de filtrado o de permisos,<br> tendría que hacerlo <br>
    en tres lugares distintos, lo cual es propenso a errores y difícil de mantener.</p>
    
    <h3 class="text-xl font-semibold mt-6 mb-4">El Problema: Código Repetido</h3>
    
    <p>La estructura de los tres métodos públicos era la misma, lo único que cambiaba era la llamada final a los métodos del repositorio. <br> Se veían así:</p>
    
    <img 
            class="max-w-full h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/diario-refactor-func-delegates/diario-refactor-func-delegates1.png" 
            >
    <h3 class="text-xl font-semibold mt-6 mb-4">La Solución: Abstraer lo Común y Parametrizar lo Variable</h3>
    
    <p>La clave fue darme cuenta de que la "estrategia" para obtener el conteo y los datos era lo único que variaba. <br>
    El resto era un proceso fijo. Aquí es donde los delegados <code>Func&lt;T&gt;</code> en C# brillan.</p>
    <p class="mt-4">Decidí crear un único método privado, <code>ObtenerRegistrosAsync</code>, que contuviera toda la lógica común.
     Este método aceptaría como parámetros las dos funciones que necesitaba ejecutar y que eran diferentes en cada caso: una para obtener el  total y otra para obtener la lista de registros.</p>
    
    <p class="mt-4">Así, los métodos públicos se transformaron en simples llamadas a este nuevo método privado, pasándole las funciones  <br>correspondientes del repositorio.
     El resultado es un código mucho más limpio y DRY (Don't Repeat Yourself).</p>

      <img 
            class="max-w-full h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/diario-refactor-func-delegates/diario-refactor-func-delegates2.svg" 
            >

              <h3 class="text-xl font-semibold mt-6 mb-4">El Método Genérico</h3>
    <p>Y aquí está la magia. Este método privado ahora centraliza toda la lógica. Si mañana necesito cambiar cómo se gestionan los permisos, lo hago en un solo lugar.</p>

     <img 
            class="max-w-full h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/diario-refactor-func-delegates/diario-refactor-func-delegates3.svg" />

             <p class="mt-6">Estoy muy satisfecho con el resultado. El código no solo es más limpio y fácil de leer, sino que también es mucho más mantenible y escalable. Si en el futuro se necesita una nueva vista de "Registros Rechazados", por ejemplo, solo tendría que agregar los dos métodos al repositorio y un nuevo método público de una línea en el servicio.</p>
   
  `
},


    {
      id: 'diario-papercut-smtp',
      date: 'JUN 07, 2024',
      title: 'Descubriendo PaperCut SMTP: Un servidor SMTP para desarrollo',
      description: 'Una herramienta práctica y ligera que simula un servidor SMTP para capturar y visualizar correos electrónicos durante el desarrollo, sin enviarlos realmente.',
      imageUrl: './assets/diario-tecnico/papercut/papercut.png',
      category: 'diario-tecnico',
      externalLink: 'notebook-sheet/diario-papercut-smtp',      
      content: `
        <p>Hoy me encontré con una joya de herramienta para el desarrollo: PaperCut SMTP. Me ha sorprendido lo increíblemente fácil que es de usar. Básicamente, es un servidor SMTP falso que se ejecuta localmente y captura todos los correos que tu aplicación intenta enviar.</p>
        <p class="mt-4">La gran ventaja es que puedes ver cómo se verían los correos (HTML, texto, encabezados, etc.) directamente en su interfaz, sin tener que configurar un servidor de correo real ni arriesgarte a enviar emails de prueba a destinatarios reales. Es ideal para etapas de desarrollo y testing, cuando necesitas verificar que la funcionalidad de envío de correos funciona correctamente sin el lío de gestionar credenciales o servicios de terceros.</p>
        
        <div class="mt-8 flex justify-center">
          <img 
            class="w-4/5 h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/papercut/papercut-ui.png" 
            alt="Interfaz de PaperCut SMTP">
        </div>
      `
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
