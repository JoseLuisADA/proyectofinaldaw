"use client"
import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';

const AnchorLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <a href={href}>
      <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
        {children}
      </NavBarItem>
    </a>
  );
};

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
}

export default AnchorLink;
