import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>
(
 <>
    <div className="navbar">
    <Link to="/" className="Home"><i class="fa fa-film"></i> WatchBox</Link>
    {/* <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
    <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
    <a href="#"><i class="fa fa-fw fa-user"></i> Login</a> */}
    <Link to="/" className="Login"><i class="fa fa-fw fa-user"></i> SignUp</Link>
    </div>
 </>
);

export default Navbar;

