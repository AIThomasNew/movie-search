import {Movie} from "./types";

const API_KEY = 'b33bfd42fdf28d810c9052b69d9cb4c4'

export const getMovie = (id:number): Promise<Movie> => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(r => r.json())



