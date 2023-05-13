import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="px-6 py-4 text-xl">
      <Link href="/">tanblog</Link>
    </header>
  );
};

export default Header;
