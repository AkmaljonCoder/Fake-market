import React, { useState } from 'react'
import {Box, BoxDiv, BoxTexts, Container, Nothing, Remove, Title} from './style'
import { CartData } from '../../data'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigation = useNavigate()

  const [render, setrender] = useState(false)

  const removeItem = (i)=>{
    CartData.splice(i,1)
    setrender(!render)
  }

  const toItem = (item) => {
    navigation('/item',{state:item})
  }

  return (
    <Container>
      <Title>Your shopping cart:</Title>
      <BoxDiv>
        {
          CartData.length === 0 ?
          <Nothing>Nothing to see here...</Nothing>
          :
          CartData.map((item,index)=>{
            return(
              <Box key={index}>
                <img onClick={()=>toItem(item)} src={item.image} alt="" />
                <BoxTexts>
                  <h1>{item.title.slice(0,20)}</h1><br />
                  <p>{item.category}</p>
                </BoxTexts>
                <h2 style={{maxWidth:'200px'}}>{item.description.slice(0,40)}</h2>
                <h2>${item.price}</h2>
                <h2>rating: {item.rating.rate}</h2>
                <Remove onClick={()=>removeItem(index)}/>
              </Box>
            )
          })
        }
      </BoxDiv>
    </Container>
  )
}

export default Cart