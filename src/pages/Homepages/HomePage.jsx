import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/popularMovieSlide/PopularMovieSlide";

const HomePage= ()=>{   
    return (
    <div style={{ color: 'white' }}>
        <Banner/>
        <PopularMovieSlide />
    </div>)
}


export default HomePage;