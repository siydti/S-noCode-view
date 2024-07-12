import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueJsx from "@vitejs/plugin-vue-jsx";

import { createHtmlPlugin } from "vite-plugin-html";
const getTarget = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      VueJsx(),
      createHtmlPlugin({
        inject: {
          data: {
            title: getTarget(mode, "VITE_APP_TITLE"),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // @代替src
      },
    },
    build: {
      cssCodeSplit: true,
      sourcemap: false,
      target: "modules",
      chunkSizeWarningLimit: 550,
      assetsInlineLimit: 4096,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        output: {
          comments: false,
        },
      },
    },
    server: {
      port: 3333,
      open: false,
      cors: true,
      proxy: {
        "/api": {
          target: "URL_ADDRESS",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
