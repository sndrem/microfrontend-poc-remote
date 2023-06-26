import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as path from "path";
import {rollupImportMapPlugin} from "rollup-plugin-import-map";
import importmap from "./importmap.json" assert {type: "json"};
import federation from "@originjs/vite-plugin-federation";

/** // TODO
 * Må kunne bygge bundle og bruke Aksel-komponenter i container-app. Det fungerer ikke nå
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    // {
    //   ...rollupImportMapPlugin([importmap]),
    //   enforce: "pre",
    //   apply: "build",
    // },
    federation({
      name: "deltakerliste",
      filename: "Microfrontend.tsx",
      // Modules to expose
      exposes: {
        "./Microfrontend": "./src/Microfrontend.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    manifest: true,
    lib: {
      entry: path.resolve(__dirname, "src/Microfrontend.tsx"),
      name: "deltakerliste",
      formats: ["es"],
      fileName: () => `bundle.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
