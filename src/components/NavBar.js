import React from 'react'
import '../core_ui/NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-top">
                <div className="section">
                    <a href="/"><img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Upskil+logo+cropped.jpeg" alt="logo" /></a>
                </div>
                <div className="section">
                    <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                    <ul className='nav-list'>
                        <li className="nav-link"><a href="/">Courses</a></li>
                        <li className="nav-link"><a href="/">Blog</a></li>
                        <li className="nav-link"><a href="/">About</a></li>
                        <li className="nav-link"><a href="/">Digital Products</a></li>
                        <li className="nav-link">
                            <a className='desktop-icon' href="/"><img className='shopping-cart' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/shopping_cart_icon.png" alt="" /></a>
                            <a className='mobile-icon' href="/"><img className='shopping-cart' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/shopping_cart_icon.png" alt="" />Cart</a></li>
                        <li className="nav-link"><button className='btn nav-btn'>Login</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
