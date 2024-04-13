import React from "react";
import { useMovieGenre } from "../../../../hook/useMoviegenre";
import Dropdown from 'react-bootstrap/Dropdown';

const MovieFilter = ({ onGenreChange }) => {
    const {data: genres, isLoading, isError}=useMovieGenre();

    if (isLoading) return <div>장르를 불러오는중</div>;
    if (isError) return <div>장르가 없어요</div>;
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {genres.name || "Filter"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onGenreChange("")} >장르별</Dropdown.Item>
                {genres?.map((genre) => (
                    <Dropdown.Item onClick={() => onGenreChange(genre.id)}
                    key={genre.id}
                    value={genre.id}>{genre.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default MovieFilter;
