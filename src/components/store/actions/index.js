import axios from "axios";
import * as Types from "../types";


const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDg4ZDAwMzA5M2JmY2IwNjJhMDNmMDUzZDkyMDIwMCIsIm5iZiI6MTczMTQyMjU3Ny4yMTQ1NDc5LCJzdWIiOiI2NzI3ODQ4NDlkY2MyZGQ1MzQ3NDRjZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LTCjN_FSKTd2FPvGl8I65FHDMOYiCLcr4jpzUWwkpZs";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/trending/movie/day?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results })
    } catch (error) {
        console.log("Get Netflix Api error: ", error);
    }
}

export const getTrendingMovies = () => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/tv/airing_today?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log("Get Trending Api error: ", error);
    }
}

export const getTopRatedMovies = () => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/tv/top_rated?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch({type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log("Get Top Rated Api error: ", error);
    }
}

export const getActionMovies = () => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/tv/popular?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch({type: Types.GET_ACTION_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log("Get Action Api error: ", error);
    }
}

export const getComedyMovies = () => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/tv/on_the_air?language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch({type: Types.GET_COMEDY_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log("Get Comedy Api error: ", error);
    }
}

export const getMovieDetails = (movieId) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/movie/${movieId}?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch({type: Types.GET_MOVIE_DETAILS, payload: result.data})
    } catch (error) {
        console.log("Get Comedy Api error: ", error);
    }
}

export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: { query: keywords, include_adult: 'false', language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };
        const result  = await axios.request(options)
        dispatch ({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get Search Movies error: ", error);
    }
}