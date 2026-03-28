import { createClient } from '@supabase/supabase-js';
const URL = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
export const supabase = createClient(URL, API_KEY);