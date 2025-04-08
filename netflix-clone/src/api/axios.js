// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // params: {
  //   api_key: process.env.REACT_APP_api_key, // Replace with your TMDB API key
  //   language: "en-US",
  // },
});

export default instance;
