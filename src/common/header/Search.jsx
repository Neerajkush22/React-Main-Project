import React from 'react'
import logo from "../assets/images/logo.png";
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
const Search = ({ cartItem, getVal }) => {
    const [searched, setSearched] = useState("")
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    const history = useHistory()

    const homePageHandler = () => {
        console.log(history)
        history.push("/")
    }

    const getSearchVal = (e) => {
        setSearched(e.target.value)
        getVal(searched)
    }
    return (
        <>
            <section className='search'>
                <div className="container c_flex">
                    <div className="logo width">
                        <img src={logo} alt="" />
                    </div>

                    <div className="search-box f_flex">
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='What You Want?' onChange={getSearchVal}/>
                        <span>All Category</span>
                    </div>
                    <div className="icon f_flex width">
                        <i className='fa fa-user icon-circle' onClick={homePageHandler} style={{cursor:'pointer'}}></i>
                        <div className="cart">
                            <Link to="/cart">
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search