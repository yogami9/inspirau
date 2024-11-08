import React from 'react';

const Header = () => {
  return (
    <header className="bg-opacity-75 backdrop-blur-md fixed top-0 left-0 w-full p-4 z-50">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">InspireU</h1>
        <ul className="flex space-x-4">
          <li><a href="#videos" className="text-white">Videos</a></li>
          <li><a href="#articles" className="text-white">Articles</a></li>
          <li><a href="#community" className="text-white">Community</a></li>
          <li><a href="#about" className="text-white">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;