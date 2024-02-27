import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'

const supabaseUrl = '${{ secrets.SUPABASE_URL }}';
const supabaseKey = '${{ secrets.SUPABASE_KEY }}';
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
