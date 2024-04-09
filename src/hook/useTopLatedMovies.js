import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';


const fetchTopLatedMovies = ()=>{
    return api.get(`/movie/top_rated`);
}

export const useTopLatedMoviesQuery = () =>{
    return (useQuery({
        queryKey:["TopLatedMovie"],
        queryFn: fetchTopLatedMovies,
        select:(result)=>result.data,
    }))
}



