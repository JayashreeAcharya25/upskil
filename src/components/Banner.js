import React, { Component } from 'react'
import '../core_ui/Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className='banner-section'>
                <div className="banner-container">
                    <div className="section-elements">
                        <div className="container">
                            <h2 className='sub_text_top'>Improve Your Communication Skill <span className='highlighter'>In Just 4 Weeks</span></h2>
                            <p className='sub_text_middle'>Crack Job Interviews, Deliver Presentations and Speak to anyone with Confidence.</p>
                            <div className='banner-button'><button className='btn'>Start Learning</button></div>
                            <span className='sub_text_bottom'>100% Refund Policy | No questions Asked</span>
                        </div>
                    </div>
                    <div className="section-elements">
                        {/* <img className='banner-image' src={process.env.PUBLIC_URL + './images/banner_image.png'} alt="Banner" /> */}
                        <img className='banner-image' src={process.env.PUBLIC_URL + './images/1_home_page.png'} alt="Banner" />
                    </div>
                </div>
            </div>
        )
    }
}
