import React from "react";
import { useTopLatedMoviesQuery } from "../../../../hook/useTopLatedMovies";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import MovieSlider from "../../../../common/movieSlide/MovieSlider";
import { responsive } from "../../../../constants/responsive";


const TopLatedMovie = () =>{

    const {data, isLoading, isError, error}= useTopLatedMoviesQuery();
    console.log(data)

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
        return (
            <Alert variant="danger">{error.message}</Alert>
        )
    }

    return (<div>
        <MovieSlider title="Top Lated Movie" movies={data.results} responsive={responsive}/>
    </div>)
}

export default TopLatedMovie;