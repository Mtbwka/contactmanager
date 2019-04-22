import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Email: {this.props.email}</li>
          <li>Phone: 555-555-5555</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
