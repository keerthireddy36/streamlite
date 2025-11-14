'use client';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import MovieRow from '../components/MovieRow';
import HeroBanner from '../components/HeroBanner';
import { Movie } from '../types/movie';

const movieTitles = [
  'Inception',
  'Interstellar',
  'The Dark Knight',
  'Tenet',
  'Dunkirk',
  'The Prestige',
  'Memento',
  'Batman Begins',
  'Oppenheimer',
  'The Matrix',
  'Gladiator',
  'Fight Club',
  'Forrest Gump',
  'The Shawshank Redemption',
  'Pulp Fiction',
];

async function fetchMovie(title: string): Promise<Movie | null> {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${encodeURIComponent(title)}`);
    const data = await res.json();

    if (data.Response === 'True') {
      return {
        id: parseInt(data.imdbID.replace(/\D/g, '')) || Math.random(),
        title: data.Title,
        overview: data.Plot,
        poster_path: data.Poster,
        backdrop_path: data.Poster, // fallback since OMDb doesn't provide backdrops
      };
    }

    return null;
  } catch (error) {
    console.error(`Failed to fetch ${title}:`, error);
    return null;
  }
}

export default async function HomePage() {
  const moviePromises = movieTitles.map(fetchMovie);
  const movies = (await Promise.all(moviePromises)).filter(Boolean) as Movie[];

  return (
    <>
      <Header />
<SearchBar />
<main className="pt-4 bg-gray-900 text-white">
  {/* rest of your content */}
</main>
      
      <main className="pt-20 bg-gray-900 text-white">
        {movies.length > 0 && <HeroBanner movie={movies[0]} />}
        <MovieRow movies={movies.slice(1, 6)} categoryTitle="Trending Now" />
        <MovieRow movies={movies.slice(6, 11)} categoryTitle="Top Picks" />
        <MovieRow movies={movies.slice(11, 15)} categoryTitle="Classics" />
      </main>
    </>
  );
}