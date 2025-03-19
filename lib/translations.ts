// Definición de tipos para las traducciones
export type Translation = {
  // Textos de la interfaz
  ui: {
    title: string
    subtitle: string
    searchPlaceholder: string
    allCategories: string
    filtering: string
    clear: string
    noResults: string
    tryAgain: string
    viewCourse: string
  }
  // Nombres de categorías
  categories: Record<string, string>
}

// Traducciones en español
export const es: Translation = {
  ui: {
    title: "Cursos",
    subtitle: "recursos de aprendizaje gratuitos",
    searchPlaceholder: "Buscar cursos...",
    allCategories: "Todos",
    filtering: "Filtrando por:",
    clear: "Limpiar",
    noResults: "No se encontraron cursos",
    tryAgain: "Intenta con otra búsqueda o categoría",
    viewCourse: "Ver curso",
  },
  categories: {
    programación: "Programación",
    "diseño-web": "Diseño Web",
    marketing: "Marketing",
    idiomas: "Idiomas",
    negocios: "Negocios",
    "desarrollo-personal": "Desarrollo Personal",
    "ciencia-datos": "Ciencia de Datos",
    "inteligencia-artificial": "Inteligencia Artificial",
    fotografía: "Fotografía",
    música: "Música",
    salud: "Salud",
    finanzas: "Finanzas",
    educación: "Educación",
    cocina: "Cocina",
    arte: "Arte",
    DevOps: "DevOps",
  },
}

// Traducciones en inglés
export const en: Translation = {
  ui: {
    title: "Courses",
    subtitle: "free learning resources",
    searchPlaceholder: "Search courses...",
    allCategories: "All",
    filtering: "Filtering by:",
    clear: "Clear",
    noResults: "No courses found",
    tryAgain: "Try another search or category",
    viewCourse: "View course",
  },
  categories: {
    programación: "Programming",
    "diseño-web": "Web Design",
    marketing: "Marketing",
    idiomas: "Languages",
    negocios: "Business",
    "desarrollo-personal": "Personal Development",
    "ciencia-datos": "Data Science",
    "inteligencia-artificial": "Artificial Intelligence",
    fotografía: "Photography",
    música: "Music",
    salud: "Health",
    finanzas: "Finance",
    educación: "Education",
    cocina: "Cooking",
    arte: "Art",
    DevOps: "DevOps",
  },
}

// Idiomas disponibles
export const languages = {
  es: "Español",
  en: "English",
}

// Tipo para los idiomas disponibles
export type LanguageCode = keyof typeof languages

