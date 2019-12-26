import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <Navbar color="info" dark expand="md">
                <NavbarBrand tag={RouterNavLink} to='/'>Static Pages</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/pages/home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/pages/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/pages/contacts'>Contacts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/pages/divisions'>Divisions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/pages/admin'>Admin</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;