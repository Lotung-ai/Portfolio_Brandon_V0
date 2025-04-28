import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), ghPages()],
    server: {
        port: 55131,
    }
})