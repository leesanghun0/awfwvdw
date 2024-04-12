import React from "react";
//import {useParams} from "react-router-dom";
import { useReviewMovieQuery } from "../../../../hook/useMovieReview";


const MoviewReview = ({id}) =>{
    const {data: reviews} = useReviewMovieQuery({id});
    console.log(reviews)
    
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews?.map((review,key)=><li key={key}>{review.content}</li>)}
            </ul>
        </div>
    )
}

export default MoviewReview;