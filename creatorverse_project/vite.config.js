import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // define:{
  //   'process.env.VITE_NEXT_PUBLIC_SUPABASE_URL':JSON.stringify(process.env.VITE_NEXT_PUBLIC_SUPABASE_URL),
  //   'process.env.VITE_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY':JSON.stringify(process.env.VITE_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY)
  // }
})
