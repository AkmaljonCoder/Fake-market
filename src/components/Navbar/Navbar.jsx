import React,{useRef} from 'react'
import {Container, Link,CloseBtn, LinkDiv, Logo, Menu, MenuWrapper, Wrapper} from './style'
import Logoo from './Logos/GLOBUS.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  
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
          <Link to={'/contact'} >Contact</Link>
          <IconButton to={'/cart'} LinkComponent={NavLink}>
            <ShoppingCartIcon />
          </IconButton>
        </LinkDiv>
        <Menu onClick={openMenu}/>
        <MenuWrapper ref={menu}>
          <CloseBtn onClick={closeMenu}>&times;</CloseBtn>
          <h2 onClick={()=>Navigation('/')}>Home</h2>
          <h2 onClick={()=>Navigation('/products')}>Products</h2>
          <h2 onClick={()=>Navigation('/cart')}>Cart</h2>
          <h2 onClick={()=>Navigation('/contact')}>Contact</h2>
        </MenuWrapper>
      </Container>
    </Wrapper>
  )
}

export default Navbar