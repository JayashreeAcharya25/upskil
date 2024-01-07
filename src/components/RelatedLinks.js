import React, { Component } from 'react'
import '../core_ui/RelatedLinks.css'

export default class RelatedLinks extends Component {
    render() {
        return (
            <div className='related-links-module'>
                <div className="related-links-container">
                    <ul>
                        <li className='links'><h3>Related Links</h3></li>
                        <li className='links'><a href='/'>About Us</a></li>
                        <li className='links'><a href='/'>Blogs</a></li>
                        <li className='links'><a href='/'>Support</a></li>
                        <li className='links'><a href='/'>Refund Policy</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
