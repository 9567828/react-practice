import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovides] = useState([]);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
      if (!response.ok) {
        throw new Error("영화 데이터를 가져오는데 실패 했습니다.");
      }
      const json = await response.json();
      if (json.data.movies.lenght === 0) {
        setError("영화가 없습니다.");
      } else {
        setMovides(json.data.movies);
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
