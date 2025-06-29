import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

