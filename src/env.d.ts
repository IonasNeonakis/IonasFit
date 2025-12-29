/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Client-side environment variables
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

// Server-side environment variables
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly CARD_NUMBER: string
            readonly DEVICE_ID: string
        }
    }
}

export {}