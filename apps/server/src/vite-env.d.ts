/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DB_HOST: string;
  readonly VITE_DB_NAME: string;
  readonly VITE_DB_USERNAME: string;
  readonly VITE_DB_PASSWORD: string;
  readonly VITE_DB_DIALECT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
