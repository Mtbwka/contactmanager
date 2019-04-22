import React from 'react';
import PropTypes from 'prop-types';
import { setMaxListeners } from 'cluster';

// export default function Header() {
//   return <div />;
// }

const Header = props => {
  const { branding } = props;
  return <nav className='navbar.navbar-expand-sm.navbar-dark.bg-danger' />;
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
