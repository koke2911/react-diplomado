
export async function fetchDeezerSearch(query) {
  const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  });
  const data = await res.json();
  return data.data;
}
