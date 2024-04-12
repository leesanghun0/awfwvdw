import React from "react";
import { Badge } from 'react-bootstrap';
// import { useParams } from "react-router-dom";
import { useRecommendMovieQuery } from "../../../../hook/useRecommendMovie";

const MovieRecommend=({id})=>{
    const{data:recommend,isLoading,isError,error} = useRecommendMovieQuery({id})
    console.log(recommend)
    if(isLoading){
        return  <p>Loading...</p>
    }
    if(isError){
        return (<div>{error.message}</div>)
    }
    return (
    <>
        <ul>
            {recommend.map((item,key)=><li key={key}>{item}</li>)}
        </ul>  
    </>)
}

export default MovieRecommend;