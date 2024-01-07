import React, { Component } from 'react'
import '../core_ui/RelatedLinks.css'

export default class RelatedLinks extends Component {
    render() {
        return (
            <div className='related-links-module'>
                <div className="related-links-container">
                    <ul>
                        <li className='links'><h3>Related Links</h3></li>
                        <li className='links'><a href='https://www.upskil.work/aboutus'>About Us</a></li>
                        <li className='links'><a href='https://www.upskil.work/blog'>Blogs</a></li>
                        <li className='links'><a href='/'>Support</a></li>
                        <li className='links'><a href='https://upskil.work/refundpolicy'>Refund Policy</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
