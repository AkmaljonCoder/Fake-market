import React from 'react'
import {Box, BoxDiv, BoxTexts, Container, Nothing, Title} from './style'
import { CartData } from '../../data'
const Cart = () => {

  return (
    <Container>
      <Title>Your shopping cart</Title>
      <BoxDiv>
        {
          CartData.length === 0 ?
          <Nothing>Nothing to see here...</Nothing>
          :
          CartData.map((item,index)=>{
            return(
              <Box key={index}>
                <img src={item.img} alt="" />
                <BoxTexts>
                  <h1>{item.title.slice(0,20)}</h1><br />
                  <p>{item.category}</p>
                </BoxTexts>
                <h2 style={{maxWidth:'200px'}}>{item.description.slice(0,40)}</h2>
                <h2>{item.price}</h2>
                <h2>{item.rating.rate}</h2>
              </Box>
            )
          })
        }
      </BoxDiv>
    </Container>
  )
}

export default Cart