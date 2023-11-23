import React from 'react'
import '../core_ui/NavBar.css'

const NavBar = () => {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href='/'><img src={process.env.PUBLIC_URL + './images/logo.jpg'} alt="logo" /></a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse d-flex" id="navbarNavDropdown">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="/">Courses</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="/">Blog</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="/">About</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="/">Digital Products</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="/"><img src={process.env.PUBLIC_URL +'./images/shopping_cart_icon.png'} alt="" /></a>
        //                 </li>
        //                 {/* <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown link
        //                     </a>
        //                     <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                         <li><a class="dropdown-item" href="/">Action</a></li>
        //                         <li><a class="dropdown-item" href="/">Another action</a></li>
        //                         <li><a class="dropdown-item" href="/">Something else here</a></li>
        //                     </ul>
        //                 </li> */}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <div className="navbar">
            <div className="navbar-top">
                <div className="section">
                    <img src={process.env.PUBLIC_URL + './images/logo.jpg'} alt="logo" />
                </div>
                <div className="section">
                    <input type="checkbox" id="menu-toggle" class="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <ul className='nav-list'>
                        <li className="nav-link"><a href="/">Courses</a></li>
                        <li className="nav-link"><a href="/">Blog</a></li>
                        <li className="nav-link"><a href="/">About</a></li>
                        <li className="nav-link"><a href="/">Digital Products</a></li>
                        <li className="nav-link"><a href="/"><img className='shopping-cart' src={process.env.PUBLIC_URL + './images/shopping_cart_icon.png'} alt="" /></a></li>
                        <li className="nav-link"><button className='btn nav-btn'>Login</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
