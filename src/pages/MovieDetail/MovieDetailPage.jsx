import React from "react";
import { Badge } from 'react-bootstrap';
import './MovieDetail.style.css';
import { useDetailMovieQuery } from "../../hook/useDetailMovie";
import { useMovieGenre } from "../../hook/useMoviegenre";
import { useParams } from "react-router-dom";
import { addCommas } from "../../utils/numbers";
import MoviewReview from "./components/reviews/MoviewReview";


//https://www.themoviedb.org/t/p/w300_and_h450_bestv2)


const MovieDetailPage= ()=>{
       
    const { id }=useParams()
    const { data, isLoading, isError, error } = useDetailMovieQuery({ id })
    console.log(data);

    if(isLoading){
        return  <p>Loading...</p>
    }
    if(isError){
        return (<div>{error.message}</div>)
    }

    return (<div className="detail-container">
        <div className="detail-poster">
           <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`} alt="" />
        </div>
        <div className="detail-movie-textarea">
            <div>{data?.genres.map((item,key)=><Badge bg="danger" className="p-2 m-1" key={key}>{item.name}</Badge>)}</div>
            <h1>{data?.title}</h1>
            <h4>{data?.tagline}</h4>
            <ul className="detail-movie-user">
                <li><i className="xi-star"></i>{(data?.vote_average).toFixed(1)}</li>
                <li><i className="xi-crown"></i>{(data?.popularity).toFixed(1)}</li>
                <li>{data?.adult?(
                    <Badge bg="danger">청소년 관람불가</Badge>)
                    : (<Badge bg="success">전체이용가</Badge>)}</li>
            </ul>
            <div className="detail-movie-textarea-overview">
                {data?.overview}
            </div>
            <ul className="detail-movie-textarea-etc">
                <li>
                    <span className="strong-badge">Budget</span>
                    ${addCommas(data?.budget)}
                </li>
                <li>
                    <span className="strong-badge">Revenue</span>
                    ${addCommas(data?.revenue)}
                </li>
                <li>
                    <span className="strong-badge">Release Date</span>
                    {data?.release_date}
                </li>
                <li>
                    <span className="strong-badge">Run Time</span>
                    {data?.runtime}분
                </li>
            </ul>
            <MoviewReview/>
        </div>
        
    </div>)
}


export default MovieDetailPage;