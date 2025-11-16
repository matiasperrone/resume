module.exports = {
  apps: [
    {
      name: "resume.matiasperrone.com",
      script: "bun",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}`,
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 3000,
        PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}`,
      },
    },
  ],
};
