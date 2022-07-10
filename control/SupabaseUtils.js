import { createClient } from 'https://jspm.dev/@supabase/supabase-js'
//import { createClient } from '@supabase/supabase-js'

export default function supabaseAuthentication(supabaseUrl,supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
}