import React from 'react';
import moment from "moment";
import styled, { keyframes } from 'styled-components';

function MoviesDetailComponent(props) {
    const { movie } = props;
    console.log(movie);

    return (            
        <MoviesDetailModal className="modal">
        <div className="container" 
            style={
                    movie ? {backgroundImage: `url('https://api.themoviedb.org/3/movie/${movie.id}?language=en-US/${movie.backdrop_path || movie.poster_path}')`,
                            backgroundSize: 'cover'
                    } : {}
                }
        >
            <div className="movieInfo">
                <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
                <p className="statistical">
                    <span className="rating">Rating: {movie && movie.vote_average}%</span>
                    <span className="popularity">Popularity: {movie && movie.popularity}</span>
                </p>

                <p className="releaseDate">Release Date: {movie && 
                    (moment(movie.release_date).format('DD/MM/YYYY') || 
                    moment(movie.first_air_date).format('DD/MM/YYYY'))
                    }
                </p>

                <p className="runtime">Runtime: {movie && (movie.runtime || movie.episode_run_time)}</p>
                <p className="overview">{movie?.overview??""} </p>
            </div>
        </div>
        </MoviesDetailModal>
    )
}

export default MoviesDetailComponent;


const fadeIn = keyframes `
    0%: { background: rgba(0, 0, 0, 0)}
    100%: { background: rgba(0, 0, 0, 0.6)}
`

const MoviesDetailModal = styled.div`
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background-color: rgba(0, 0, 0, 0.6);
        animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
    }

    .showBackdrop {
        display: block;
    }

    .hideBackdrop {
        display: none;
    }

    .modal {
        position: fixed;
        top: 25%;
        left: 0;
        width: 100%;
        height: 50%;
        z-index: 300;
        margin: 0 auto;
        color: var(--color-white);
        box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
        transition: all 0.3 ease;

        @media screen and (max-width: 1180px) {
            height: 80%;
        }

        .container {
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 60%, transparent);

            @media screen and (max-width: 1180px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.755) ,transparent);
                width: 90%;
            }

            @media screen and (max-width: 900px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 50% ,transparent);
                width: 100%;
            }

            @media screen and (max-width: 600px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 60% ,transparent);
            }

            .movieInfo {
                width: 65%;
                height: 100%;
                padding-left: 25px;
                color: var(--color-white);
                font-size: 20px;
                padding-top: 30px;

                @media screen and (max-width: 600px) {
                    font-size: 16px;
                    width: 80%;
                }

                .movieTitle {
                    margin-top: 30px;
                }

                .statistical {
                    margin-top: 20px;
                    display: flex;

                    .rating{
                        color: var(--color-green);
                    }

                    .popularity {
                        color: yellow;
                        margin-left: 15px;
                    }
                }

                .releaseDate, .runtime {
                    margin-top: 15px;
                }


                .overview {
                    margin-top: 20px;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.4;
                    font-size: 20px;

                    @media screen and (max-width: 600px) {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`