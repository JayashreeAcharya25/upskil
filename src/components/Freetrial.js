import React, { Component } from 'react'
import '../core_ui/Freetrial.css'

export default class Freetrial extends Component {
  render() {
    return (
      <div className='headliner-module'>
        <h2><span className='highlighter'>Ready to Upskil?</span> Click the button to start now.</h2>
        <a className='btn nav-btn' href='#courses' title="Start Learning">Start Learning</a>
      </div>
    )
  }
}
