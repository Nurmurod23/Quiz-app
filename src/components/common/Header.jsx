import React from 'react';

const Header = ({ title = 'Frontend Quiz App' }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
