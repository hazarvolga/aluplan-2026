/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aluplan.com.tr',
        port: '',
        pathname: '/wp-content/uploads/**'
      }
      , {
        protocol: 'https',
        hostname: 'addon.aluplan.com.tr',
        port: '',
        pathname: '/wp-content/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  webpack: (config) => {
    // Add support for importing PDF and MP4 files
    config.module.rules.push({
      test: /\.(pdf|mp4)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      }
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/solutions/industry',
        destination: '/solutions/steel',
        permanent: true,
      },

      {
        source: '/solutions/extra-modules',
        destination: '/solutions/addons',
        permanent: true,
      },
      {
        source: '/solutions/PlanliAlanlar',
        destination: '/solutions/imar-yonetmeligi-bim-eklentisi',
        permanent: true,
      },
      {
        source: '/solutions/imar-yonetmliği-bim-eklentisi',
        destination: '/solutions/imar-yonetmeligi-bim-eklentisi',
        permanent: true,
      },
      {
        source: '/solutions/addons/drive-curvev',
        destination: '/solutions/addons/drive-curve',
        permanent: true,
      },


    ]
  },
}

module.exports = nextConfig;
