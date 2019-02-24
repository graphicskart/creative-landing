import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MarketingNavBar extends React.Component{
  showLogin(){
  }

  render(){
    return (
      <Navbar collapseOnSelect fixedTop className="mainMenu">
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#"><img src="../images/logo.png" alt="University.Social"/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <MenuItem>
              <Link to={'/'}>About Us</Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/'}>Contact</Link>
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


export default connect(state => ({
  
}, mapDispatch))(MarketingNavBar);


const mapDispatch = (dispatch) => {
    const allActionProps = Object.assign({}, dispatch);
    return allActionProps;
}
