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
                            <img className='testimonial' src={process.env.PUBLIC_URL + './images/3_testimonial_1.png'} alt="testimonial_1" />
                            {/* <div className='carousel-card-container'>
                                <div className="quote-wrapper">
                                    <img src={process.env.PUBLIC_URL + './images/quote.svg'} alt="quote-icon" />
                                </div>
                                <div className="carousel-card-body">
                                    <p>"Choosing the full stack digital marketing course by WsCube Tech helped me a lot in my career. It gave me the skills I needed to excel in today's digital landscape. I'm now confidently managing successful online campaigns for my clients."</p>
                                </div>
                                <div className="carousel-card-footer">
                                    <img src={process.env.PUBLIC_URL + './images/user1.png'} alt="user" />
                                    <p>Rakesh Kumar</p>
                                </div>
                            </div> */}
                        </div>

                        <div className='carousel-card'>
                            <img className='testimonial' src={process.env.PUBLIC_URL + './images/3_testimonial_2.png'} alt="testimonial_2" />
                            {/* <div className='carousel-card-container'>
                                <div className="quote-wrapper">
                                    <img src={process.env.PUBLIC_URL + './images/quote.svg'} alt="quote-icon" />
                                </div>
                                <div className="carousel-card-body">
                                    <p>"Choosing the full stack digital marketing course by WsCube Tech helped me a lot in my career. It gave me the skills I needed to excel in today's digital landscape. I'm now confidently managing successful online campaigns for my clients."</p>
                                </div>
                                <div className="carousel-card-footer">
                                    <img src={process.env.PUBLIC_URL + './images/user2.png'} alt="user" />
                                    <p>Priya Sharma</p>
                                </div>
                            </div> */}
                        </div>
                        <div className='carousel-card'>
                            <img className='testimonial' src={process.env.PUBLIC_URL + './images/3_testimonial_3.png'} alt="testimonial_3" />
                            {/* <div className='carousel-card-container'>
                                <div className="quote-wrapper">
                                    <img src={process.env.PUBLIC_URL + './images/quote.svg'} alt="quote-icon" />
                                </div>
                                <div className="carousel-card-body">
                                    <p>"Choosing the full stack digital marketing course by WsCube Tech helped me a lot in my career. It gave me the skills I needed to excel in today's digital landscape. I'm now confidently managing successful online campaigns for my clients."</p>
                                </div>
                                <div className="carousel-card-footer">
                                    <img src={process.env.PUBLIC_URL + './images/user1.png'} alt="user" />
                                    <p>Aryan Singh</p>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
