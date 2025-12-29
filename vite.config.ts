import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from "@tailwindcss/vite";
import {nitro} from "nitro/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    tsConfigPaths(),
  ],
})
