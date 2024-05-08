//app/layout.jsx
'use client';

import './globals.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../components/AuthContext';  // Asegúrate de ajustar el path si es necesario
import { Container } from 'reactstrap';
import React from 'react';

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
      <body className='font-crush'>
        <AuthProvider>
          <Header />
          <main id="app" className="d-flex flex-column h-100 " data-testid="layout">
            <NavBar />
            <Container className="flex-grow-1 mt-5">{children}</Container>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
