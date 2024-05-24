// app/layout.jsx
'use client';

import './globals.css';
import React from 'react';
import localFont from "next/font/local"
import PropTypes from 'prop-types';
import MainLayout from '../components/MainLayout';

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
      <body className={`${myFont.className} h-full`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}