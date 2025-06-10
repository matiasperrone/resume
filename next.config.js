/** @type {import('next').NextConfig} */

const removeConsole = process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false;

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole,
  },
}

module.exports = nextConfig
