import React, { Component } from 'react'
import '../core_ui/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className="block projects">
                <div className="heading">
                    <h2>Our Popular <span className='highlighter'>Courses</span></h2>
                </div>
                <div className="block-container">

                    <div className="block-section">
                        <div className="block-elements">
                            <img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Master+Class+3.0.png" alt="project1" />
                        </div>
                        <div className="block-elements">
                            <div className="block-list">
                                <h3>The Complete Communication Masterclass 3.0</h3>
                                <p>Learn how to get better at speaking English, crack job interviews,
                                    deliver powerful presentations and speak to anyone with full
                                    confidence.
                                </p>
                                <button className='btn nav-btn'>View Price</button>
                            </div>
                        </div>
                    </div>
                    <div className="block-section">
                        <div className="block-elements">
                            <img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Find+and+apply+jobs.png" alt="project1" />
                        </div>
                        <div className="block-elements">
                            <div className="block-list">
                                <h3>How to find and Apply for jobs the right way</h3>
                                <p>Learn the Step-by-Step process of Finding and Applying for
                                    jobs and Getting Hired Faster
                                </p>
                                <button className='btn nav-btn'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
