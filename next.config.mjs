import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Add this import

// Get the directory name using import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Map @ to the src folder
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
},  
typescript: {
  ignoreBuildErrors: true, // Ignore TypeScript type errors during the build
},
};

export default nextConfig;
