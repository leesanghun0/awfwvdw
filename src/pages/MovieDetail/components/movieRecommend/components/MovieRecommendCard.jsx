import React from "react";
import './movieRecommendCard.style.css';
import { useMovieGenre } from "../../../../../hook/useMoviegenre";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

const MovieRecommendCard =({item})=>{
    console.log(item)

    const {data:genreData, isError, isLoading, error} = useMovieGenre();
    //console.log("장르 : ",genreDate);
    const showGenre=(genreIdList)=>{
        if(!genreData) return [];
        
        const genreNameList = genreIdList.map((id)=>{
            const genreObject= genreData.find((genre)=>genre.id === id)
            return genreObject.name;
        })
        return genreNameList;
    }
    const navigate = useNavigate();
       const goToDetailPage =(id)=>{
           navigate(`/movies/${id}`)
       }
    
    if(isLoading){
        return <div>잠시만 기다려주세요..</div>
    }
    if(isError){
        return (<div>{error.message}</div>)
    }
    return(
    <div onClick={()=>goToDetailPage(item?.id)} style={{
        backgroundImage:"url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item?.poster_path}`+")",
    }}className="movie-card">
         <div className="overlay">
            <h2>{item?.title}</h2>
            {showGenre(item.genre_ids).map((id,item)=>
                <Badge className="movie-genre" bg="danger" key={id}>
                    {id}
            </Badge>)}
            <div><i className="xi-star"></i> {(item.vote_average).toFixed(1)}</div>
            <div><i className="xi-crown"></i> {Math.floor(item.popularity)}</div>
            <div>{item.adult? <Badge bg="danger">청소년 관란불가</Badge>: <Badge bg="success">전체 이용가</Badge>}</div>
        </div>

    </div>
    )
}


export default MovieRecommendCard;