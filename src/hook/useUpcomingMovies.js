import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpComingMovies=()=>{
    return api.get(`/movie/upcoming`);
}

export const useUpcomingMovie = () =>{
    return (useQuery({
       queryKey: ['UpcomingMovie'],
       queryFn: fetchUpComingMovies,
       select:(result)=>result.data
    }))
}
