import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // url의 파람을 가져온다.

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      if (json.data.movie) {
        setMovie(json.data.movie);
      } else {
        throw new Error("영화를 찾을 수 없습니다.");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  const getMinutes = () => {
    const minutes = movie.runtime;
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    const formatMin = min < 10 ? `0${min}` : min;

    return `${hours}시간 ${formatMin}분`;
  };

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
        <h1>loading...</h1>
      ) : (
        <div>
          <div>
            <Link to={`${process.env.PUBLIC_URL}/`}>홈으로</Link>
          </div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>개봉년도: {movie.year}</p>
          <p>평점: {movie.rating}</p>
          <p>runtime: {getMinutes()}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
