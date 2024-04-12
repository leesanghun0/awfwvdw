import React, { useState } from "react";
//import {useParams} from "react-router-dom";
import { useReviewMovieQuery } from "../../../../hook/useMovieReview";
import './MovieReview.style.css'

const MoviewReview = ({id}) =>{
    const {data: reviews} = useReviewMovieQuery({id});
    //console.log(reviews[0].content.length)
    
    const [moretext, setMoreText]=useState({});
    
    const handleMoreTextClick = (reviewId) => {
        setMoreText((prevState) => ({
          ...prevState,
          [reviewId]: !prevState[reviewId],
        }));
    };
       
    return (
        <div className="movie-review">
            <h2>Reviews</h2>
            <ul className="movie-review-list">
                {reviews?.map((review,index)=>
                <li key={index}>
                    <div className="movie-review-user">
                        <i className="xi-profile"></i>
                        <h3>{review?.author}</h3>
                    </div>
                    <div className="movie-review-user-content">
                        {moretext[review.id] ? review.content : review.content.slice(0, 200)}
                        {review.content.length > 200 && (
                          <strong className="more-btn" onClick={() => handleMoreTextClick(review.id)}>
                            {moretext[review.id] ? "접기" : "더 보기"}
                          </strong>
                        )}
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default MoviewReview;