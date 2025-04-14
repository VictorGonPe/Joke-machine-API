/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY_WEATHER: string;
  readonly VITE_API_KEY_JOKE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
