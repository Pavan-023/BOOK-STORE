import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide" style={{textAlign:"center",color:"midnightblue"}}>BookNest</h1>

      <nav className="space-x-6 text-lg font-medium" id="navbar">
        <Link
          to="/"
          className="hover:text-yellow-300 transition duration-200" id="navbar"
        >
          Home
        </Link>
        <Link
          to="/books"
          className="hover:text-yellow-300 transition duration-200" id="navbar"
        >
          Books
        </Link>
        <Link
          to="/login"
          className="hover:text-yellow-300 transition duration-200" id="navbar"
        >
          Login
        </Link>
        <Link
          to="/admin"
          className="hover:text-yellow-300 transition duration-200" id="navbar"
        >
          Admin
        </Link>
      </nav>
    </header>
  );
}
