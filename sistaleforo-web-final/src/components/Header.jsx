'use client';
import React from 'react';
import NavBar from './NavBar';

const Header = () => (
  <header className="bg-light p-3 text-center" data-testid="header">
    <h1 data-testid="header-text">
      Sistale Foro
    </h1>
    <NavBar />
  </header>
);

export default Header;
