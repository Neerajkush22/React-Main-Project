import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
        <header className='header'>
            <div className="container d_flex">
                <div className="categories d_flex">
                    <span className='fa-solid fa-border-all'></span>
                    <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                </div>
                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/user'>user account</Link>
                        </li>
                        <li>
                            <Link to='/track'>track my order</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                        {!props.logIn && 
                        (<li>
                            <Link to='/login'>Login</Link>
                        </li>)
                        }
                        {props.logIn && 
                        (<li>
                            <span onClick={() => props.setLogIn(false)} style= {{cursor:"pointer"}}>Logout</span>
                        </li>)
                        }
                    </ul>

                    <button className="toggle" onClick = {()=>setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu? <i className='fas fa-times close home-bth'></i> :
                            <i className='fa fa-bars open'></i>
                        }
                    </button>
                </div>
            </div>

        </header>
    </>
  )
}

export default Navbar