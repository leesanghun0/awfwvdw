import React from "react";
import { Badge } from "react-bootstrap";
import './movieCard.style.css';

const MovieCard = ({movie}) =>{
    return(
    <div style={{
        backgroundImage:"url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`+")"
    }}
    className="movie-card"
    >
        <div className="overlay">
            <h2>{movie?.title}</h2>
            {movie.genre_ids.map((index,item)=>
                <Badge className="movie-genre" bg="danger" key={index}>
                    {item}
            </Badge>)}
            <div><i className="xi-star"></i> {(movie.vote_average).toFixed(1)}</div>
            <div><i className="xi-crown"></i> {Math.floor(movie.popularity)}</div>
            <div>{movie.adult? <Badge bg="danger">청소년 관란불가</Badge>: <Badge bg="success">전체 이용가</Badge>}</div>
        </div>
    </div>)
}

export default MovieCard