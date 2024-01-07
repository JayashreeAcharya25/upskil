import React, { Component } from 'react'
import '../core_ui/Faq.css'

export default class Faq extends Component {
  render() {
    return (
      <div className='block faq'>
        <div className="block-container">
          <div className="image-section">
            <div className="block-elements">
              <img src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Download+the+app+original+clour.png" alt="project1" />
            </div>
            <div className="block-elements">
              <div className="block-list">
                <h2>Download the App to Learn <span className='highlighter'>Anywhere, Anytime!</span></h2>
              </div>
            </div>
          </div>
          <div className="block-section grid-2">
            <div className="block-elements">
              <div className="heading">
                <h2>Frequently Asked <span className='highlighter'>Questions</span></h2>
              </div>
            </div>
            <div className="block-elements">
              <div className="accordion accordion-flush" id="accordionFlushExample">

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      How do I enrol in a course?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Simple, Just click on the course you're interested in, click on the "Enrol Now" button, and
                      follow the instructions to create an account or log in. Once you've completed the payment,
                      you will get an immediate access to course you enrolled for.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Is the course explained in Kannada or English?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">The course content will be explained in kannada with simple
                      examples and exercises which you can practise at home. </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Are these courses Pre-recorded or Live?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">All our courses are Pre-recorded. This means you can learn these
                      courses at your own schedule anywhere anytime. You'll have access to
                      the course 24/7 for 1 complete year.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      Will I get a certificate of completion?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Yes! Each course you successfully complete will earn you a certificate of
                      achievement.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Can I cancel my course purchase if I don’t like it? Will I get a refund?
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Yes..!! Your satisfaction is very important for us, You can cancel your course
                      within 7 days of purchase if you don’t like it. You can email us at 
                      <a href="mailto:upskil.help@gmail.com" target="_top"> upskil.help@gmail.com</a> & we’ll cancel and refund your money within 3
                      working days. No questions asked!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                      Is it a communication course or an English-speaking course?
                    </button>
                  </h2>
                  <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">These Courses are designed to improve both your communication skill And English speaking
                      skill.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                      Can I see a sample of course before enrolling?
                    </button>
                  </h2>
                  <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Yes Definitely! You will get free previews for selected lessons within our courses, to get a
                      glimpse of the content and teaching style before you enrol in the course.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                      How to report an issue?
                    </button>
                  </h2>
                  <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">For any issues or queries, please drop an email to <a href="mailto:upskil.help@gmail.com" target="_top">upskil.help@gmail.com</a> with the
                      complete issue details.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
