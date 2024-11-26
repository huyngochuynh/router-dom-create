import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Smooth } from "../utils";
import { useViewport } from "../components/hooks";


function MoviesRow(props) {
  const { movies, title, isNetflix, idSection } = props;

  const slideRef = useRef();
  const movieRef = useRef();
  const [windowWidth] = useViewport();

  const handleScrollRight = () => {
    const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;

    if (slideRef.current.scrollLeft < maxScrollLeft) {
      Smooth (slideRef.current, 250, 
        movieRef.current.clientWidth,
        slideRef.current.scrollLeft
      );
    }
  }

  const handleScrollLeft = () => {
    if (slideRef.current.scrollLeft > 0) {
      Smooth (slideRef.current, 250, 
        -movieRef.current.clientWidth,
        slideRef.current.scrollLeft
      );
    }
  }

  return (
    <MovieRowContainer draggable='false' id={idSection}>
      <h1 className="heading">{title}</h1>
      <MovieSlider 
        ref={slideRef} 
        draggable='true' 
        style={
          movies && movies.length > 0 
            ? {gridTemplateColumns: `repeat(${movies.length}, 
                ${windowWidth > 1200 ? '360px' 
                : windowWidth > 992 ? '300px' 
                : windowWidth > 768 ? '250px': '200px'
                })`
              } : {}
        }>
        {
          movies && movies.length > 0 && movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                
                return (
                  <div 
                    key={index} 
                    className="movieItem" 
                    ref={movieRef} 
                    draggable="false"
                  >
                    <Link to={`/movies/${movie.id}`}>
                      <img src={imageUrl} alt="" draggable="false" />
                      <div className="movieName">{movie.title || movie.name}</div>
                    </Link>
                  </div>
                )
              }  
            }
          )
        }
      </MovieSlider>

      <div className="btnLeft" onClick={handleScrollLeft}><FaAngleLeft /></div>
      <div className="btnRight" onClick={handleScrollRight}><FaAngleRight /></div>
    </MovieRowContainer>
  )
}

export default MoviesRow;

const MovieRowContainer = styled.div `
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 20px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.5);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 1s linear;
    }

  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.5);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 1s linear;
    }
  }
`;

const MovieSlider = styled.div `
  display: grid;
  gap: 5px;
  transition: all 1s linear;
  user-select: none;
  overflow-y : hidden;
  overflow-x : auto;
  overflow : hidden;
  padding-top: 30px;
  padding-bottom: 30px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5:
  }

  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 1s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 5px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.2);
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding; 5px;
      text-align: center;
      font-size: 15px;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;