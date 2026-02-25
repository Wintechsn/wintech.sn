/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["motion", "motion/react"],
    useLightningcss: true,
    inlineCss: true,
  },
  compress: true,
}

export default nextConfig
