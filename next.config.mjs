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

  async headers() {
    return [
      {
        source: "/(.*)", // Applies headers to all routes
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
