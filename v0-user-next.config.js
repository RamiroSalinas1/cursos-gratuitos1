/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Si tu sitio estará en un subdirectorio, descomenta la siguiente línea
  // basePath: '/nombre-de-tu-repositorio',
}

module.exports = nextConfig

