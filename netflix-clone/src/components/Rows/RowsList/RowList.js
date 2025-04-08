import React from "react";
import Row from "../Row/Row";
import requests from "../../../api/request";

function RowList() {
  return (
    <div>
      <Row
        title="NETFLIX ORGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default RowList;
