import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const { user, isSignedIn } = useUser(); 

  return (
    <div className='flex justify-between items-center shadow-md bg-gray-100 p-6'>
      {/* Logo */}
      <Link to="/">
        <img src='logo.svg' width={150} height={100} alt="Logo" className='hover:opacity-75 transition-opacity duration-300' />
      </Link>

      {/* Navigation Links */}
      <ul className='hidden md:flex gap-12'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>
          <Link to="/">Home</Link>
        </li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>
          <Link to="/profile">My Listings</Link>
        </li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>Personalized</li>
      </ul>

      {/* User Authentication and Button */}
      <div className='flex gap-5 items-center'>
        {isSignedIn ? (
          <>
            <UserButton />
            <Link to={'/add-Listhing'}>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'>
                Submit Listing
              </button>
            </Link>
          </>
        ) : (
          <>
            <SignInButton mode="modal">
              <button className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out'>
                Sign In
              </button>
            </SignInButton>
            <Link to={'/add-Listhing'}>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'>
                Submit Listing
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

