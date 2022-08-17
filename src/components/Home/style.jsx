import styled from 'styled-components'
import { Button } from '@mui/material'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:970px) {
        justify-content: center;
    }
`

export const TextDiv = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 30px;
    @media (max-width:970px) {
        align-items: center;
        text-align: center;
        margin: 0;
    }
    @media (max-width:530px) {
        p{
            font-size: 13px;
            margin: 30px;
            margin-bottom: 50px;
        }
    }
`

export const Title = styled.h1`
    font-size: 45px;
    color: #2b75ff;
    margin-bottom: 30px;
    @media (max-width:1070px) {
        font-size: 35px;
    }
    @media (max-width:444px) {
        font-size: 40px;
    }
`


export const Paragraph = styled.p`
    font-size: 20px;
    color: black;
    margin-bottom: 30px;
    @media (max-width:1070px) {
        font-size: 15px;
    }
`

export const Btn = styled(Button)`
    color: #fff !important;
    background-color: #2b75ff !important;
`

export const Image = styled.img`
    height: 450px;
    margin-right: 30px;
    @media (max-width:1250px) {
        height: 300px;
    }
    @media (max-width:970px) {
        display: none;
    }
`
