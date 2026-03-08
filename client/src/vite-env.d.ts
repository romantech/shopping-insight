/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LAMBDA_API_KEY: string;
  readonly VITE_LAMBDA_BASE_URL: string;
  readonly VITE_NAVER_BASE_URL: string;
  readonly VITE_NAVER_CLIENT_ID: string;
  readonly VITE_NAVER_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
