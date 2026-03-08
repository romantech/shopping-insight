import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const naverBaseUrl = env.VITE_NAVER_BASE_URL;

  return {
    plugins: [react(), tsconfigPaths()],
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
