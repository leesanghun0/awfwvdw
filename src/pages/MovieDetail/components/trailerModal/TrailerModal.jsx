import React from "react";
import './TrailerModal.style.css';
// import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';

const TrailerModal=({setOpenModal,preview})=>{
    console.log("미리보기",preview)
    const opts={
        width: "100%",
        height: "650px",
        playerVars: {
          autoplay: 1, //자동재생 O
          rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
          modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
        },
    }

    return (
    <div className="movie-modal">
        <div className="movie-modal-wrapper">
            <div className="modal-header">
                <div onClick={()=>setOpenModal(false)}>
                    <i className="xi-close-circle"></i>
                </div>
            </div>
            <div className="modal-body">
                <div className="modal-preview">
                    <YouTube
                        className="video-player"
                        videoId={preview&&preview[0]?.key}
                        opts={opts}
                        //이벤트 리스너 
                        onEnd={(e)=>{e.target.stopVideo(0);}}      
                    />
                </div>
            </div>
        </div>
    </div>)
}


export default TrailerModal;