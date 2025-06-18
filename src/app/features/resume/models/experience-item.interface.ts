export interface ExperienceItem {
  /**
   * Identificador único para el registro (útil para ngFor).
   * @example "exp-1"
   */
  id: string;

  /**
   * URL del logo de la empresa.
   * @example "/assets/logos/company-logo.svg"
   */
  logoUrl: string;

  /**
   * Fecha de inicio en el puesto (formato ISO 8601 es recomendado).
   * @example "2021-08-01"
   */
  startDate: string;

  /**
   * Fecha de fin en el puesto. Puede ser 'Presente' o una fecha.
   * @example "2023-12-31"
   */
  endDate: string;

  /**
   * Tu cargo o rol en la empresa.
   * @example "Desarrollador Full-Stack"
   */
  position: string;

  /**
   * Nombre de la empresa o proyecto.
   * @example "Tech Solutions Inc."
   */
  company: string;

  /**
   * Breve descripción de la empresa o del proyecto principal en el que trabajaste.
   * @example "Líder en soluciones de software para la industria financiera."
   */
  description: string;

  /**
   * Lista de responsabilidades y logros principales en el puesto.
   * @example ["Lideré un equipo de 5 desarrolladores", "Implementé nuevas funcionalidades"]
   */
  responsibilities: string[];

  /**
   * Lista de tecnologías, herramientas o habilidades clave que utilizaste.
   * Perfecto para mostrar como etiquetas (tags).
   */
  technologies: string[];

  /**
   * Número para ordenar los ítems de experiencia en la vista.
   * @example 1
   */
  order: number;
}