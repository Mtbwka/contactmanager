import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onNameChange = e => this.setState({ name: e.target.value });
  onEmailChange = e => this.setState({ name: e.target.value });
  onPhoneChange = e => this.setState({ name: e.target.value });

  render() {
    const { name, email, phone } = this.state;
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
                value={name}
                onChange={this.onNameChange}
              />
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control form-control-lg'
                name='email'
                placeholder='Enter Email...'
                value={email}
                onChange={this.onEmailChange}
              />
              <label htmlFor='name'>Phone</label>
              <input
                type='text'
                className='form-control form-control-lg'
                name='phone'
                placeholder='Enter Phone...'
                value={phone}
                onChange={this.onPhoneChange}
              />
            </div>
            <input
              type='submit'
              value='Add Contact'
              className='btn btn-light btn-block'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
