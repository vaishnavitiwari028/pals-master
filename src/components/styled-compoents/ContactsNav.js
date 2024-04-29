import React from "react";
import { useClickOutside } from "../../custom-hooks";

const ContactsNav = ({ setShowNav, children }) => {
  const elRef = useClickOutside({ callback: () => setShowNav(false) });
  return (
    <nav className="contacts_nav" ref={elRef}>
      {children}
    </nav>
  );
};

export default ContactsNav;
