interface ImportMetaEnv {
  readonly PUBLIC_CLERK_PUBLISHABLE_KEY: string;
  readonly PUBLIC_R2_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
