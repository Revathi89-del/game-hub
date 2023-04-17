import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useDate";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
