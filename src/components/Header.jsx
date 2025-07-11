import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-blue-950 shadow-md">
      <div className="max-w-6xl flex justify-start items-center px-4 py-2">
        <img
          src="/logo.png"
          alt="PicFix logo"
          className="h-16 pt-1 w-auto mr-4 filter invert brightness-0"
        />
        <h1 className="text-white text-lg md:text-2xl font-semibold">
          Ultimate solution for image enhancements
        </h1>
      </div>
    </header>
  );
};

export default Header;