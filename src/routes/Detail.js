import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // url의 파람을 가져온다.

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
    console.log(movie);
  }, []);

  const getMinutes = () => {
    const minutes = movie.runtime;
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    const formatMin = min < 10 ? `0${min}` : min;

    return `${hours}시간 ${formatMin}분`;
  };

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
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
