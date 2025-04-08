import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../api/request";
import "./banner.css"; // Import the CSS file

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals, {
          headers: {
            Authorization: `Bearer d73fe93b1470f82e73b0facaea21df86`, // Use 'Bearer' for authorization
          },
        });
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        setError("Failed to fetch movie data.");
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.orginal_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button_play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_button">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
