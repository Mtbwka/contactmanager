import React from "react";

// export default function Header() {
//   return <div />;
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.branding}/h1>
    </div>
  );
};

export default Header;
