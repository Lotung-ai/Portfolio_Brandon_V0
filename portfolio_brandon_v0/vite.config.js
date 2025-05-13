import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfoliobrandon/',
    plugins: [react()],
    server: {
        port: 55131,
    }
})