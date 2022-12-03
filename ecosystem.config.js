module.exports = {
  apps: [
    {
      name: "NextMetaverse",
      exec_mode: "cluster",
      instances: 1,
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      max_memory_restart: "1G",
      autorestart: true,
      watch: false,
      env: {
        PORT: 3002,
        NODE_ENV: "production",
      },
    },
  ],
};
