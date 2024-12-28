import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command }) => {
  const isDevMode = command === "serve";
  return {
    resolve: {
      alias: {
        ...(isDevMode
          ? {
              p5: path.resolve(__dirname, "./node_modules/p5/lib/p5.js"),
            }
          : {}),
      },
    },
  };
});
