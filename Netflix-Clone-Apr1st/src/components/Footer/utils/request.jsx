const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRateMovies: `/discover / tv ? api_key = ${API_KEY}&languages=en-US`,
  fetchActionMovies: `/discover / tv ? api_key = ${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover / tv ? api_key = ${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover / tv ? api_key = ${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover / tv ? api_key = ${API_KEY}&with_genres=99`,
  fetchShows: `/ tv/popular?api_key = ${API_KEY}&language=en-US&page=1`,
};
export default requests;
