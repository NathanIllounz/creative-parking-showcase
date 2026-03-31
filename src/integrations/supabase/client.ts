import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

console.log("INIT SUPABASE: URL from env ->", import.meta.env.VITE_SUPABASE_URL);

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : (null as any);