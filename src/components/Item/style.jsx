import { Button } from '@mui/material'
import styled from 'styled-components'






export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const MainDiv = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid red;
    @media (max-width:768px) {
        flex-direction: column;
        height: auto;
        margin-top: 30px;
    }
`

export const DataImg = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    @media (max-width:930px) {
        width: 220px;
        height: 220px;
    }
    @media (max-width:590px) {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }
`

export const TextDiv = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    h1{
        font-size: 30px;
        color: #3b3b3b;
        margin-bottom:25px;
    }
    p{
        font-size: 15px;
        color: black;
        margin-bottom:25px;
    }
    h2{
        font-size: 20px;
        color: #ffae00;
        margin-bottom:25px;
    }
    h3{
        font-size: 20px;
        color: #1b1b1b;
        margin-bottom:25px;
    }
    @media (max-width:930px) {
        transform: scale(0.9);
    }
    @media (max-width:768px) {
        width: 70%;
        align-items: center;
        transform: scale(1.0);
        h1{
            text-align: center;
        }
        p{
            text-align: center;
        }
    }
    @media (max-width:590px) {
        width: 80%;
        h1{
            font-size: 20px;
        }
        p{
            font-size: 13px;
        }
        h2{
            font-size: 20px;
        }
        h3{
            font-size: 20px;
        }
    }
`

export const Hr = styled.div`
    width: 100%;
    background-color: #bbbbbb;
    height: 1px;
    margin-bottom: 40px;
`

export const ButtonDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:590px) {
        height: auto;
        margin-bottom: 20px;
    }
    @media (max-width:425px) {
        flex-direction: column;
        height: 100px;
    }
`

export const MainButton = styled(Button)`
    width: 150px !important;
    height: 40px !important;
    font-weight: 500 !important;
    @media (max-width:425px) {
        width: 100% !important;
    }
`

// export const ImgDiv = styled.div`
//     grid-area: img;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// export const InfoDiv = styled.div`
//     grid-area: info;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: flex-start;
// `

// export const InTitle = styled.h1`
//     font-size: 50px;
//     color: black;
// `

// export const InDes = styled.p`
//     font-size: 15px;
//     color: #4e4e4e;
// `

// export const InPrice = styled.h2`
//     font-size: 25px;
//     color: orange;
// `

// export const InRating = styled.h2`
//     font-size: 25px;
//     color: black;
// `

// export const ButtonDiv = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: start;
//     align-items: center;
// `

// export const InBtn = styled(Button)`
//     width: 300px !important;
//     margin-right: 40px !important;
// `



