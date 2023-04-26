import { MovieType } from "@/util/MovieTypes";
import getMovie from "@/util/getMovie";
import React from "react";

type Params = {
  params: {
    movieId: string;
  };
};

export default async function page({ params: { movieId } }: Params) {
  const movies: Promise<MovieType> = await getMovie(movieId);
  return (
    <div>
      <p>{(await movies).backdrop_path}</p>
      <p>{(await movies).original_title}</p>
    </div>
  );
}
