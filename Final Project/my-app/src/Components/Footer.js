import React from 'react'


export default function Footer(){
return(
    <footer className="bg-secondary ">
    <div className="container footer_container d-flex justify-content-between fs-6">
      <div className="footer_logo"></div>
      <div className="link_lists">
        <h3>Main Links</h3>
        <ul className="list-unstyled">
          <li>Order Tracking</li>
          <li>New Order</li>
          <li>News & Blogs</li>
        </ul>
      </div>
      <div className="link_lists">
        <h3>Support</h3>
        <ul className="list-unstyled">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="news_letter">
        <h3>Support</h3>
        <input type="email" className="form-control mb-3" placeholder="Enter your Email..." />
        <h3>Follow Us</h3>
        <div className="d-flex gap-3">
          <div className="icon">
            <i className="fa fa-facebook"></i>
          </div>
          <div className="icon">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className="icon">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div className="icon">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}