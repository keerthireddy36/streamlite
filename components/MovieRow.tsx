'use client';

import Image from 'next/image';
import { Movie } from '../types/movie';

type Props = {
  movies: Movie[];
  categoryTitle: string;
};

export default function MovieRow({ movies, categoryTitle }: Props) {
  return (
    <section className="my-8 px-4">
      <h3 className="text-xl font-semibold mb-4">{categoryTitle}</h3>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[150px]">
            <Image
              src={movie.poster_path}
              alt={movie.title}
              width={150}
              height={225}
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}