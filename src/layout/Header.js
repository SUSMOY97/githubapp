import React , {useState,useContext} from "react" ; 
import { NavItem, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";
import {
    Collapse , 
    Navbar,  
    NavbarToggler,
    Nav ,  NavLink , NavText}  from "reactstrap" ; //

import {UserContext} from "../Context/UserContext" ;

const Header = ()=> {
    const context = useContext(UserContext) ; //whatever the value available in user context is now stored in context
    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen)
    return (
        <Navbar color="success" className="gradient" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">SUSMOYOP'S GITHUB APP</Link></NavbarBrand>
            <NavbarText className="text-white">{context.user?.email ? context.user.email : ""}</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>{context.user ? (<NavItem>
                        <NavLink className="text-white" onClick={()=>{context.setUser(null)}}>
                            Logout
                        </NavLink>
                    </NavItem>):(<><NavItem>
                    <NavLink className="text-white" tag={Link} to="/signup">
                            Signup
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="text-white" tag={Link} to="/signin">
                            Signin
                        </NavLink>
                    </NavItem></>)}
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header ; 