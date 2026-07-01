import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone Northeastern Satellite Lab site.
// No @shared alias — the component library is consumed as the published
// package @aagf470/ui.
export default defineConfig({
  plugins: [react()],
})
