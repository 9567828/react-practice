// 2019버전으로 class 식의 리액트 강의

import React from "react";
import PropTypes from "prop-types";

// class 컴포넌트가 될 필요가 없기 때문에 함수화 시켜준다.
function PracticeMovie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="moive__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.length > 230 ? `${summary.slice(0, 180)}...` : summary}</p>
        <ul className="movie__genres">
          {genres.map((g, index) => (
            <li key={index} className="genres">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

PracticeMovie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PracticeMovie;
