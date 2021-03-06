class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className='card card-body mb-3'>
        <h4>{contact.name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email:{contact.email}</li>
          <li className='list-group-item'>Phone:{contact.phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
