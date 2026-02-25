/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 414, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400],
  },
  experimental: {
    optimizePackageImports: ["motion", "motion/react", "@iconify/react"],
    useLightningcss: true,
    inlineCss: true,
  },
  compress: true,
}

export default nextConfig
