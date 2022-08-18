import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    /* max-width: 1440px; */
    margin: 0 auto;
`

export const Title = styled.h1`
    margin: 40px 0;
    text-align: start;
    font-size: 30px;
    font-weight: 300;
    color: #424242;
    margin-left: 100px;
`

export const BoxDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Box = styled.div`
    width: 90%;
    height: 200px;
    background-color: #a8a8a8;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
    img{
        width: 80px;
        height: 80px;
        object-fit: contain;
    }
    h2{
        font-size: 20px;
        color: #2b2b2b;
    }
`

export const BoxTexts = styled.div`
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
`

export const Nothing = styled.h1`
    font-size: 40px;
    color: #2b75ff;
    text-align: center;
    margin: 100px 0;
`




