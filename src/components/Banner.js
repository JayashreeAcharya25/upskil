import React, { Component } from 'react'
import '../core_ui/Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className='banner-section'>
                <div className="banner-container">
                    <div className="section-elements">
                        <div className="container">
                            <h1 className='sub_text_top'>Improve Your Communication Skill <span className='highlighter'>In Just 4 Weeks</span></h1>
                            <p className='sub_text_middle'>Crack Job Interviews, Deliver Presentations and Speak to anyone with Confidence.</p>
                            <div className='banner-button'><a className='btn' href='https://courses.upskil.work/courses/Communication-Masterclass-3-Upskil-6606db9805281a27b7d3bc17' title="Start Learning">Start Learning</a></div>
                            <span className='sub_text_bottom'>100% Refund Policy | No questions Asked</span>
                        </div>
                    </div>
                    <div className="section-elements">
                        {/* <img className='banner-image' src={https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Home+Page+(765+x+610)+Final+.png} alt="Banner" /> */}
                        <img className='banner-image' src={process.env.PUBLIC_URL + './images/1_home_page.png'} alt="Banner" title="Banner" />
                    </div>
                </div>
            </div>
        )
    }
}
