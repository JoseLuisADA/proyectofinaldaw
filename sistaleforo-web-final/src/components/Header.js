'use client';
import React from 'react';
import NavBar from '../components/NavBar';

const Header = () => (
  <header className="bg-light p-3 text-center" data-testid="header">
    <h1 data-testid="header-text">
      Sistale
    </h1>
    <NavBar />
  </header>
);

export default Header;
