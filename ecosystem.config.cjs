module.exports = {
  apps: [{
    name: 'tengenx',
    cwd: '/root/dev/tengenx-company-page/.next/standalone',        // ✅ 关键：显式指定项目目录
    script: 'server.js', // 直接运行standalone入口
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '127.0.0.1',
    },
    max_memory_restart: '1G',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }]
}