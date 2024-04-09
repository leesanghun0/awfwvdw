import { useQuery} from '@tanstack/react-query';
import api from '../utils/api';


const fetchMovieGenre = ()=>{
    return api.get(`/genre/movie/list`)
}

export const useMovieGenre =()=>{
    return (useQuery({
        queryKey:['movie-genre'],
        queryFn:fetchMovieGenre,
        select:(result)=>result.data.genres,
        staleTime:300000,//5분
    }))
}