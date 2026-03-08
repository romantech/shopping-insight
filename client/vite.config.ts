import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const naverBaseUrl = env.VITE_NAVER_BASE_URL;

  return {
    plugins: [react(), tsconfigPaths()],
    build: {
      chunkSizeWarningLimit: 550,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) {
              return;
            }

            if (id.includes('node_modules/recharts')) {
              return 'vendor-recharts';
            }

            if (
              id.includes('node_modules/antd') ||
              id.includes('node_modules/@ant-design') ||
              id.includes('node_modules/rc-')
            ) {
              return 'vendor-antd';
            }

            if (id.includes('node_modules/dayjs')) {
              return 'vendor-dayjs';
            }

            if (
              id.includes('node_modules/redux') ||
              id.includes('node_modules/react-redux') ||
              id.includes('node_modules/@redux-devtools')
            ) {
              return 'vendor-redux';
            }

            if (
              id.includes('node_modules/styled-components') ||
              id.includes('node_modules/styled-reset')
            ) {
              return 'vendor-styles';
            }

            if (
              id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/scheduler')
            ) {
              return 'vendor-react';
            }
          },
        },
      },
    },
    server: {
      proxy: naverBaseUrl
        ? {
            '/shopping/category/keyword/age': {
              target: naverBaseUrl,
              changeOrigin: true,
            },
          }
        : undefined,
    },
  };
});
