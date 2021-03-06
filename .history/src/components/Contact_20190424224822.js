import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {}

  onShowClick = (e) => {
    console.log(e.target);
  }

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>{name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div >
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
