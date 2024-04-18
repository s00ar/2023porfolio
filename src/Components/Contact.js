import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const email = this.props.data.email;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{message}</p>
                <h4>Contact</h4>
                <p className="address">
                <ul>
                  <li>
                  <a href={`mailto:${email}`}>{email}</a>
                  </li>
                  <li>
                  <a href={`tel:${phone}`}>{phone}</a>
                  </li>
                </ul>
                </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
