import React from 'react'
import Intro from '../intro/intro';
import Contents from '../../Contents/Contents';
import Menus from "../Menus/Menus";
import { useSelector } from 'react-redux';

function Home() {
    const { MovieDetail } = useSelector(state => state.infoMovies);
    return (
    <div>
      <Intro />
      <Contents />
      <Menus />
    </div>
  )
}

export default Home;