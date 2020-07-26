import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import styles from "./styles/Header.css";
import instagram from "../assests/instagram.png";
import facebook from "../assests/facebook.png";
import linkedin from "../assests/linkedin.png";
import music from "../assests/music.png";
import reddit from "../assests/reddit.png";
import snapchat from "../assests/snapchat.png";
import twitter from "../assests/twitter.png";
import github from "../assests/github.png";

const Footer = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className='sticky-bottom'>
      <Navbar
        className='mb-5 navbar-custom sticky-bottom footer-custom'
        expand='sm'
        light
      >
        <Container>
          <NavbarBrand className='navbarbrand-custom' href='/'>
            Ocanas
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse color='dark' isOpen={!collapsed} navbar>
            <Nav className='ml-auto mx-0' navbar>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://twitter.com/mattocanas'
                >
                  <img className='social-icon' src={twitter} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://www.instagram.com/mattocanas/'
                >
                  <img className='social-icon' src={instagram} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://www.snapchat.com/add/mrelmattador'
                >
                  <img className='social-icon' src={snapchat} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://open.spotify.com/user/matthewocanas28?si=QCgyIRwqRUKkElw2yC5TUQ'
                >
                  <img className='social-icon' src={music} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://www.reddit.com/user/mattocanas'
                >
                  <img className='social-icon' src={reddit} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://www.facebook.com/matthew.ocanas.716'
                >
                  <img className='social-icon' src={facebook} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='www.linkedin.com/in/matthew-ocanas-00b7811a8'
                >
                  <img className='social-icon' src={linkedin} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target='_blank'
                  className='navlink-custom'
                  href='https://www.github.com/mattocanas'
                >
                  <img className='social-icon' src={github} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navlink-custom' href='/'>
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navlink-custom' href='/'>
                  work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navlink-custom' href='/'>
                  notes
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
