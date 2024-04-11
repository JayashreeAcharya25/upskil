import React, { Component } from 'react'
import '../core_ui/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className="block projects" id="courses">
                <div className="heading">
                    <h2>Our Popular <span className='highlighter'>Courses</span></h2>
                </div>
                <div className="block-container">

                    <div className="block-section">
                        <div className="block-elements">
                            <img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Master+Class+3.0.png" alt="project1" title="Courses"/>
                        </div>
                        <div className="block-elements">
                            <div className="block-list">
                                <h3>The Complete Communication Masterclass 3.0</h3>
                                <p>Learn how to get better at speaking English, crack job interviews,
                                    deliver powerful presentations and speak to anyone with full
                                    confidence.
                                </p>
                                <a href='https://courses.upskil.work/courses/Communication-Masterclass-3-Upskil-6606db9805281a27b7d3bc17' className='btn nav-btn' title="The Complete Communication Masterclass 3.0">View Price</a>
                            </div>
                        </div>
                    </div>
                    <div className="block-section">
                        <div className="block-elements">
                            <img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Find+and+apply+jobs.png" alt="project1" title="Courses" />
                        </div>
                        <div className="block-elements">
                            <div className="block-list">
                                <h3>How to find and Apply for jobs the right way</h3>
                                <p>Learn the Step-by-Step process of Finding and Applying for
                                    jobs and Getting Hired Faster
                                </p>
                                <a href='https://courses.upskil.work/courses/How-To-Find-And-Apply-For-Jobs-The-Right-Way-660793a05b32ca3bba4100d4' className='btn nav-btn' title="How to find and Apply for jobs the right way">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
