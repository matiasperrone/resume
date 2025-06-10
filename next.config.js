/** @type {import('next').NextConfig} */

const removeConsole = process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false;

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole,
  },
  distDir: "build",
}

module.exports = nextConfig
