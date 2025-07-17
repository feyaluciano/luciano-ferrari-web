import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para crear Observables a partir de valores
import { delay } from 'rxjs/operators'; // 'delay' para simular latencia de red

// Importa la interfaz NotebookItem desde la ubicación compartida
import { NotebookItem } from '@/features/home/models/notebook-item.interface';

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
      date: 'JUL 12, 2025',
      title: 'Refactoring.guru',
      description:
        'Es un sitio educativo enfocado en buenas prácticas de programación. Explica de forma clara y visual conceptos como refactorización, patrones de diseño, principios SOLID y malos olores en el código.',
      imageUrl: './assets/refactoring-guru.png',
      category: 'enlaces',
      externalLink: '#/notebook-sheet/1', // Enlace real
      content:
        'Refactoring.guru es una referencia indispensable para cualquier desarrollador que busque mejorar la calidad de su código. Sus explicaciones son concisas y sus diagramas, muy útiles.',
    },
    {
      id: 'enlace-roadmap-sh',
      date: 'JUN 24, 2025',
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
      date: 'MAY 02, 2025',
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
      date: 'MAY 20, 2025',
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
      id: 'diario-github-actions-deploy',
      date: 'JUL 09, 2025',
      title: 'Automatizando mi web con GitHub Actions y GitHub Pages',
      description:
        'Explorando el poder de GitHub Actions para CI/CD, migré mi sitio personal de Vercel a GitHub Pages, logrando un despliegue continuo y eficiente directamente desde mi repositorio. Esto implicó configurar el repositorio como público y especificar la rama y carpeta de despliegue.',
      imageUrl: './assets/diario-tecnico/github-actions/github-actions-main.png',
      category: 'diario-tecnico',
      externalLink: '#/notebook-sheet/diario-github-actions-deploy',
      content: `
        <p>Después de completar el bootcamp de **Código Facilito** sobre **GitHub Actions**, sentí la necesidad de aplicar estos conocimientos en un proyecto real y tangible. Mi sitio web personal, que hasta entonces residía en Vercel, se convirtió en el candidato perfecto para una migración.</p>
        <p class="mt-4">La decisión fue clara: mover mi web a **GitHub Pages** y, lo más importante, automatizar su despliegue usando las capacidades de **GitHub Actions**. Esto no solo me permitió reforzar los conceptos de Integración Continua y Despliegue Continuo (CI/CD) aprendidos, sino que también simplificó enormemente el proceso de actualización de mi sitio.</p>
        <p class="mt-4">Todo este proceso de reflexión y puesta en práctica **comenzó con un prompt muy específico** que planteé para abordar el desafío de la automatización:</p>
        <div class="bg-gray-100 p-4 rounded-md text-sm italic border-l-4 border-blue-500 my-4">
          <p>"Tengo este repositorio de mi web personal desarrollada con Angular 19</p>
          <p>https://github.com/feyaluciano/luciano-ferrari-web</p>
          <p>quisiera poder crear un worksflow para que cuando se hace un merge a master, esta web se deploye en github pages.</p>
          <p>Primero quiero que me hagas preguntas necesarias para que tengas el contexto de mi proyecto para crear correctamente dicho workflow, luego escribiremo el .yaml"</p>
        </div>
        <p class="mt-4">Un paso crucial en este proceso fue entender y configurar las particularidades de GitHub Pages. Para que mi sitio fuera accesible públicamente, tuve que asegurarme de que el **repositorio de GitHub fuera público**. Además, fue necesario **especificar en la configuración de GitHub Pages cuál sería la rama (generalmente \`gh-pages\` o \`main\`) y la carpeta raíz (por ejemplo, \`/docs\` o la raíz del repositorio) desde donde se servirían los archivos de mi web ya publicada**.</p>
        <p class="mt-4">Configuré un flujo de trabajo (workflow) en GitHub Actions que se dispara automáticamente cada vez que se realiza un *push* a la rama principal de mi repositorio. Este workflow se encarga de construir mi aplicación (si fuera necesario), y luego desplegar los archivos estáticos generados directamente en GitHub Pages. Fue una experiencia gratificante ver cómo la teoría se convertía en una solución práctica y eficiente, manejando estos detalles de configuración para un despliegue sin problemas.</p>
        
        <div class="mt-8 flex justify-center">
          <img 
            class="w-4/5 h-auto rounded-lg shadow-md" 
            src="./assets/diario-tecnico/github-actions/github-actions-workflow.png" 
            alt="Ejemplo de workflow de GitHub Actions">
        </div>
        <p class="mt-4 text-center text-sm text-gray-600">Este proceso me permitió entender mejor cómo funcionan los pipelines de CI/CD en un entorno real, incluyendo los requisitos específicos de la plataforma de despliegue y cómo un prompt inicial puede guiar la solución.</p>
      `,
    },
    {
      id: 'diario-refactor-func-delegates',
      date: 'JUN 10, 2025',
      title: 'Refactorizando con Func<>: De Código Duplicado a una Solución Elegante (Strategy Pattern)',
      description:
        'Cómo eliminé la duplicación de código en C# al abstraer la lógica común y pasar los métodos específicos del repositorio como delegados Func<>.',
      imageUrl: 'https://placehold.co/600x400/E3F2FD/1976D2?text=Refactoring',
      category: 'diario-tecnico',
      externalLink: '#/notebook-sheet/diario-refactor-func-delegates',
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
      externalLink: '#/notebook-sheet/diario-papercut-smtp',
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
      date: 'JUN 02, 2025',
      title: 'Refactorizando con SRP: De un Servicio Sobrecargado a Código Limpio',
      description:
        'Cómo separamos la lógica de notificaciones de un servicio de negocio para cumplir con el Principio de Responsabilidad Única (SRP), resultando en un código más limpio y fácil de mantener.',
      imageUrl: 'https://placehold.co/600x400/E8F5E9/388E3C?text=SRP',
      category: 'diario-tecnico',
      externalLink: '#/notebook-sheet/diario-refactor-srp-service',
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
      date: 'JUN 02, 2025',
      title: 'Configurando Prettier, ESLint y Husky: Código Limpio y Validaciones Pre-Commit',
      description:
        'Descubre cómo integrar Prettier, ESLint y Husky en tus proyectos para asegurar un código limpio, formato consistente y validaciones automáticas antes de cada commit.',
      imageUrl: 'https://placehold.co/600x400/E3F2FD/1976D2?text=ESLint+Prettier+Husky',
      category: 'diario-tecnico',
      externalLink: '#/notebook-sheet/eslint-prettier-husky',
      content:
        '<p>En los proyectos donde he estado trabajando últimamente, siempre me llamaba la atención un detalle al hacer commit de mis cambios: antes de que el commit se hiciera efectivo, se ejecutaban una serie de validaciones automáticas sobre el código. Sabía que ESLint estaba involucrado, pero nunca tuve del todo claro cómo se configuraban estas validaciones para que se ejecutaran en ese preciso momento, ¡justo antes del commit! Tampoco entendía a fondo qué tipo de validaciones se estaban realizando.</p> <p class="mt-4">Esa curiosidad me llevó a investigar a fondo. Quería entender el "detrás de escena" de estas herramientas y, más importante aún, aprender a replicar esa configuración en mis propios proyectos. Así que me puse manos a la obra y logré configurar un proyecto desde cero utilizando una combinación poderosa de tecnologías: <strong>Prettier</strong>, <strong>ESLint</strong>, <strong>Husky</strong> y <strong>Lint-Staged</strong>.</p> <h3 class="text-xl font-semibold mt-6 mb-4">Configurar Prettier en mi entorno de desarrollo</h3> <p>Yo ya tenía Prettier como plugin de mi Visual Studio Code; es una herramienta a nivel de editor de código, diferente a instalar Prettier con npm install --save-dev prettier, que lo instala como una dependencia de desarrollo.</p> <p class="mt-4">Luego de ejecutar ese comando, creé el archivo .prettierrc.json en la raíz del proyecto y lo configuré de esta manera:</p> <div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/eslint-prettier-husky/imagen1.png" alt="Configuración de Prettier"> </div> <p class="mt-4">Luego, creé el archivo .prettierignore para que Prettier ignore ciertos archivos:</p> # .prettierignore /node_modules /dist /.angular<p class="mt-4">Finalmente, agregué estos scripts al archivo package.json, uno para ejecutar Prettier en todos los archivos y el otro para hacer un chequeo de los archivos sin guardar:</p> // package.json { "scripts": { "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,css,scss,html}\"", "check-format": "prettier --check \"**/*.{js,jsx,ts,tsx,json,css,scss,html}\"" } } <h3 class="text-xl font-semibold mt-6 mb-4">Configurar ESLint en mi entorno de desarrollo</h3> <p>Instalé los plugins necesarios: eslint@^8.57.1, eslint-config-prettier@^10.1.5, eslint-plugin-prettier@^5.5.0. Luego, configuré el archivo .eslintrc.cjs de la siguiente manera:</p> <p class="mt-4">Agregué este script a package.json: "check-lint": "eslint \"**/*.{ts,html}\"".</p> <p class="mt-4">Y luego, creé el archivo .eslintrc.cjs con este contenido:</p> <div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/eslint-prettier-husky/imagen2.png" alt="Configuración de ESLint"> </div> <p class="mt-4">Ahora, al ejecutar npm run check-lint, ESLint valida la configuración que le hayamos dado en este archivo y podemos ir corrigiéndolas.</p> <p class="mt-4">Empecé este Diario Técnico diciendo que ESLint se ejecutaba cuando realizaba un commit. Para eso, instalaré <strong>Husky</strong>, que permite ejecutar scripts según ciertos eventos de Git, por ejemplo, en pre-commit.</p> <h3 class="text-xl font-semibold mt-6 mb-4">Configuración de Husky y Lint-Staged</h3> <p>Instalamos npm install --save-dev husky.</p> <p class="mt-4">Luego, ejecutamos npx husky init. Esto creará una carpeta .husky/ en la raíz del proyecto y un script en el package.json.</p> <p class="mt-4">Ahora, uno de los pasos más importantes es configurar el hook pre-commit, pero primero debemos instalar <strong>Lint-Staged</strong>, para poder ejecutar ESLint solo en los archivos que están en el staged y no en todos los archivos. Esto permite no ejecutar ESLint en todos los archivos del proyecto cada vez que se hace un commit.</p> <p class="mt-4">Instalamos Lint-Staged con npm install --save-dev lint-staged y luego en package.json agregamos esta sección:</p> <div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/eslint-prettier-husky/imagen3.png" alt="Configuración de Lint-Staged"> </div> <p class="mt-4">Y solo falta en el archivo .husky/pre-commit agregar esta línea: npm exec lint-staged.</p> <p class="mt-4">Entonces, antes de hacerse el commit, se ejecuta Prettier y modifica los archivos y los guarda, y ejecuta ESLint pero solo muestra los errores para que yo los pueda arreglar. Si queremos que los arregle, o que intente arreglarlo, sería así: eslint --fix.</p> <p class="mt-4">De esta manera, hacemos que nuestro código respete ciertas normas de código limpio y organice los .html, entre otras cosas.</p> <p class="mt-4">Ahora voy a hacer una prueba, voy a crear un método que no usaré y haré un commit, y veremos cómo se ejecuta ESLint, que detecta esa función y nos muestra el error para que lo corrijamos.</p> <div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/eslint-prettier-husky/imagen4.png" alt="Ejemplo de error ESLint en pre-commit"></div> <div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/eslint-prettier-husky/imagen5.png" alt="Ejemplo de error ESLint en pre-commit"></div> ',
    },
    {
      id: 'angular-imports-absolutos',
      date: 'MAY 26, 2025',
      title: 'Angular y TypeScript: Cómo usé imports absolutos para dejar de pelearme con las rutas relativas',
      description:
        'En este Diario Técnico te cuento cómo resolví un problema común en proyectos Angular: los imports con rutas relativas largas. Te muestro paso a paso cómo configuré paths absolutos en tsconfig y mejoré la legibilidad del código.',
      imageUrl: 'https://placehold.co/600x400/E8F5E9/388E3C?text=Imports+Absolutos+Angular',
      category: 'diario-tecnico',
      externalLink: '#/notebook-sheet/angular-imports-absolutos',
      content: `
      <p>Uno de esos pequeños dolores diarios que acumulamos como desarrolladores es lidiar con los imports relativos en Angular. En un proyecto donde estoy trabajando actualmente, noté que para importar un componente desde otro módulo, terminaba escribiendo cosas como:</p>
<div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/angular-imports-absolutos/imagen1.png" alt="imagen1"></div>

      <p>Y ese import no era el único así. Tenía varios archivos con <p>../../../</p> y más niveles, lo que no solo es difícil de leer, sino también bastante frágil: si movés un archivo de carpeta, tenés que revisar todos esos imports manualmente.</p>
    
      <p>Así que me puse a investigar cómo podía solucionar esto y descubrí que TypeScript (y Angular) permiten configurar <strong>imports absolutos</strong> con algo tan simple como tocar el <p>tsconfig.base.json</p></p>
    
      <h3 class="text-xl font-semibold mt-6 mb-4">Configurando imports absolutos: paso a paso</h3>
      <p>En la raíz del proyecto, abrí el archivo <p>tsconfig.base.json</p> (este archivo es el que Angular usa por defecto para configurar TypeScript). Lo primero que hice fue asegurarme de tener <p>"baseUrl": "src"</p>, y luego definí alias para los paths que uso con más frecuencia:</p>
    <div class="mt-8 flex justify-center"> <img class="max-w-full h-auto rounded-lg shadow-md" src="./assets/diario-tecnico/angular-imports-absolutos/imagen2.png" alt="imagen2"></div>

    
      <p>Con eso configurado, pude cambiar imports como este:</p>
      <p>import { HomeHeaderComponent } from '../../../home/components/home-header/home-header.component';</p>
      <p>por algo mucho más limpio:</p>
      <p>import { HomeHeaderComponent } from 'home/components/home-header/home-header.component';</p>
    
      <p>Es mucho más claro desde qué módulo lo estoy trayendo, y además no me preocupo si muevo el archivo actual a otro nivel de carpetas.</p>
    
      <h4 class="text-lg font-medium mt-4 mb-2">Bonus: usando alias con @</h4>
      <p>Para reducir aún más el ruido, podés usar un alias como <code>@</code> para apuntar directamente a <code>app</code>:</p>
      <p>"paths": {
      "@/*": ["app/*"]
    }</p>
      <p>Y luego:</p>
      <p>import { SomeComponent } from '@/shared/components/some/some.component';</p>
    
      <h4 class="text-lg font-medium mt-4 mb-2">Importante: reiniciar todo</h4>
      <ul class="list-disc list-inside">
        <li>Tuve que reiniciar el servidor de Angular (<code>ng serve</code>) para que tome los cambios.</li>
        <li>También reinicié el TS Server en VS Code: <code>Ctrl+Shift+P → TypeScript: Restart TS Server</code>.</li>
      </ul>
    
      <h3 class="text-xl font-semibold mt-6 mb-4">Conclusión</h3>
      <p>Este pequeño cambio me simplificó mucho el trabajo diario. Ahora los imports son más legibles, más mantenibles, y si tengo que mover archivos o carpetas, no se rompe todo.</p>
      <p>Es una de esas cosas que quizás no parecen urgentes, pero que marcan la diferencia cuando el proyecto empieza a escalar.</p>
    
      `,
    },

    // --- Contenido para la solapa "Código con opinión" ---
    {
      id: 'opinion-microfrontends',
      date: 'JUN 20, 2025',
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
      date: 'JUN 05, 2025',
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
      date: 'MAY 28, 2025',
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
      date: 'MAY 10, 2025',
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
