import React from "react";
import './movieSlider.style.css';
import Carousel from 'react-multi-carousel';
import MovieCard from "../movieCard/MovieCard";
import TopLatedMovie from "../../pages/Homepages/components/topLatedMovieSlide/TopLatedMovieSlide";




const MovieSlider = ({title, movies, responsive})=>{
    return (
    <div>
        <h3>{title}</h3>
        <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            centerMode={true}
            infinite={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
        >
          {movies.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
        </Carousel>
    </div>)
}

export default MovieSlider;