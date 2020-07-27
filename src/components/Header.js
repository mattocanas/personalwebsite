import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container,
} from "reactstrap";
import styles from "./styles/Header.css";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='mb-5 navbar-custom' light expand='sm'>
        {/* <Container> */}
        <NavbarBrand className='navbarbrand-custom' href='/'>
          Ocañas
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse color='dark' isOpen={!collapsed} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/' className='navlink-custom'>
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact href='/work' className='navlink-custom'>
                work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navlink-custom' href='/notes'>
                notes
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Header;
