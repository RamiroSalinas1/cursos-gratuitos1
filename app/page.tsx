"use client"

import { useState, useRef } from "react"
import { Search, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { courses, categories } from "@/lib/courses"
import { useLanguage } from "@/components/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      // Remove category if already selected
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category))
    } else {
      // Add category if not selected
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // Actualizar la función handleHover para transiciones más suaves
  const handleHover = (courseId: number | null) => {
    setHoveredCourse(courseId)
  }

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategories.length === 0 || course.categories.some((cat) => selectedCategories.includes(cat))

    return matchesSearch && matchesCategory
  })

  // Función para traducir el nombre de la categoría
  const translateCategory = (category: string) => {
    return t.categories[category] || category
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        {/* Actualizar las animaciones principales para hacerlas más suaves */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            {t.ui.title}
            <span className="text-blue-500">.</span>
          </h1>
          <p className="text-gray-500 text-sm">{t.ui.subtitle}</p>
        </motion.div>

        <div className="mb-8 md:mb-12 max-w-2xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder={t.ui.searchPlaceholder}
              className="pl-10 border-0 shadow-sm rounded-full h-12 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant="outline"
              onClick={() => setSelectedCategories([])}
              className={`rounded-full transition-all duration-300 ${
                selectedCategories.length === 0
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-50 hover:bg-gray-100 text-gray-700"
              }`}
              size="sm"
            >
              {t.ui.allCategories}
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                onClick={() => toggleCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategories.includes(category)
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
                size="sm"
              >
                {translateCategory(category)}
                {selectedCategories.includes(category) && <span className="ml-1">×</span>}
              </Button>
            ))}
          </div>

          {selectedCategories.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                {t.ui.filtering} {selectedCategories.map(translateCategory).join(", ")}
                <button onClick={() => setSelectedCategories([])} className="ml-2 text-blue-500 hover:text-blue-700">
                  {t.ui.clear}
                </button>
              </p>
            </div>
          )}
        </div>

        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                whileHover={{ boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`bg-white border border-gray-100 rounded-xl overflow-visible shadow-sm hover:shadow-md transition-all relative ${
                  hoveredCourse === course.id ? "z-10" : ""
                }`}
                onMouseEnter={() => handleHover(course.id)}
                onMouseLeave={() => handleHover(null)}
                onTouchStart={() => {
                  if (hoveredCourse === course.id) {
                    handleHover(null)
                  } else {
                    handleHover(course.id)
                  }
                }}
              >
                <AnimatePresence>
                  {hoveredCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute -top-[70px] left-0 right-0 z-20 pointer-events-none"
                    >
                      <div className="bg-white rounded-t-xl shadow-lg border border-gray-200 border-b-0 mx-auto w-full h-[70px] overflow-hidden">
                        {course.imageUrl ? (
                          <img
                            src={course.imageUrl || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <div className="text-xs text-gray-500 p-2 text-center">{course.title}</div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.categories.slice(0, 2).map((cat) => (
                      <Badge
                        key={cat}
                        variant="secondary"
                        className="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100"
                      >
                        {translateCategory(cat)}
                      </Badge>
                    ))}
                    {course.categories.length > 2 && (
                      <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                        +{course.categories.length - 2}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-1">{course.title}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-1">{course.description}</p>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    {t.ui.viewCourse}
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-light">{t.ui.noResults}</h3>
              <p className="text-gray-500 mt-2 text-sm">{t.ui.tryAgain}</p>
            </div>
          )}
        </motion.div>
      </div>

      <footer className="py-6 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-500 hover:text-blue-500 transition-colors"
          >
            <Send className="h-4 w-4 mr-2" />
            @username
          </a>
        </div>
      </footer>
    </div>
  )
}

