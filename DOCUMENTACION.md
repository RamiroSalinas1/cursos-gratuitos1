# Documentación: Aplicación de Cursos Gratuitos

Esta documentación explica en detalle cómo funciona la aplicación y cómo personalizarla para añadir más cursos, etiquetas e imágenes.

## 1. Estructura de Datos de Cursos (`lib/courses.ts`)

Este archivo es el más importante para añadir nuevos cursos y categorías:

```typescript
// Definición del tipo Course
export type Course = {
  id: number                // Identificador único del curso
  title: string             // Título del curso
  description: string       // Descripción breve
  link: string              // Enlace al curso
  categories: string[]      // Categorías a las que pertenece (array)
  imageUrl?: string         // URL de la imagen (opcional)
}

// Array de categorías disponibles
export const categories: string[] = [
  "programación",
  "diseño-web",
  // ... más categorías
]

// Array de cursos
export const courses: Course[] = [
  {
    id: 1,
    title: "JavaScript desde Cero",
    description: "Aprende los fundamentos de JavaScript para desarrollo web",
    link: "https://example.com/js-course",
    categories: ["programación", "diseño-web"],
    // imageUrl: "/images/javascript.jpg" // Puedes añadir esto
  },
  // ... más cursos
]

