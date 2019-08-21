import React from 'react'
import './footerStyle.css'

export default function Contact() {

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
          <div>
              <p> Email </p>
              <a href="mailto:luis.carbonel.gk@hotmail.com?Subject=Hello%20there!%20Paws's%20Up" target="_top">
                  <div className="email-icon icons"/>
              </a>
          </div>
          <div>
              <p>LinkedIn</p>
              <a href="https://www.linkedin.com/in/luis-carbonel/">
              <div className="linkedin-icon icons"/>
              </a>
          </div>
          <div>
              <p>Github</p>
              <a href="https://github.com/BingiMan">
              <div className="github-icon icons"/>
              </a>
          </div>
          <div>
              <p>Standars</p>
              <div className="standars-icon icons"/>
              <div className="standars-1 sta-letter">React</div>
              <div className="standars-2 sta-letter">Css</div>
              <div className="standars-3 sta-letter">React-Player</div>
              <div className="standars-4 sta-letter">Rails</div>
          </div>
          <div>
              <p>Coded by</p>
              <div className="coded-icon icons"/>
              <div className="headline"> Luis Carbonel </div>
          </div>
      </div>
    </div>
  )
}