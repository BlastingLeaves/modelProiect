import React from "react";
// import {push} from "connected-react-router";
// import {connect} from 'react-redux'
import AppBar from "./app-bar";



// const msp = ({layout: {navbarState, isAuthenticated}}) => ({navbarState, isAuthenticated})
// const mdp = dispatch => ({
//     pushTo: link => {
//         dispatch(push(link))
//     }
// })
const Navbar = () =>
    <nav className='bg-primary relative  items-center justify-between'>
        <AppBar/>
    </nav>


export default Navbar
