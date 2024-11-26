import styled from "styled-components";
import MenuItem from "./MenuItem";
import { RiNetflixFill } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";
import { GiSerratedSlash } from "react-icons/gi";
import { GrAction } from "react-icons/gr";
import { MdOutlineTheaterComedy } from "react-icons/md";

function Menus(prop) {
    return (
        <MenusPane>
            <MenuItem name="Netflix" Icon={RiNetflixFill} to='netflix'/>
            <MenuItem name="Trending" Icon={IoMdTrendingUp} to='trending'/>
            <MenuItem name="Top rated" Icon={GiSerratedSlash} to='topRated'/>
            <MenuItem name="Actions Movies" Icon={GrAction} to='actionMovies'/>
            <MenuItem name="Comedy Movies" Icon={MdOutlineTheaterComedy} to='comedyMovies'/>
        </MenusPane>
    )
};

export default Menus;

const MenusPane = styled.div `
    position: fixed;
    left: 0;
    top: 20%;
    width: 40px;
    padding: 5px 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 1s linear;
    overflow: hidden;
    &:hover {
        width: 200px;
        background: rgba(0, 0, 0, 0.5);
    }

    .subMenu {
        display: flex;
        aling-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 10px;
        }

        span {
            font-size: 15px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            &:hover {
                color: #fff;
            }
        }
    }
`;