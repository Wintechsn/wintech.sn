/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-wintech.lindor.dev",
      },
    ],
  },
}

export default nextConfig
