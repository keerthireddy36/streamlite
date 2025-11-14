'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '../types/movie';

type Props = {
  movie: Movie;
};

export default function Movie({ movie }: Props) {
  return (
    <Link href={`/movie/${movie.id}`} className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center gap-2 bg-gray-700 p-4 rounded-lg shadow-md max-w-[200px]">
        <Image
          src={movie.poster_path}
          alt={movie.title}
          width={150}
          height={225}
          className="rounded"
        />
        <h3 className="text-lg font-semibold text-center">{movie.title}</h3>
        <p className="text-sm text-gray-300 text-center line-clamp-3">{movie.overview}</p>
      </div>
    </Link>
  );
}
