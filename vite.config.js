import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr' // Used for Icon in MUI with svg file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  // base: './'
  // For absolute import
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})