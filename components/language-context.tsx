"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type LanguageCode, type Translation, es, en } from "@/lib/translations"

// Tipo para el contexto
type LanguageContextType = {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: Translation
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Proveedor del contexto
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Estado para el idioma actual
  const [language, setLanguage] = useState<LanguageCode>("es")

  // Obtener las traducciones según el idioma
  const t = language === "es" ? es : en

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Cargar el idioma desde localStorage al iniciar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as LanguageCode | null
      if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook para usar el contexto
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

