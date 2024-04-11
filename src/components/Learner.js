import React, { Component } from 'react'
import '../core_ui/Learner.css'

export default class Learner extends Component {
    render() {
        return (
            <div className="block v-height learner">
                <div className="block-container">
                    <div className="heading">
                        <h2 className='certificate-title'>Trusted by 1000+ Students <span className='highlighter'>Across Karnataka</span></h2>
                        <p className='heading-subtext'>Listen to what they have to say..&#128515;</p>
                    </div>
                    <div className='carousel-container'>

                        <div className='carousel-card'>
                            <img className='testimonial' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Testimonial+1.png" alt="testimonial_1" title="Testimonial" />
                        </div>

                        <div className='carousel-card'>
                            <img className='testimonial' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Testimonial+2.png" alt="testimonial_2" title="Testimonial" />
                        </div>
                        <div className='carousel-card'>
                            <img className='testimonial' src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Testimonial+3.png" alt="testimonial_3" title="Testimonial"/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
