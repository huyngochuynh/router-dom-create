import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useViewport } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchMovies, getMovieDetails } from '../store/actions';


function SearchMovies(props) {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const { SearchMovies } = useSelector(state => state.infoMovies);
    const keywords = useQuery().get('keywords');
    console.log(keywords)

    useEffect(() => {
      if (keywords) dispatch(getSearchMovies(keywords)) 
    }, [keywords, dispatch])
    
    


  return (
    <SearchPane>
        {
            SearchMovies && SearchMovies.length > 0 ? (
                <div 
                    className="searchContent"
                    style={{
                        gridTemplateColumns: `repeat(${
                            windowWidth > 1200 ? 5 :
                            windowWidth > 992 ? 4 :
                            windowWidth > 768 ? 3 :
                            windowWidth > 600 ? 2 : 1                 
                        }, auto)`
                    }}
                >
                    {
                        SearchMovies.map((movie, index) => {
                            if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                                const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                return (
                                    <div 
                                        className="movieItem" 
                                        key={index}
                                        onClick={() => dispatch (getMovieDetails(movie.belongs_to_collection.name))} 
                                    >
                                        <img src={imageUrl} alt={movie.title || movie.name} />
                                        <span>{movie.title || movie.name}</span>
                                    </div>
                                )}
                            }
                        )
                    }    
                </div>
                ) : (
                    <NotFound>
                        <h1>Your search for "dddh" did not have any mathes</h1>
                    </NotFound>
                )
        }
    </SearchPane>
    
  )
}

export default SearchMovies;

const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: var(--color-background);
    transition: all 0.3s liner;

    .searchContent {
        padding: 40px 60px;
        display: grid;
        gap: 8px;

        &:hover .movieItem {
            opacity: 0.7;
        }

        .movieItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                padding: 4px;
                background: rgba(0, 0, 0, 0.5);
                color: var(--color-white);
                font-weight: bold;
            }
        }
    }
`

const NotFound = styled.div `
    padding: 5rem 8rem;
    color: var(--color-white);
`