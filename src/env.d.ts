/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GIPHY_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
