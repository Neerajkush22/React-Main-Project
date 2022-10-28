import React from 'react'
import Head from './Head'
import "./Header.css";
import Search from './Search'
import Navbar from './Navbar'

const Header = ({ cartItem, logIn, setLogIn, getVal }) => {
  return (
    <>
        <Head />
        <Search cartItem={cartItem} getVal={getVal}/>
        <Navbar logIn = {logIn} setLogIn = {setLogIn}/>
    </>
  )
}

export default Header