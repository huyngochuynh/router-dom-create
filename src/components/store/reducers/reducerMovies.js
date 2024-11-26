import * as Types from "../types";

const reducerMovieInitialState = {
  NetflixOriginals: [],
  TrendingMovies: [],
  TopRatedMovies: [],
  ActionMovies: [],
  ComedyMovies: [],
  GetMovieDetails: [],
  SearchMovies: [],
}

const reducerMovies = (state = reducerMovieInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case Types.GET_NETFLIX_ORIGINALS:
        return { ...state, NetflixOriginals: payload }

      case Types.GET_TRENDING_MOVIES:
        return { ...state, TrendingMovies: payload }

      case Types.GET_TOP_RATED_MOVIES:
        return { ...state, TopRatedMovies: payload }

      case Types.GET_ACTION_MOVIES:
        return { ...state, ActionMovies: payload }

      case Types.GET_COMEDY_MOVIES:
        return { ...state, ComedyMovies: payload }

      case Types.GET_MOVIE_DETAILS:
          return { ...state, GetMovieDetails: payload }

      case Types.GET_SEARCH_MOVIES:
            return { ...state, SearchMovies: payload }
    default:
      return state
  }
}

export default reducerMovies;
