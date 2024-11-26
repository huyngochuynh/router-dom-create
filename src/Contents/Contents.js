import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MoviesRow from './MoviesRow';
import { getNetflixOriginals ,
  getTrendingMovies,
  getTopRatedMovies,
  getActionMovies,
  getComedyMovies,
} from '../components/store/actions';



function Contents() {
  const dispatch = useDispatch();
  const { NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
  } = useSelector(state => state.infoMovies);

  useEffect (() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
  }, [dispatch]);

  return (
    <div>
        <MoviesRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true} idSection="netflix" />
        <MoviesRow movies={TrendingMovies} title="Trending Movies" isNetflix={true} idSection="trending"/>
        <MoviesRow movies={TopRatedMovies} title="Rated Movies" idSection="topRated"/>
        <MoviesRow movies={ActionMovies} title="Action Movies" idSection="actionMovies"/>
        <MoviesRow movies={ComedyMovies} title="Comedy Movies" idSection="comedyMovies"/>
        {/* <GoToTop onClick={() => ScrollToTop()}>
          <FaArrowCircleUp />
        </GoToTop> */}
    </div>
  )
}

export default Contents;
