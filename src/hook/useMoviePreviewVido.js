import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPreviewMove = ({id})=>{
    return api.get(`/movie/${id}/videos`);
}


export const useMoviePreviewVideoQuery= ({id}) =>{
    return useQuery({
        queryKey:["movie-preview",{id}],
        queryFn:()=>fetchPreviewMove({id}),
        select:(result)=>result.data.results    
    })
}