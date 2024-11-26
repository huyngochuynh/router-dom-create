import NetfLixLogo from '../../assets/Images/Netflix_Logo_RGB.png.png';
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";
import { useScrollY } from '../hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar(prop) {
    const [scrollY] = useScrollY();
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
    }

    const handlePressEnter = () => {
        if (keywords.length > 0) {
            navigate(`/search?keywords=${keywords.trim()}`)
        } else {
            navigate('/')
        }
    }

    const goHome = () => {
        navigate('/');
        setKeywords('');
    }

    return (
        <Navigation style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'} }>
            <div className="navContainer">
                <div className="logo" onClick={goHome}>
                    <img src={NetfLixLogo} alt="" />
                </div>

                <div className="navSearch">
                    <IoIosSearch className="iconSearch"/>
                    <input 
                        type="text" 
                        placeholder='Input title, genres, people'
                        onChange={handleChangeInput}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                handlePressEnter()
                            }
                        }}
                        value={keywords}
                    />
                </div>
            </div>
        </Navigation>
    )
}

export default Navbar;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 20;

    @media only sreen and (max-width: 600px) {
        height: 100%;
    }

    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        .logo {
            width: 145px;
            cursor: pointer;
            img {
                width: 100%;
            }
        }

        .navSearch {
            color: var(--color-white);
            padding-right: 120px;
            display: flex;
            justify-content: flex-end;

            &:hover .iconSearch {
                color: var(--color-white);
            }

            .iconSearch {
                width: 20px;
                height: 20px;
                
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }

            input {
                color: white;
                font-size: 15px;
                border: 1px solid #fff;
                outline: none;
                width: 50px;
                padding: 10px;
                cursor: pointer;
                background: var(--color-background);
                transition: width 0.5s;
                
                &:focus {
                    padding-left: 25px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }     
            }       
        }
    }
`;