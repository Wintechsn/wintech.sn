/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/a-propos",
        permanent: true,
      },
      {
        source: "/service/",
        destination: "/a-propos",
        permanent: true,
      },
      // Anciennes URLs WordPress → pages actuelles (Search Console / backlinks)
      {
        source: "/author/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/portfolio-tags/:path*",
        destination: "/realisations",
        permanent: true,
      },
    ];
  },
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
