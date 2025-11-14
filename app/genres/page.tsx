import GenreRow from '../../components/GenreRow';
import { Movie } from '../../types/movie';

const genreMap: Record<string, string[]> = {
  Action: ['Mad Max', 'John Wick', 'Gladiator'],
  Comedy: ['Superbad', 'The Mask', 'Step Brothers'],
  'Sci-Fi': ['Interstellar', 'The Matrix', 'Arrival'],
  Drama: ['The Shawshank Redemption', 'Forrest Gump', 'Fight Club'],
};

async function fetchMovie(title: string): Promise<Movie | null> {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${encodeURIComponent(title)}`);
    const data = await res.json();

    if (data.Response === 'True') {
      return {
        id: data.imdbID,
        title: data.Title,
        overview: data.Plot,
        poster_path: data.Poster,
        backdrop_path: data.Poster,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
}

export default async function GenresPage() {
  const genreRows = await Promise.all(
    Object.entries(genreMap).map(async ([genre, titles]) => {
      const movies = await Promise.all(titles.map(fetchMovie));
      return { genre, movies: movies.filter(Boolean) as Movie[] };
    })
  );

  return (
    <main className="pt-20 px-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Browse by Genre</h1>
      {genreRows.map(({ genre, movies }) => (
        <GenreRow key={genre} genre={genre} movies={movies} />
      ))}
    </main>
  );
}