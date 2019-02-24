import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class MarketingNavBar extends React.Component{

  render(){
    return (
      <Navbar collapseOnSelect fixedTop className="mainMenu">
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#"><img src="images/logo.png" alt="University.Social"/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <MenuItem>
              <a href="">About Us</a>
            </MenuItem>
            <MenuItem>
              <a href="">Contact</a>
            </MenuItem>
            <MenuItem>
              <a className="loginBtn" onClick={this.props.openLoginModal}>Login</a>
            </MenuItem>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
