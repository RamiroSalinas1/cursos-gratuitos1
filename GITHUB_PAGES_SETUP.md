# Configuración de GitHub Pages

Este documento explica cómo subir este proyecto a GitHub y configurar GitHub Pages para alojarlo.

## Paso 1: Subir archivos a GitHub

1. **Crear repositorio**
   - Ve a [github.com](https://github.com) e inicia sesión
   - Haz clic en el botón verde "New" o "+" → "New repository"
   - Nombra tu repositorio (ejemplo: "cursos-gratuitos")
   - Marca "Public" y haz clic en "Create repository"

2. **Subir archivos**
   - En tu nuevo repositorio, haz clic en "uploading an existing file"
   - Arrastra todos los archivos y carpetas de tu proyecto
   - Si tienes más de 100 archivos, sube primero las carpetas principales
   - Escribe un mensaje como "Subida inicial" y haz clic en "Commit changes"
   - Repite si necesitas subir más archivos

## Paso 2: Configurar GitHub Pages

3. **Activar GitHub Pages**
   - Ve a "Settings" → "Pages" en tu repositorio
   - En "Source", selecciona "GitHub Actions"
   - Verás un mensaje indicando que tu sitio se construirá con GitHub Actions

4. **Verificar despliegue**
   - Ve a la pestaña "Actions" para ver el progreso del despliegue
   - La primera acción debería iniciarse automáticamente después de subir los archivos
   - Una vez completado, ve a "Settings" → "Pages" para ver la URL de tu sitio
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repositorio/`

## Solución de problemas comunes

- **Si el sitio no se ve correctamente**: Verifica que hayas subido todos los archivos necesarios
- **Si las imágenes no cargan**: Asegúrate de que las rutas sean correctas en tu código
- **Si la acción falla**: Revisa los logs en la pestaña "Actions" para ver el error específico

## Archivos importantes incluidos

Este proyecto ya incluye los archivos necesarios para GitHub Pages:

- `.nojekyll`: Evita que GitHub procese tu sitio con Jekyll
- `next.config.js`: Configura Next.js para exportación estática
- `.github/workflows/deploy.yml`: Configura la acción de GitHub para construir y desplegar tu sitio

No necesitas modificar estos archivos a menos que quieras personalizar el despliegue.

