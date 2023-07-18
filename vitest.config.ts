import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue';
import vuejsx from "@vitejs/plugin-vue-jsx";
export default defineConfig ({
    plugins:[Vue(),vuejsx()],
    test:{
      include: ['packages/**/__tests__/*.test.tsx'],
      name: 'happy-dom',
      environment: 'jsdom',
    }
  })