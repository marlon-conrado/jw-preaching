import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  NavbarLink,
  IconAppContainer,
  IconApp
} from "./Styles";

const Navbar = () => (
  <NavbarContainer>
    <NavbarList>
      <NavbarItem>
        <NavbarLink>
          <Link to="/revisitas">Revisitas</Link>
        </NavbarLink>
      </NavbarItem>
    </NavbarList>
    <IconAppContainer>
      <IconApp>JW.ORG</IconApp>
    </IconAppContainer>
  </NavbarContainer>
);

export default Navbar;
