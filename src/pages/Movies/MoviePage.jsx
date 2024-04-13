import React,{useState, useEffect} from "react";
import { useSearchMovieQuery } from "../../hook/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import {ClipLoader} from "react-spinners";
import { Alert, Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/movieCard/MovieCard";
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import MovieFilter from "./components/movieFilter/MovieFilter";
import { useMovieGenre } from "../../hook/useMoviegenre";
import './Movie.style.css'

// import FilteredMovieList from "./components/filteredMovieList/FilteredMovieList";

const MoviePage= ()=>{
    const [page,setPage]=useState(1);
    const [query,setQuerty] = useSearchParams();
    const keyword = query.get("q");

    const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});   
    console.log(data)

    const handlePageClick=({selected})=>{
        console.log("page",page)
        setPage(selected+1);
    }
// -------------------------------------------sort------------------------------
    const [sortOption, setSortOption] = useState(""); // 정렬 옵션을 상태로 관리
    const selectOnChange = (option) => {
        setSortOption(option); // 선택된 정렬 옵션 업데이트
    }
    // 정렬 함수
    const sortData = () => {
        if (sortOption === "인기 오름차순") {
            return [...data.results].sort((a, b) => parseFloat(a.popularity) - parseFloat(b.popularity)); // 오름차순 정렬
        } else if (sortOption === "인기 내림차순") {
            return [...data.results].sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)); // 내림차순 정렬
        } else {
            return [...data.results]; 
        }
    }
//--------------------------filter---------------------------
    const { data: genre } = useMovieGenre();
    const [genresFilter, setGenresFilter] = useState("");
    const handleGenreChange = (genreId) => {
        setGenresFilter(genreId);
    };

const filterMoviesByGenre = (movies, genreId) => {
    if (!genreId) return movies; // 장르가 선택되지 않은 경우 모든 영화를 반환
    return movies.filter((movie) => movie.genre_ids.includes(parseInt(genreId)));
};

useEffect(() => {
    setPage(1);
  }, [genresFilter]);


    if(isLoading)
        return (<div style={{height:"100vh",backgroundColor:"black"}}>
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
    <Container className="moviepage-container">
        <div className="boutton-area">
            <Row>
                <Col className="button-box" lg={6} xs={12}>
                    <Row >
                        <Col className="sort-selected-btn">
                            <Dropdown>
                                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                    {sortOption ? sortOption : "인기순 정렬하기"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                      <Dropdown.Item onClick={() => selectOnChange("")}>원래대로</Dropdown.Item>
                                      <Dropdown.Item onClick={() => selectOnChange("인기 오름차순")}>오름차순 정렬</Dropdown.Item>
                                      <Dropdown.Item onClick={() => selectOnChange("인기 내림차순")}>내림차순 정렬</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                   </Row>
                   <Row >
                        <Col className="filter-selected-btn">
                            <MovieFilter onGenreChange={handleGenreChange}/>
                        </Col>
                   </Row>
                </Col>  
            </Row>
        </div>
        <Row className="moviepage-container-row">
            <Col lg={8} xs={12}>
                <Row>
                    {filterMoviesByGenre(sortData(), genresFilter).map((movie, index) => (
                        <Col key={index} lg={3} md={4} xs={12} sm={5} className="d-flex justify-content-center mb-4">
                            <MovieCard movie={movie} />
                        </Col>
                    ))}
                </Row>
                <Row  style={{ paddingTop: '50px',boxSizing:"border-box", margin:"0 auto"}}>
                    <Col className="paginate-box">
                        <ReactPaginate 
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={data?.total_pages} //전체페이지
                        previousLabel="<"
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
            </Col>  
        </Row>
    </Container>)
}


export default MoviePage;