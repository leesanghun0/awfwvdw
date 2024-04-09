import React from "react";
import { useUpcomingMovie } from "../../../../hook/useUpcomingMovies";
import { ClipLoader } from "react-spinners";
import {Alert} from "react-bootstrap";
import MovieSlider from "../../../../common/movieSlide/MovieSlider";
import { responsive } from "../../../../constants/responsive";




const UpComingMovieSlide = () =>{
    const {data, isLoading, isError, error} = useUpcomingMovie();

    if(isLoading)
        return (<div>
            <ClipLoader
                color="rgba(999, 0, 0, 1)"
                size={39}
                speedMultiplier={0.5}
            />
            <h3>잠시만 기다려주세요...</h3>
        </div>)
    if(isError){
        return (
            <Alert variant="danger">{error.message}</Alert>
        )
    }
    return (<div>
        <MovieSlider title="UpComingMovies" movies={data.results} responsive={responsive}/>
    </div>)
}


export default UpComingMovieSlide;