
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import {Link} from 'react-router-dom';
import './style.css';

export default function NavBar() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/" className="me-auto">
          <span className="navbar">Users DashBoard</span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
