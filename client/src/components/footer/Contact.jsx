import React from 'react'
import './footerStyle.css'

export default function Contact() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
          <div>
              <p> Email </p>
              <div className="email-icon icons"/>
              {/*<div className="headline"> luis.carbonel.gk@hotmail.com </div>*/}
          </div>
          <div>
              <p>LinkedIn</p>
              <div className="linkedin-icon icons"/>
          </div>
          <div>
              <p>Github</p>
              <div className="github-icon icons"/>
          </div>
          <div>
              <p>Standars</p>
              <div className="standars-icon icons"/>
          </div>
          <div>
              <p>Coded by</p>
              <div className="coded-icon icons"/>
          </div>
      </div>
    </div>
  )
}