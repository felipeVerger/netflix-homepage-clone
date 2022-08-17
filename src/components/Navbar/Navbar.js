import React, { useState, useEffect } from 'react';
import {
    Nav,
    LeftNav,
    Logo,
    List,
    ListItem,
    Avatar,
    MenuBlock,
    MenuButton,
    ListMenu,
    Triangulo
} from './NavbarStyle';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener('scroll');
      };
    }
    );
  }, []);

  return (
    <Nav show={show}>
      <LeftNav>
        <Logo src={logo} alt='netflix-logo'/>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>TV Shows</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>New & Popular</ListItem>
          <ListItem>My List</ListItem>
        </List>
        
        <MenuBlock>
          <MenuButton onClick={() => setToggleMenu(!toggleMenu)}>Browse</MenuButton>
          {
            toggleMenu && (
              <ListMenu>
                <Triangulo></Triangulo>
                <ListItem>Home</ListItem>
                <ListItem>TV Shows</ListItem>
                <ListItem>Movies</ListItem>
                <ListItem>New & Popular</ListItem>
                <ListItem>My List</ListItem>
              </ListMenu>
            )
          }
        </MenuBlock>

      </LeftNav>
        <Avatar src={avatar} alt='avatar'/>
    </Nav>
  ) 
}

export default Navbar