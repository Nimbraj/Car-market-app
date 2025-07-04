import Header from '@/components/Header';
import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>
      <Header />
      <div className='p-[10px] md:px-10 my-10'>
        <div className='flex justify-between items-center'>
          <h2>My Listing</h2>
          <Link to={'/add-Listhing'}>
            <button className='bg-blue-500 p-3 rounded-full'>Add New Listing</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
