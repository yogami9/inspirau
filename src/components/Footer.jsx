import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© 2024 InspireU. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-blue-400">Instagram</a>
        <a href="#" className="text-blue-400">Twitter</a>
        <a href="#" className="text-blue-400">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;