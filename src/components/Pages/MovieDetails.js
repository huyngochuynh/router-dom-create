import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from "../store/actions"
import MoviesDetailComponent from "../MoviesDetail/MoviesDetailComponent";

function MoviesDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { MovieDetail } = useSelector(state => state.infoMovies);

  useEffect(() => {
    if (id.length > 0) {
      dispatch(getMovieDetails(id))
    }
  }, [dispatch, id])

  return (
    <div>
      <MoviesDetailComponent movie={MovieDetail} />
    </div>
  )
}

export default MoviesDetails;