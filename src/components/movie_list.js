import React, {Component} from 'react';
import MovieListItem from './movie_list_item';

class MoviesList extends Component {

    render() {
        let movies = this.props.movies.map(
            movie => {
                return (
                    <MovieListItem key={movie.id} movie={movie}/>
                )
            }
        );

        return (
            <section className="movies">
                {movies}
            </section>
        );
    }
}

export default MoviesList;