import React from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <div className="bg-blue-950 text-white hidden lg:block h-9 p-1">
      <div className="w-2/3 mx-auto">
        <h1 className="text-end">
          <Link to="#" className="hover:font-bold">
            Contact us
          </Link>{' '}
          |{' '}
          <Link to="/access-account" className="hover:font-bold">
            Log in
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Navbar2;
