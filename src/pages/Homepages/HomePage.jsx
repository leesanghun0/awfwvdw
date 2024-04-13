import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/popularMovieSlide/PopularMovieSlide";
import TopLatedMovieSlide from "./components/topLatedMovieSlide/TopLatedMovieSlide";
import UpComingMovieSlide from "./components/upcominMovieSlide/UpComingMovieSlide";


const HomePage=()=>{   
   
    return (
    <div style={{color: 'white' }}>
        <Banner/>
        <PopularMovieSlide/>
        <TopLatedMovieSlide/>
        <UpComingMovieSlide/>
    </div>)
}


export default HomePage;