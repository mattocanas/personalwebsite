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

const Footer = () => {
  return (
    <div className='fixed-bottom'>
      <Navbar className='mb-5' expand='sm'>
        <Container>
          <NavbarBrand href='/'>Ocanas</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/'>about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>notes</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
