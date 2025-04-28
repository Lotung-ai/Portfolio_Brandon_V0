import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Portfolio_Brandon_V0/',
    plugins: [plugin()],
    server: {
        port: 55131,
    }
})