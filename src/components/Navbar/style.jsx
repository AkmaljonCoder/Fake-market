import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';

export const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 3px 9px 0px rgba(34, 60, 80, 0.2);
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    height: 80px;
    margin-left: 30px;
    cursor: pointer;
    @media (max-width:550px) {
        height: 50px;
    }
`

export const LinkDiv = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
    @media (max-width:860px) {
        display: none;
    }
`

export const Link = styled(NavLink)`
    text-decoration: none !important;
    color: #111 !important;
    font-size: 20px !important;
`

export const LinkTo = styled.h2`
    text-decoration: none;
    color: #111;
    font-size: 20px;
    cursor: pointer;
    font-weight: 400;
`

export const MenuWrapper = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: -100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    background-color: white;
    box-shadow: -16px 0px 32px 3px rgba(34, 60, 80, 0.2);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    h2{
        font-size: 25px;
        color: #2b75ff;
        display: block;
        transition: 0.3s;
        margin: 20px 20px;
        cursor: pointer;
    }
`

export const Menu = styled(MenuIcon)`
    width: 35px !important;
    height: 35px !important;
    object-fit: contain !important;
    cursor: pointer;
    color: #070707 !important;
    display: none !important;
    margin-right: 30px;
    @media (max-width:860px) {
        display: block !important;
    }
`

export const CloseBtn = styled.h3`
    padding: 8px 8px 8px 32px;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor:pointer;
`


