import React, { Component } from 'react'
import '../core_ui/RelatedLinks.css'
import {Link} from 'react-router-dom'

export default class RelatedLinks extends Component {
    render() {
        return (
            <div className='related-links-module'>
                <div className="related-links-container">
                    <ul>
                        <li className='links'><h3>Related Links</h3></li>
                        <li className='links'><Link to='/'>About Us</Link></li>
                        <li className='links'><Link to='/'>Blogs</Link></li>
                        <li className='links'><Link to='/'>Support</Link></li>
                        <li className='links'><Link to='/'>Refund Policy</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
