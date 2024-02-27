import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'

const supabaseUrl = 'https://evnikmzotvzhcykurhch.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bmlrbXpvdHZ6aGN5a3VyaGNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTAwMDk4MywiZXhwIjoyMDI0NTc2OTgzfQ.G1hqGsLzO8B1Uaq7h0p9njBssmrM8O_YFG7q-ezSDuo';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchPoints(callback) {
    let { data, error } = await supabase
        .from('sites')
        .select('*');

    if (error) {
        console.error('Supabase error:', error);
    } else {
        console.log('Retrieved points:', data);
        if (callback && typeof callback === 'function') {
            callback(data); 
        }
    }
}

// export { fetchPoints };
