import React, { Component } from 'react'
import '../core_ui/RelatedLinks.css'

export default class RelatedLinks extends Component {
    render() {
        return (
            <div className='related-links-module'>
                <div className="related-links-container">
                    <ul>
                        <li className='links'><h3>Related Links</h3></li>
                        <li className='links'><a href='https://courses.upskil.work/aboutus' title='About Us'>About Us</a></li>
                        <li className='links'><a href='https://courses.upskil.work/blog' title='Blogs'>Blogs</a></li>
                        <li className='links'><a href='mailto:upskil.help@gmail.com' title='Support'>Support</a></li>
                        <li className='links'><a href='https://courses.upskil.work/refundpolicy' title='Refund Policy'>Refund Policy</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
