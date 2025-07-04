import { SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const { user, isSignedIn } = useUser(); 

  return (
    <div className='flex justify-between items-center shadow-md bg-gray-100 p-6'>
      {/* Logo */}
      <img src='logo.svg' width={150} height={100} alt="Logo" className='hover:opacity-75 transition-opacity duration-300' />

      {/* Navigation Links */}
      <ul className='hidden md:flex gap-12'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-blue-600'>Personalized</li>
      </ul>

      {/* User Authentication and Button */}
      {isSignedIn ? (
        <div className='flex gap-5'>
          <UserButton />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'>
            Submit Listing
          </button>
        </div>
      ) : (
        <div className='flex gap-5'>
          <Link to={'/profile'}>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'>
              Submit Listing
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
