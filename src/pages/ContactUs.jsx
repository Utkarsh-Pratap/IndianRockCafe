import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "darkorange" }}>
        Contact Us
      </h2>

      <p className="fs-5 text-center mb-4">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label" style={{ color: "darkorange" }}>
                Name
              </label>
              <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label" style={{ color: "darkorange" }}>
                Email address
              </label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputMessage" className="form-label" style={{ color: "darkorange" }}>
                Message
              </label>
              <textarea className="form-control" id="exampleInputMessage" rows="4" placeholder="Your message here..."></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-outline-warning px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
