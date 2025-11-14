'use client';

import Image from 'next/image';
import { Movie } from '../types/movie';

type Props = {
  movie: Movie;
};

export default function HeroBanner({ movie }: Props) {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <Image
        src={movie.backdrop_path}
        alt={movie.title}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute bottom-10 left-10 text-white max-w-xl">
        <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
        <p className="text-sm text-gray-200">{movie.overview}</p>
      </div>
    </section>
  );
}