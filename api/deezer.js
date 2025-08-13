export default async function handler(req, res) {
    const { q = 'music', index = 0 } = req.query;
    const url = `https://api.deezer.com/search?q=${encodeURIComponent(q)}&index=${index}`;

    try {
        const r = await fetch(url);
        const data = await r.json();

        // Evitar problemas de CORS en producción
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos de Deezer' });
    }
}
  