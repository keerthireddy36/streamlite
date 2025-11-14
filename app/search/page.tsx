import Movie from '../../components/Movie';
import { Movie as MovieType } from '../../types/movie';

async function fetchMovie(title: string): Promise<MovieType | null> {
  if (!title) return null;

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

export default async function SearchPage({ searchParams }: { searchParams: { title?: string } }) {
  const movie = await fetchMovie(searchParams?.title || '');

  return (
    <main className="pt-20 px-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      {movie ? (
        <div className="flex justify-center">
          <Movie movie={movie} />
        </div>
      ) : (
        <p className="text-center text-gray-400">No results found for "{searchParams?.title}"</p>
      )}
    </main>
  );
}