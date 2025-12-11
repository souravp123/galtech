import React from 'react'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="vip-box">
        <div className="vip-left">
          <h2>GET ON THE VIP LIST</h2>
          <p>
            Sign up for 15% off and be the first to know about our latest offers
            & news
          </p>
        </div>

        <div className="vip-right">
          <div className="input-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email" />
          </div>

          <button className="signup-btn">SIGN UP</button><br />

          <small>*By signing up, you agree to our Privacy Policy.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="column">
          <h3>SHOP</h3>
          <a href="#">Lip</a>
          <a href="#">Face</a>
          <a href="#">Kits</a>
          <a href="#">Shop All</a>
        </div>

        <div className="column">
          <h3>ABOUT</h3>
          <a href="#">Our Story</a>
          <a href="#">Clinically Proven</a>
        </div>

        <div className="column">
          <h3>HELP</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
        </div>

        <div className="social-icons">
          <i class="fa-brands fa-meta icon"></i>
          <i class="fa-brands fa-instagram icon"></i>
          <i class="fa-brands fa-tiktok icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer