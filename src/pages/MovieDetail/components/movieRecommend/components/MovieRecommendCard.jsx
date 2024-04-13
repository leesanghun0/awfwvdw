import React from "react";
import './movieRecommendCard.style.css';

const MovieRecommendCard =({item})=>{
    console.log(item)
    return(
    <div className="recommend-card">
        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item?.poster_path}`} alt="" />
    </div>)
}


export default MovieRecommendCard;