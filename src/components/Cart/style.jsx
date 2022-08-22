import styled from 'styled-components'

import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const Title = styled.h1`
    margin: 40px 0;
    text-align: start;
    font-size: 30px;
    font-weight: 300;
    color: #424242;
    margin-left: 100px;
    @media (max-width:768px) {
        text-align: center;
        margin-left: 0;
    }
`

export const BoxDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:626px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media (max-width:569px) {
        justify-content: center;
    }
`

export const Box = styled.div`
    width: 95%;
    height: 130px;
    background-color: #a8a8a8;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
    img{
        width: 80px;
        height: 80px;
        cursor: pointer;
        object-fit: contain;
    }
    h2{
        font-size: 20px;
        color: #2b2b2b;
    }
    @media (max-width:768px) {
        img{
            width: 60px;
            height: 60px;
        }
        h2{
            font-size: 13px;
        }
    }
    @media (max-width:626px) {
        width: 235px;
        height: 400px;
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 25px;
        img{
            width: 100px;
            height: 300px;
            margin-left: 10px;
        }
        h2{
            margin-left: 10px;
            margin-bottom: 10px;
        }
    }
`

export const BoxTexts = styled.div`
    max-width: 160px;
    h1{
        font-size: 20px;
        color: #2b2b2b;
        font-weight: 450;
    }
    p{
        font-size: 15px;
        color: #2b2b2b;
        font-weight: 300;
    }
    @media (max-width:768px) {
        h1{
            font-size: 18px;
        }
    }
    @media (max-width:626px) {
        margin-left: 10px;
        max-width: none;
        margin-bottom: 10px;
    }
`

export const Remove = styled(CloseIcon)`
    width: 45px !important;
    height: 45px !important;
    cursor: pointer !important;
    object-fit: contain !important;
    @media (max-width:626px) {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`

export const Nothing = styled.h1`
    font-size: 40px;
    color: #2b75ff;
    text-align: center;
    margin: 100px 0;
`




