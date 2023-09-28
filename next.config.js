/** @type {import('next').NextConfig} */

const removeConsole = process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false;

const nextConfig = {
    reactStrictMode: true,
    compiler: {
      reactRemoveProperties: true,
      removeConsole,
    },
    output: "export",
    distDir: "build",
}

module.exports = nextConfig
