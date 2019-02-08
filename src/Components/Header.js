import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Nav , NavItem } from 'reactstrap'

const path = window.location.pathname



class Header extends Component {

  header = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    height: "100px",
    lineHeight: "100px",
    textAlign: "center",
    borderBottom: "0.1px solid",
    marginBottom: "40px"
    
  };

  navOptions = {
    fontSize: "24px",
    color: "#212F3d",
    marginLeft: "50px",
    marginRight: "50px"
  }

  selected = {
    backgroundColor: "#212F3d",
    color: "white",
    fontWeight: "bold",

  };
  


  render() {
    return (
      <div style={this.header}>
       <Nav>
          <NavItem>
            <NavLink exact to={`${path}`} style={this.navOptions} activeStyle={this.selected}>Get All Countries</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`${path}showDetails`} style={this.navOptions} activeStyle={this.selected}>Show Players Details</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to={`${path}updateTeamCoach`} style={this.navOptions} activeStyle={this.selected}>Update Coach</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Header;
