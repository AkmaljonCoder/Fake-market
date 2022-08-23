import React,{useContext, useRef} from 'react'
import {Container, Link,CloseBtn, LinkDiv, Logo, Menu, MenuWrapper, Wrapper, LinkTo} from './style'
import Logoo from './Logos/GLOBUS.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import { Context } from '../../context/Context';

const Navbar = () => {

  const {id,setId} = useContext(Context)
  
  const navigating = useNavigate()

  const menu = useRef()

  const openMenu = ()=>{
    menu.current.style.right = "0"
  }

  const closeMenu = ()=>{
    menu.current.style.right = "-100%"
  }

  const Navigation = (link)=>{
    navigating(link)
    closeMenu()
  }

  return (
    <Wrapper>
      <Container>
        <Logo onClick={()=>Navigation('/')} src={Logoo} />
        <LinkDiv>
          <Link to={'/'} >Home</Link>
          <Link to={'/products'} >Products</Link>
          <LinkTo onClick={()=>window.open('https://akmaljon-azimov.vercel.app/')} >Contact</LinkTo>
          <IconButton to={'/cart'} onClick={()=>setId(0)} LinkComponent={NavLink}>
            <Badge color='primary' badgeContent={id}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </LinkDiv>
        <Menu onClick={openMenu}/>
        <MenuWrapper ref={menu}>
          <CloseBtn onClick={closeMenu}>&times;</CloseBtn>
          <h2 onClick={()=>Navigation('/')}>Home</h2>
          <h2 onClick={()=>Navigation('/products')}>Products</h2>
          <h2 onClick={()=>{Navigation('/cart');setId(0)}}>Cart</h2>
          <h2 onClick={()=>window.open('https://akmaljon-azimov.vercel.app/')}>Contact</h2>
        </MenuWrapper>
      </Container>
    </Wrapper>
  )
}

export default Navbar