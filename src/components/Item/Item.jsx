import React from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonDiv, Container, DataImg, Hr, Image, ImgDiv, InBtn, InDes, InfoDiv, InPrice, InRating, InTitle, MainButton, MainDiv, TextDiv } from './style'

const Item = () => {

  const Location = useLocation()

  return (
    <Container>
      <MainDiv>
        <DataImg src={Location.state.image}/>
        <TextDiv>
          <h1>{Location.state.title}</h1>
          <p>{Location.state.description}</p>
          <h2>${Location.state.price}</h2>
          <h3>rating: {Location.state.rating.rate}</h3>
          <Hr/>
          <ButtonDiv>
            <MainButton variant='contained' color='success'>Buy item</MainButton>
            <MainButton variant='contained'>Get offer</MainButton>
          </ButtonDiv>
        </TextDiv>
      </MainDiv>
      {/* <ImgDiv>
        <img style={{width:400,height:400,objectFit:'contain'}} src={Location.state.image} alt="" />
      </ImgDiv>
      <InfoDiv>
        <InTitle>{Location.state.title}</InTitle>
        <InDes>Description: {Location.state.description}</InDes>
        <InPrice>${Location.state.price}</InPrice>
        <InRating>Rating: {Location.state.rating.rate}</InRating>
        <ButtonDiv>
          <InBtn variant='contained' color='success'>Buy Now</InBtn>
          <InBtn variant='contained' >Make Offer</InBtn>
        </ButtonDiv>
      </InfoDiv> */}
    </Container>
  )
}

export default Item