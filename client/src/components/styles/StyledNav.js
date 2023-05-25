import {  NavLink, useNavigate } from "react-router-dom";
import styled from 'styled-components'

export const NavbarLink = styled(NavLink)`
color: black;
font-size: large;
text-decoration: underlined;
margin: 1px;
display: flex;
flex-direction: row;
justify-content: space-between;


`

export const NavigationContainer = styled.nav `
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);

`

// export const useNavigate = styled(useNavigate)`
// color: black;
// `

  