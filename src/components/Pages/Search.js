import React from 'react'
import { useSelector } from 'react-redux';
import SearchMovies from '../SearchMovies/SearchMovies';
import MoviesDetailComponent from '../MoviesDetail/MoviesDetailComponent';

function Search() {
  const { MovieDetail } = useSelector(state => state.infoMovie);
  return (
    <div>
        <SearchMovies />
        <MoviesDetailComponent showModal={MovieDetail ? true : false} movie={MovieDetail} />
    </div>
  )
}

export default Search;
