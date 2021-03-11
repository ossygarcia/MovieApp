import React from "react";

const Movie = ({ match }) => {
  return <h1>Movie {match.params.id}</h1>;
};

export default Movie;
