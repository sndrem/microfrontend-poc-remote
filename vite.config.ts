import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as path from "path";
import {rollupImportMapPlugin} from "rollup-plugin-import-map";
import importmap from "./importmap.json" assert {type: "json"};
import EnvironmentPlugin from "vite-plugin-environment";

/** // TODO
 * Må kunne bygge bundle og bruke Aksel-komponenter i container-app. Det fungerer ikke nå
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
    // Denne er nødvendig for å ikke få process.env is undefined når man drar inn appen i container-appen
    EnvironmentPlugin({NODE_ENV: process.env.NODE_ENV || "development"}),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/Microfrontend.tsx"),
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "bundle.js",
        format: "es",
      },
    },
  },
});
