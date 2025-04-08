const API_BASE_URL = "https://api.themoviedb.org/3";
const YOUR_API_KEY = process.env.REACT_APP_api_key;

const requests = {
  fetchTrending: `${API_BASE_URL}/trending/all/week?language=en-US&api_key=${YOUR_API_KEY}`,
  fetchNetflixOriginals: `${API_BASE_URL}/discover/tv?with_network=213&api_key=${YOUR_API_KEY}`,
  fetchTopRated: `${API_BASE_URL}/movie/top_rated?language=en-US&api_key=${YOUR_API_KEY}`,
  fetchActionMovies: `${API_BASE_URL}/discover/movie?with_genres=28&api_key=${YOUR_API_KEY}`,
  fetchComedyMovies: `${API_BASE_URL}/discover/movie?with_genres=35&api_key=${YOUR_API_KEY}`,
  fetchHorrorMovies: `${API_BASE_URL}/discover/movie?with_genres=27&api_key=${YOUR_API_KEY}`,
  fetchRomanceMovies: `${API_BASE_URL}/discover/movie?with_genres=10749&api_key=${YOUR_API_KEY}`,
  fetchDocumentaries: `${API_BASE_URL}/discover/movie?with_genres=99&api_key=${YOUR_API_KEY}`,
};

export default requests;
