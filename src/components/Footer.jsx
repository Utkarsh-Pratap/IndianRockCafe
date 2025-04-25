import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 ">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-4">
            <h5 className="text-warning">Indian Rock Cafe</h5>
            <p>Your go-to spot for delicious Italian cuisine and chill vibes. 🍝🎶</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h6 className="text-light">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/menu" className="text-decoration-none text-light">Menu</a></li>
              <li><a href="/about" className="text-decoration-none text-light">About Us</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h6 className="text-light">Contact Us</h6>
            <p>Email: hello@indianrockcafe.com</p>
            <p>Phone: +91-9876543210</p>
            <p>Location: Delhi, India</p>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Indian Rock Cafe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
