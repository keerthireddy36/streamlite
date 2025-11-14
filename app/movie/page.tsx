import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';


const genreMap: Record<string, string[]> = {
  Action: ['John Wick', 'Mad Max', 'Gladiator'],
  Comedy: ['Superbad', 'The Mask', 'Step Brothers'],
  Sci-Fi: ['Interstellar', 'The Matrix', 'Arrival'],
  Drama: ['The Shawshank Redemption', 'Forrest Gump', 'Fight Club'],
};

async function fetchMovie(id: string) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`);
  const data = await res.json();
  return data.Response === 'True' ? data : null;
}

async function fetchRelatedMovies(genre: string): Promise<any[]> {
  const titles = genreMap[genre.split(',')[0]?.trim()] || [];
  const results = await Promise.all(
    titles.map(async (title) => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${encodeURIComponent(title)}`);
      const data = await res.json();
      return data.Response === 'True' ? data : null;
    })
  );
  return results.filter(Boolean);
}

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await fetchMovie(params.id);
  if (!movie) return notFound();

  const related = await fetchRelatedMovies(movie.Genre);

  return (
    <main className="pt-20 px-4 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={300}
          height={450}
          className="rounded shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-300 mb-4">{movie.Plot}</p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><strong>Year:</strong> {movie.Year}</li>
            <li><strong>Genre:</strong> {movie.Genre}</li>
            <li><strong>Director:</strong> {movie.Director}</li>
            <li><strong>Actors:</strong> {movie.Actors}</li>
            <li><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
          </ul>
        </div>
      </div>

      {/* Related Movies */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Related Movies</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {related.map((rel) => (
          <div key={rel.imdbID} className="min-w-[150px] bg-gray-800 p-2 rounded">
            <Link href={`/movie/${rel.imdbID}`}>
              <Image src={rel.Poster} alt={rel.Title} width={150} height={225} className="rounded" />
              <p className="text-sm mt-2 text-center">{rel.Title}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}