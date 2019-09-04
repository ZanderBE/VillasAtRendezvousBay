import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contactform">
        <div className="container text-left">
          <h1 className="border-bottom">Contact</h1>
          <form>
            <div className="">
              <div className="form-group">
                <h5>Name</h5>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="John Smith"
                  name=""
                />
              </div>
              <div className="form-group">
                <h5>Phone Number</h5>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="555-5555"
                  name=""
                />
              </div>
              <div className="form-group">
                <h5>Email</h5>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Johnsmith@gmail.com"
                  name="email"
                />
              </div>
              <div className="form-group">
                <h5>Message</h5>
                <textarea className="form-control form-control-lg"> </textarea>
                <br />
                <button className="btn-secondary btn-md">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
