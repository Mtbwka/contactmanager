class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className='card card-body mb-3'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email:{email}</li>
          <li className='list-group-item'>Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;