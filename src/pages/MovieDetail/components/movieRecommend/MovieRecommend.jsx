import React from "react";
import Carousel from 'react-multi-carousel';
import { responsive } from '../../../../constants/responsive';
import MovieRecommendCard from "./components/MovieRecommendCard";
import './movieRecommend.style.css'
//import MovieCard from "../../../../common/movieCard/MovieCard";

const MovieRecommend=({recommend })=>{
    //console.log(recommend)
    return (
    <div className="movie-recommend">
        <h2 className="movie-recommend-title">추천작</h2>
        <Carousel
            className="movie-recommend-slider"
            swipeable={true}
            draggable={true}
            responsive={responsive}
            centerMode={true}
            infinite={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
        >
          {recommend?.map((item,index)=><MovieRecommendCard item={item} key={index}/>)}
        </Carousel>
    </div>)
}

export default MovieRecommend;