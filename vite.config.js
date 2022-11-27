import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/baseurl": {
        target: "https://news-at.zhihu.com/api/4",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baseurl/, ""),
      },
    },
  },
  plugins: [vue()],
});
