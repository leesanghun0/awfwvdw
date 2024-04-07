import React from "react";
import { Alert } from "react-bootstrap"
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";
import { ClipLoader } from "react-spinners"
import "./Banner.style.css";


const Banner = () =>{

    const { data, isLoading, isError, error } =usePopularMoviesQuery();
    console.log(data);
    if(isLoading){
        <div>
            <ClipLoader/>
            <h3>잠시만 기다려주세요...</h3>
        </div>
    }
    if(isError){
        <Alert variant="danger">{error.message}</Alert>
    }
    return (
    <div className="banner" style={{
        backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize:"100% 100%",
    }}>
        <div className="banner-text-area">
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
    )
}

export default Banner;