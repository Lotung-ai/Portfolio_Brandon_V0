import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Portfolio_Brandon_V0/',
    plugins: [plugin(), ghPages()],
    server: {
        port: 55131,
    }
})