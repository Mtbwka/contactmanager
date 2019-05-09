import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  render() {
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control form-control-lg'
                name='name'
                placeholder='Enter Name...'
              />
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control form-control-lg'
                name='email'
                placeholder='Enter Email...'
              />
              <label htmlFor='name'>Phone</label>
              <input
                type='text'
                className='form-control form-control-lg'
                name='phone'
                placeholder='Enter Phone...'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
