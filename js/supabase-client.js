const supabaseUrl = '${{ secrets.SUPABASE_URL }}';
const supabaseKey = '${{ secrets.SUPABASE_KEY }}';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchPoints(addMarkers) {
    let { data, error } = await supabase
        .from('sites')
        .select('*'); 

    if (error) {
        console.error('Supabase error:', error);
    } else {
        console.log('Retrieved points:', data);
        addMarkers(data); 
    }
}
