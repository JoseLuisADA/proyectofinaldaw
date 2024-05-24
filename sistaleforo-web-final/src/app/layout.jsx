// app/layout.jsx
'use client';

import './globals.css';
import { UserProvider } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import localFont from "next/font/local"
import PropTypes from 'prop-types';

const myFont = localFont({
  src: "../../public/fonts/CrushBubble.otf",
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${myFont.className} flex flex-col h-screen m-0 p-0`}>
        <UserProvider>
          <Header />
          <main id="app" className="flex-1 w-full overflow-auto" data-testid="layout">
            <NavBar />
            {children}
          </main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}