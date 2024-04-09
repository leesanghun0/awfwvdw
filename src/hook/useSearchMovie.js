import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({keyword,page})=>{
    return keyword?api.get(`/movie/popular?q=${keyword}&page=${page}`) : api.get(`/movie/popular?${page}`);
}
export const useSearchMovieQuery=({keyword,page})=>{
    return (useQuery({
        queryKey:["movie-search",{keyword,page}],
        queryFn:()=>fetchSearchMovie({keyword,page}),
        select:(result)=>result.data
    }))
}