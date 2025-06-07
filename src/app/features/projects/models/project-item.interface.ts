export interface ProjectItem {
    /**
     * Identificador único del ítem. Se usa para las rutas de detalle.
     * Ejemplo: '1', 'proyecto-boton-anti-panico'
     */
    id: string;
  
    /**
     * Fecha de publicación o adición del ítem.
     * Formato: 'FEB 12, 2020'
     */
    date: string;
  
    /**
     * Título principal del ítem.
     * Ejemplo: 'Refactoring.guru', 'Mi snippet de TypeScript'
     */
    title: string;
  
    /**
     * Breve descripción o resumen del contenido del ítem.
     */
    description: string;
  
    /**
     * URL de la imagen en miniatura o de portada del ítem.
     * Ejemplo: './assets/proyectos/logobap.png''
     */
    imageUrl: string;
  
    
    /**
     * Opcional: URL externa si el ítem es un enlace a otra web.
     * Si está presente, el enlace "Leer más" apuntará a esta URL.
     */
    externalLink?: string;
  
    /**
     * Opcional: Contenido completo del ítem. Se usaría en la página de detalle.
     * Podría contener texto, código, etc.
     * No es necesario para la lista de la solapa, pero sí para la vista interna.
     */
    content?: string;
  
    /**
     * Opcional: Etiquetas o palabras clave asociadas al ítem.
     * Útil para futuras funcionalidades de búsqueda o filtrado.
     */
    tags?: string[];
  
    // Puedes añadir más atributos si los necesitas en el futuro, por ejemplo:
    // author?: string;
    // readTimeMinutes?: number;

    tecnologies?: string;

    order?: number;
  }