import React from "react";
import { Alert } from "react-bootstrap"
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";
import { ClipLoader } from "react-spinners";
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from "../../../../common/movieSlide/MovieSlider";
import { responsive } from "../../../../constants/responsive";



const PopularMovieSlide = () => {
    
    const {data, isLoading, isError, error }=usePopularMoviesQuery();

    if(isLoading){
        return (<div>
            <ClipLoader
                color="rgba(999, 0, 0, 1)"
                size={39}
                speedMultiplier={0.5}
            />
            <h3>잠시만 기다려주세요...</h3>
        </div>)
    }
    if(isError){
       return <Alert variant="danger">{error.message}</Alert>
    }
    return (
    <div className="popular-wrapper">
        <MovieSlider title="Popular Movies" movies={data.results} responsive={responsive}/>
    </div>)
}


export default PopularMovieSlide;