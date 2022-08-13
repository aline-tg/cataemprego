import { createClient } from 'https://jspm.dev/@supabase/supabase-js'
//import { createClient } from '@supabase/supabase-js'

export default function supabaseAuthentication() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhleXV1eW5xeHFvYmdpb3RmZ2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcyNDcyMTUsImV4cCI6MTk3MjgyMzIxNX0.Y7Q_scMNfYmZXmeJWbZI4OUj7ic7GKCDao_j5TP4-Ts"
    const supabase = createClient("https://heyuuynqxqobgiotfgaj.supabase.co", SUPABASE_KEY);
    return supabase;
}