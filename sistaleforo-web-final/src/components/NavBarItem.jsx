'use client';
//src/components/NavBarItem.jsx
import PropTypes from 'prop-types';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarItem = ({ children, href, className, icon, tabIndex, testId }) => {
  const pathname = usePathname();
  const activeClass = 'navbar-item-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <span className="d-inline-flex align-items-center navbar-item">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      <span className={pathname === href ? activeClasses : className} tabIndex={tabIndex} data-testid={testId}>
        {children}
      </span>
    </span>
  );
};

NavBarItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  tabIndex: PropTypes.number,
  testId: PropTypes.string.isRequired
};

export default NavBarItem;
