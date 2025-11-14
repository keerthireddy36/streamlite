import MovieRow from './MovieRow';
import { Movie } from '../types/movie';

type Props = {
  genre: string;
  movies: Movie[];
};

export default function GenreRow({ genre, movies }: Props) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">{genre}</h2>
      <MovieRow movies={movies} categoryTitle={genre} />
    </section>
  );
}