import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enables Next.js App Router
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Map @ to the src folder
    return config;
  },
  trailingSlash: false, // Ensures URLs do not end with slashes
  trailingSlash: false, // Ensures URLs end with slashes for better SEO
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
