import styled from "styled-components";

export const NavbarContainer = styled.nav`
  * {
    margin: 0;
    padding: 0;
  }

  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  box-shadow: 1px 1px 7px gray;
`;

export const IconAppContainer = styled.div`
  height: 60px;
  width: 100px;
  background-color: #4a6da7;
`;

export const IconApp = styled.h1`
  font-size: 16px;
  text-align: center;
  color: white;
  line-height: 56px;
`;

export const NavbarList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const NavbarItem = styled.li`
  display: inline-flex;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  font-size: 14px;
`;
