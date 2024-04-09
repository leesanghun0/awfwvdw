import React,{useState} from "react";
import { useSearchMovieQuery } from "../../hook/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import {ClipLoader} from "react-spinners";
import { Alert, Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/movieCard/MovieCard";
import ReactPaginate from 'react-paginate';


const MoviePage= ()=>{
    const [page,setPage]=useState(1);
    const [query,setQuerty] = useSearchParams();
    const keyword = query.get("q");

    const {data, isLoading, isError, error} = useSearchMovieQuery({keyword});   
    console.log(data)

    const handlePageClick=({selected})=>{
        setPage(selected+1);
    }

    if(isLoading)
        return (<div>
            <ClipLoader
                color="rgba(999, 0, 0, 1)"
                size={39}
                speedMultiplier={0.5}
            />
            <h3>잠시만 기다려주세요...</h3>
        </div>)
    if(isError){
        return (
            <Alert variant="danger">{error.message}</Alert>
        )
    }
    return (
    <Container>
        <Row style={{padding:"50px 0"}}>
            <Col lg={4} xs={12}>
                {""}필터
                {""}
            </Col>  
            <Col lg={8} xs={8}>
                <Row>
                    {data?.results.map((movie, index)=>(
                    <Col key={index} lg={3} xs={12}>
                        <MovieCard movie={movie} />
                    </Col>))}
                </Row>
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={data?.total_pages} //전체페이지
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                  forcePage={page-1}
                />
            </Col>  
        </Row>
    </Container>)
}


export default MoviePage;