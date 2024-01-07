import React from 'react'
import '../core_ui/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-top">
                <div className="section">
                    <img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Upskil+logo+cropped.jpeg" alt="logo" />
                </div>
                <div className="section">
                    <input type="checkbox" id="menu-toggle" class="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <ul className='nav-list'>
                        <li className="nav-link"><a href="/">Courses</a></li>
                        <li className="nav-link"><a href="/">Blog</a></li>
                        <li className="nav-link"><a href="/">About</a></li>
                        <li className="nav-link"><a href="/">Digital Products</a></li>
                        <li className="nav-link">
                            <Link className='desktop-icon' to="/"><img className='shopping-cart' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/shopping_cart_icon.png" alt="" /></Link>
                            <Link className='mobile-icon' to="/"><img className='shopping-cart' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/shopping_cart_icon.png" alt="" />Cart</Link></li>
                        <li className="nav-link"><button className='btn nav-btn'>Login</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
