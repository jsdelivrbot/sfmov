import React from 'react';

const movieListItem = (props) => (
    <div className="movie-card">
        <h6>{props.movie.title}</h6>
        <div>{props.movie.release_year}</div>
        <div className="movie-location">{props.movie.locations}</div>
    </div>
);

export default movieListItem;