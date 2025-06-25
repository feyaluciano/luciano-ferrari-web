import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay } from 'rxjs/operators'; // 'delay' para simular latencia de red

// Importa la interfaz NotebookItem desde la ubicación compartida
import { NotebookItem } from '../models/notebook-item.interface';

@Injectable({
  providedIn: 'root',
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
      description:
        'Es un sitio educativo enfocado en buenas prácticas de programación. Explica de forma clara y visual conceptos como refactorización, patrones de diseño, principios SOLID y malos olores en el código.',
      imageUrl: './assets/refactoring-guru.png',
      category: 'enlaces',
      externalLink: 'notebook-sheet/1', // Enlace real
      content:
        'Refactoring.guru es una referencia indispensable para cualquier desarrollador que busque mejorar la calidad de su código. Sus explicaciones son concisas y sus diagramas, muy útiles.',
    },
    {
      id: 'enlace-roadmap-sh',
      date: 'DEC 24, 2023',
      title: 'RoadMap.sh',
      description:
        'Es una plataforma colaborativa que ofrece mapas de ruta (roadmaps), guías y recursos educativos para ayudar a los desarrolladores a planificar y seguir un camino de aprendizaje en diversas áreas del desarrollo de software.',
      imageUrl: './assets/roadmap.png',
      category: 'enlaces',
      externalLink: 'https://roadmap.sh/', // Enlace real
      content:
        'RoadMap.sh es ideal para quienes se sienten perdidos sobre qué aprender a continuación. Ofrece rutas claras para diferentes roles de desarrollo y tecnologías.',
    },
    {
      id: 'enlace-css-tricks',
      date: 'MAR 01, 2023',
      title: 'CSS-Tricks',
      description:
        'Un blog con miles de artículos sobre CSS, HTML, JavaScript y desarrollo web en general. Es un recurso indispensable para cualquier desarrollador frontend.',
      imageUrl: 'https://placehold.co/600x400/C8E6C9/2E7D32?text=CSS-Tricks',
      category: 'enlaces',
      externalLink: 'https://css-tricks.com/',
      content:
        'CSS-Tricks es conocido por su profundidad y claridad en temas de frontend. Siempre encuentras una solución o una nueva forma de abordar un problema.',
    },
    {
      id: 'enlace-dev-to',
      date: 'ENE 20, 2022',
      title: 'DEV Community',
      description:
        'Una comunidad de desarrolladores para compartir y descubrir artículos, tutoriales y proyectos. Es un lugar excelente para mantenerse al día y conectar con otros programadores.',
      imageUrl: 'https://placehold.co/600x400/D1C4E9/512DA8?text=DEV.to',
      category: 'enlaces',
      externalLink: 'https://dev.to/',
      content:
        'DEV.to es una plataforma vibrante donde desarrolladores de todos los niveles comparten sus conocimientos y experiencias. Es un gran lugar para encontrar inspiración y aprender de los demás.',
    },

    // --- Contenido para la solapa "Diario técnico" ---
    // ... (dentro del array notebookData)

    {
      id: 'diario-refactor-func-delegates',
      date: 'JUN 10, 2025',
      title: 'Refactorizando con Func<>: De Código Duplicado a una Solución Elegante (Strategy Pattern)',
      description:
        'Cómo eliminé la duplicación de código en C# al abstraer la lógica común y pasar los métodos específicos del repositorio como delegados Func<>.',
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

           <h3 class="text-xl font-semibold mt-6 mb-4"> Un Toque de Diseño: Aplicando el Strategy Pattern</h3>
<p>Lo interesante es que, sin darme cuenta al principio, lo que estaba aplicando es un patrón de diseño conocido: el Strategy Pattern.

Este patrón consiste en encapsular diferentes algoritmos o comportamientos (en este caso, cómo obtener el total y cómo obtener los datos) y pasarlos como parámetros, permitiendo que una misma estructura (mi método ObtenerRegistrosAsync) ejecute distintas estrategias según el caso.

En lugar de tener condicionales o duplicar código, simplemente inyecto la estrategia adecuada como un Func<>.

Esto no solo reduce la duplicación, sino que también me permite cambiar el comportamiento sin modificar el método genérico, solo cambiando los métodos que le paso.

En C#, los delegados Func<> y Action<> son perfectos para implementar este tipo de solución de forma concisa y legible. Y si te gusta la programación funcional, esto es un buen ejemplo de una higher-order function: una función que recibe funciones como parámetros.
</p>


             <p class="mt-6">Estoy muy satisfecho con el resultado. El código no solo es más limpio y fácil de leer, sino que también es mucho más mantenible y escalable. Si en el futuro se necesita una nueva vista de "Registros Rechazados", por ejemplo, solo tendría que agregar los dos métodos al repositorio y un nuevo método público de una línea en el servicio.</p>
   
  `,
    },

    {
      id: 'diario-papercut-smtp',
      date: 'JUN 07, 2024',
      title: 'Descubriendo PaperCut SMTP: Un servidor SMTP para desarrollo',
      description:
        'Una herramienta práctica y ligera que simula un servidor SMTP para capturar y visualizar correos electrónicos durante el desarrollo, sin enviarlos realmente.',
      imageUrl: './assets/diario-tecnico/papercut/papercut.png',
      category: 'diario-tecnico',
      externalLink: 'notebook-sheet/diario-papercut-smtp',
      content: `
        <p>Hoy, desarrollando envio de emails en .net y teniendo que probar como estos eran recibidos y estructurado su mensaje, me encontré con una joya de herramienta para realizar estas pruebas: PaperCut SMTP. Me ha sorprendido lo increíblemente fácil que es de usar. Básicamente, es un servidor SMTP falso que se ejecuta localmente y captura todos los correos que tu aplicación intenta enviar.</p>
        <p class="mt-4">La gran ventaja es que puedes ver cómo se verían los correos (HTML, texto, encabezados, etc.) directamente en su interfaz, sin tener que configurar un servidor de correo real ni arriesgarte a enviar emails de prueba a destinatarios reales. Es ideal para etapas de desarrollo y testing, cuando necesitas verificar que la funcionalidad de envío de correos funciona correctamente sin el lío de gestionar credenciales o servicios de terceros.</p>
        
        <div class="mt-8 flex justify-center">
          <img 
            class="w-4/5 h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/papercut/papercut-ui.png" 
            alt="Interfaz de PaperCut SMTP">
        </div>
      `,
    },
    {
      id: 'diario-refactor-srp-service',
      date: 'JUN 13, 2025',
      title: 'Refactorizando con SRP: De un Servicio Sobrecargado a Código Limpio',
      description:
        'Cómo separamos la lógica de notificaciones de un servicio de negocio para cumplir con el Principio de Responsabilidad Única (SRP), resultando en un código más limpio y fácil de mantener.',
      imageUrl: 'https://placehold.co/600x400/E8F5E9/388E3C?text=SRP',
      category: 'diario-tecnico',
      externalLink: 'notebook-sheet/diario-refactor-srp-service',
      content: `
        <p>En el desarrollo de software, a menudo nos encontramos con clases o servicios que, con el tiempo, empiezan a acumular más responsabilidades de las que deberían. Esto me pasó recientemente con un <code>ExpedienteService</code>, que además de gestionar todo el ciclo de vida de un expediente (creación, revisión, aprobación), también se encargaba de construir y enviar notificaciones por correo electrónico en cada paso.</p>
        <p class="mt-4">Cada método que cambiaba el estado del expediente terminaba con un bloque de código casi idéntico para enviar un email. Era un "code smell" evidente: el servicio tenía más de una razón para cambiar y el código se estaba volviendo repetitivo y difícil de leer.</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-4">El Problema: Un Servicio con Demasiadas Responsabilidades</h3>
        
        <p>El principal problema era la violación del Principio de Responsabilidad Única (SRP). Mi <code>ExpedienteService</code> sabía demasiado. Sabía sobre la lógica de negocio y también sobre los detalles de las notificaciones (asuntos, cuerpos de email, destinatarios, etc.).</p>
        <p class="mt-4">Un método típico se veía así, mezclando la lógica de negocio con la lógica de notificación:</p>
        
    <img 
            class="w-4/5 h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/diario-refactor-srp-service/diario-refactor-srp-service1.png" 
            alt="diario-refactor-srp-service">
    
        <h3 class="text-xl font-semibold mt-6 mb-4">La Solución: Delegar la Responsabilidad a un Nuevo Servicio</h3>
        
        <p>La solución fue crear un nuevo servicio especializado, <code>GestionDocumentalNotificacionService</code>, cuya única responsabilidad es gestionar el envío de notificaciones relacionadas con los expedientes. El <code>ExpedienteService</code> ya no necesita saber cómo se envía un email, simplemente delega esa tarea.</p>
        
        <p class="mt-4">Ahora, el método en <code>ExpedienteService</code> es mucho más limpio y enfocado:</p>
   <img 
            class="w-4/5 h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/diario-refactor-srp-service/diario-refactor-srp-service2.png" 
            alt="diario-refactor-srp-service">
        
        <h3 class="text-xl font-semibold mt-6 mb-4">Resumen: ¿Qué Ganamos con este Refactor?</h3>
        <p>Esta refactorización es un ejemplo claro de cómo aplicar principios de diseño de software para mejorar la calidad de nuestro código.</p>
        <ul class="list-disc list-inside space-y-2 mt-4">
            <li><strong>Principio de Responsabilidad Única (SOLID)</strong>: Es el concepto central aquí. Ahora cada servicio tiene una sola razón para cambiar. <code>ExpedienteService</code> cambia si la lógica de negocio del espediente cambia. <code>GestionDocumentalNotificacionService</code> cambia si la lógica de las notificaciones cambia.</li>
            <li><strong>Clean Code</strong>: El código es ahora más legible y expresivo. Los métodos en <code>ExpedienteService</code> describen claramente su propósito sin el "ruido" de la lógica de notificación.</li>
            <li><strong>DRY (Don't Repeat Yourself)</strong>: Hemos eliminado la duplicación de código. La lógica para construir cada tipo de notificación está definida en un único lugar.</li>
            <li><strong>Patrón de Diseño (Delegación/Facade)</strong>: Estamos delegando una responsabilidad a otro objeto. El servicio de notificaciones actúa como una "Fachada" (Facade) que simplifica la interacción con el sistema de envío de emails.</li>
        </ul>
        <p class="mt-6">El resultado es un sistema más robusto, mantenible y fácil de entender. Separar responsabilidades no solo es una buena práctica teórica, sino que tiene beneficios prácticos inmediatos en la claridad y escalabilidad de nuestro código.</p>
      `,
    },
    {
      id: 'eslint-prettier-husky',
      date: 'JUN 24, 2025',
      title: 'Configurando Prettier, ESLint y Husky: Código Limpio y Validaciones Pre-Commit',
      description:
        'Descubre cómo integrar Prettier, ESLint y Husky en tus proyectos para asegurar un código limpio, formato consistente y validaciones automáticas antes de cada commit.',
      imageUrl: 'https://placehold.co/600x400/E3F2FD/1976D2?text=ESLint+Prettier+Husky',
      category: 'diario-tecnico',
      externalLink: 'notebook-sheet/eslint-prettier-husky',
      content:
        '    <p>En los proyectos donde he estado trabajando últimamente, siempre me llamaba la atención un detalle al hacer commit de mis cambios: antes de que el commit se hiciera efectivo, se ejecutaban una serie de validaciones automáticas sobre el código. Sabía que ESLint estaba involucrado, pero nunca tuve del todo claro cómo se configuraban estas validaciones para que se ejecutaran en ese preciso momento, ¡justo antes del commit! Tampoco entendía a fondo qué tipo de validaciones se estaban realizando.</p>\n    <p class="mt-4">Esa curiosidad me llevó a investigar a fondo. Quería entender el "detrás de escena" de estas herramientas y, más importante aún, aprender a replicar esa configuración en mis propios proyectos. Así que me puse manos a la obra y logré configurar un proyecto desde cero utilizando una combinación poderosa de tecnologías: <strong>Prettier</strong>, <strong>ESLint</strong>, <strong>Husky</strong> y <strong>Lint-Staged</strong>.</p>\n\n    <h3 class="text-xl font-semibold mt-6 mb-4">Configurar Prettier en mi entorno de desarrollo</h3>\n    <p>Yo ya tenía Prettier como plugin de mi Visual Studio Code; es una herramienta a nivel de editor de código, diferente a instalar Prettier con <code>npm install --save-dev prettier</code>, que lo instala como una dependencia de desarrollo.</p>\n    <p class="mt-4">Luego de ejecutar ese comando, creé el archivo <code>.prettierrc.json</code> en la raíz del proyecto y lo configuré de esta manera:</p>\n\n    <div class="mt-8 flex justify-center">\n        <img \n            class="w-4/5 h-auto rounded-lg shadow-md" \n            src="./assets/diario-tecnico/eslint-prettier-husky/imagen1.png" \n            alt="Configuración de Prettier">\n    </div>\n\n    <p class="mt-4">Luego, creé el archivo <code>.prettierignore</code> para que Prettier ignore ciertos archivos:</p>\n    <pre><code class="language-bash"># .prettierignore\n/node_modules\n/dist\n/.angular</code></pre>\n\n    <p class="mt-4">Finalmente, agregué estos scripts al archivo <code>package.json</code>, uno para ejecutar Prettier en todos los archivos y el otro para hacer un chequeo de los archivos sin guardar:</p>\n    <pre><code class="language-json">// package.json\n{\n  "scripts": {\n    "format": "prettier --write \\"**/*.{js,jsx,ts,tsx,json,css,scss,html}\\"",\n    "check-format": "prettier --check \\"**/*.{js,jsx,ts,tsx,json,css,scss,html}\\""\n  }\n}</code></pre>\n\n    <h3 class="text-xl font-semibold mt-6 mb-4">Configurar ESLint en mi entorno de desarrollo</h3>\n    <p>Instalé los plugins necesarios: <code>eslint@^8.57.1</code>, <code>eslint-config-prettier@^10.1.5</code>, <code>eslint-plugin-prettier@^5.5.0</code>. Luego, configuré el archivo <code>.eslintrc.cjs</code> de la siguiente manera:</p>\n\n    <p class="mt-4">Agregué este script a <code>package.json</code>: <code>"check-lint": "eslint \\"**/*.{ts,html}\\""</code>.</p>\n    <p class="mt-4">Y luego, creé el archivo <code>.eslintrc.cjs</code> con este contenido:</p>\n\n    <div class="mt-8 flex justify-center">\n        <img \n            class="w-4/5 h-auto rounded-lg shadow-md" \n            src="./assets/diario-tecnico/eslint-prettier-husky/imagen2.png" \n            alt="Configuración de ESLint">\n    </div>\n\n    <p class="mt-4">Ahora, al ejecutar <code>npm run check-lint</code>, ESLint valida la configuración que le hayamos dado en este <code>.eslintrc.cjs</code> y podemos ir corrigiéndolas.</p>\n\n    <p class="mt-4">Empecé este Diario Técnico diciendo que ESLint se ejecutaba cuando realizaba un commit. Para eso, instalaré <strong>Husky</strong>, que permite ejecutar scripts según ciertos eventos de Git, por ejemplo, en <code>pre-commit</code>.</p>\n\n    <h3 class="text-xl font-semibold mt-6 mb-4">Configuración de Husky y Lint-Staged</h3>\n    <p>Instalamos <code>npm install --save-dev husky</code>.</p>\n    <p class="mt-4">Luego, ejecutamos <code>npx husky init</code>. Esto creará una carpeta <code>.husky/</code> en la raíz del proyecto y un script en el <code>package.json</code>.</p>\n    <p class="mt-4">Ahora, uno de los pasos más importantes es configurar el hook <code>pre-commit</code>, pero primero debemos instalar <strong>Lint-Staged</strong>, para poder ejecutar ESLint solo en los archivos que están en el <code>staged</code> y no en todos los archivos. Esto permite no ejecutar ESLint en todos los archivos del proyecto cada vez que se hace un commit.</p>\n    <p class="mt-4">Instalamos Lint-Staged con <code>npm install --save-dev lint-staged</code> y luego en <code>package.json</code> agregamos esta sección:</p>\n\n    <div class="mt-8 flex justify-center">\n        <img \n            class="w-4/5 h-auto rounded-lg shadow-md" \n            src="./assets/diario-tecnico/eslint-prettier-husky/imagen3.png" \n            alt="Configuración de Lint-Staged">\n    </div>\n\n    <p class="mt-4">Y solo falta en el archivo <code>.husky/pre-commit</code> agregar esta línea: <code>npm exec lint-staged</code>.</p>\n    <p class="mt-4">Entonces, antes de hacerse el commit, se ejecuta Prettier y modifica los archivos y los guarda, y ejecuta ESLint pero solo muestra los errores para que yo los pueda arreglar. Si queremos que los arregle, o que intente arreglarlo, sería así: <code>"eslint --fix"</code>.</p>\n    \n    <p class="mt-4">De esta manera, hacemos que nuestro código respete ciertas normas de código limpio y organice los <code>.html</code>, entre otras cosas.</p>\n\n    <p class="mt-4">Ahora voy a hacer una prueba, voy a crear un método que no usaré y haré un commit, y veremos cómo se ejecuta ESLint, que detecta esa función y nos muestra el error para que lo corrijamos.</p>\n\n    <div class="mt-8 flex justify-center">\n        <img \n            class="w-4/5 h-auto rounded-lg shadow-md" \n            src="./assets/diario-tecnico/eslint-prettier-husky/imagen4.png" \n alt="Ejemplo de error ESLint en pre-commit">\n <br> <img \n            class="w-4/5 h-auto rounded-lg shadow-md" \n            src="./assets/diario-tecnico/eslint-prettier-husky/imagen5.png" \n alt="Ejemplo de error ESLint en pre-commit">    </div>\n  ',
    },

    // --- Contenido para la solapa "Código con opinión" ---
    {
      id: 'opinion-microfrontends',
      date: 'JUN 01, 2024',
      title: '¿Es el microfrontend la solución para todos?',
      description:
        'Analizando los pros y contras de la arquitectura de microfrontends y cuándo realmente vale la pena adoptarla.',
      imageUrl: 'https://placehold.co/600x400/E1F5FE/2196F3?text=Microfrontends',
      category: 'codigo-con-opinion',
      content:
        'Los microfrontends están de moda, pero no son una bala de plata. Si bien ofrecen escalabilidad en equipos grandes, la complejidad de la orquestación y la comunicación puede ser un dolor de cabeza.',
    },
    {
      id: 'opinion-deuda-tecnica',
      date: 'ABR 05, 2024',
      title: 'La deuda técnica: ¿un mal necesario o evitable?',
      description:
        'Reflexiones sobre la deuda técnica en el desarrollo de software: cómo gestionarla y cuándo aceptarla.',
      imageUrl: 'https://placehold.co/600x400/F3E5F5/9C27B0?text=Deuda+Tecnica',
      category: 'codigo-con-opinion',
      content:
        'La deuda técnica es inevitable, pero no debe ser ignorada. Es como una tarjeta de crédito: útil a corto plazo, desastrosa si no se paga. Priorizar su gestión es clave para la salud del proyecto.',
    },
    {
      id: 'opinion-clean-code',
      date: 'FEB 28, 2024',
      title: 'Clean Code: ¿Dogma o guía práctica?',
      description:
        'Discutiendo la aplicación de los principios de Clean Code en el día a día de un desarrollador y sus límites.',
      imageUrl: 'https://placehold.co/600x400/E8F5E9/4CAF50?text=Clean+Code',
      category: 'codigo-con-opinion',
      content:
        'Clean Code es una filosofía, no un conjunto de reglas rígidas. Hay que entender el "por qué" detrás de cada principio y aplicarlo con pragmatismo. A veces, la legibilidad extrema puede ser contraproducente.',
    },
    {
      id: 'opinion-framework-choice',
      date: 'NOV 10, 2023',
      title: 'Elegir el framework adecuado: más allá del hype',
      description:
        'Mi perspectiva sobre cómo seleccionar el framework o librería de frontend correcto para tu proyecto, sin dejarse llevar por las tendencias.',
      imageUrl: 'https://placehold.co/600x400/FFEBEE/F44336?text=Framework+Choice',
      category: 'codigo-con-opinion',
      content:
        'La elección de un framework es una decisión estratégica. No se trata solo de popularidad, sino de la curva de aprendizaje, el ecosistema, la comunidad y, lo más importante, las necesidades específicas del proyecto y del equipo.',
    },
  ];

  constructor() {}

  /**
   * Obtiene todos los ítems de la bitácora o filtra por categoría.
   * Simula una llamada asíncrona con un pequeño retraso.
   * @param category Opcional. La categoría por la cual filtrar ('enlaces', 'diario-tecnico', 'codigo-con-opinion').
   * @returns Un Observable que emite un array de NotebookItem.
   */
  public getNotebookItems(category?: 'enlaces' | 'diario-tecnico' | 'codigo-con-opinion'): Observable<NotebookItem[]> {
    let filteredItems = this.notebookData;
    if (category) {
      filteredItems = this.notebookData.filter((item) => item.category === category);
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
  public getNotebookItemById(id: string): Observable<NotebookItem | undefined> {
    const foundItem = this.notebookData.find((item) => item.id === id);
    // Retorna un Observable para simular asincronía
    return of(foundItem).pipe(delay(200));
  }
}
