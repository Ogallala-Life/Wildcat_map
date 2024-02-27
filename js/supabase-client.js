import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'

const supabaseUrl = 'https://evnikmzotvzhcykurhch.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bmlrbXpvdHZ6aGN5a3VyaGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMDA5ODMsImV4cCI6MjAyNDU3Njk4M30.ouBQTvGv0gFJGjy1EMwdCv2oLtDOPQPah31k1uaMxWA';
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
