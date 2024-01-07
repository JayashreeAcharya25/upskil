import React, { Component } from 'react'
import '../core_ui/Certificate.css'

export default class Certificate extends Component {
    render() {
        return (
            <>
                <div className="block v-height certificate">
                    <div className="block-container flex">
                        <div className="block-section">
                           
                            <img alt='certificate' className='certificate-img'
                                src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/certificate+of+participation.png"
                            />
                            
                        </div>
                        <div className="block-section certificate-container">
                            <div className="heading">
                                <h2 className='certificate-title'>In just 4 weeks you will Learn <span className='highlighter'>how to…</span></h2>
                            </div>
                        
                            <ul className='common-ul-style'>
                                <li>
                                    <h3>Speak Clearly & Confidently</h3>
                                    <p className='line-clamp-2'>Become more confident in speaking clearly and communicating your thoughts.</p>
                                </li>
                                <li>
                                    <h3>Improve English with simple exercises</h3>
                                    <p className='line-clamp-2'>Get better at speaking English by doing few simple exercises daily at home.</p>
                                </li>
                                <li>
                                    <h3>Clear Job Interviews</h3>
                                    <p className='line-clamp-2'>Learn how to be more confident during job interviews and impress your interviewer.</p>
                                </li>
                                <li>
                                    <h3>Overcome Stage Fear</h3>
                                    <p className='line-clamp-2'>Learn the simple techniques to get rid of nervousness while talking to a large group of people.</p>
                                </li>
                            </ul>
                            <h3 className='bottom-text highlighter'>And Finally Get Certified...</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
