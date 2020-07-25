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

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Navbar className='mb-5' expand='sm'>
        <Container>
          <NavbarBrand href='/'>Ocanas</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={open} />
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

export default Header;
