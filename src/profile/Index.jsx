import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { api } from '@/lib/api';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { SiSpeedtest } from 'react-icons/si';
import { GiGearStickPattern } from 'react-icons/gi';

function Profile() {
  const { user, isSignedIn } = useUser();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isSignedIn || !user?.id) return;

    const fetchListings = async () => {
      try {
        setLoading(true);
        const data = await api.getUserCars(user.id);
        setListings(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load your listings.');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [isSignedIn, user?.id]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    try {
      await api.deleteCar(id);
      setListings((prev) => prev.filter((car) => car.id !== id));
    } catch (err) {
      alert('Failed to delete listing.');
    }
  };

  return (
    <div>
      <Header />
      <div className="p-[10px] md:px-10 my-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">My Listings</h2>
          <Link to={'/add-Listhing'}>
            <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
              Add New Listing
            </button>
          </Link>
        </div>

        {!isSignedIn && (
          <p className="text-center text-gray-600">Please sign in to view your listings.</p>
        )}

        {loading && isSignedIn && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && listings.length === 0 && isSignedIn && (
          <p className="text-center text-gray-600">You have no listings yet.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((car) => (
            <div
              key={car.id}
              className="border rounded-lg shadow-lg p-6 bg-white transition-transform hover:scale-105 relative"
            >
              <h2 className="absolute m-2 bg-green-500 text-white rounded-full px-2 py-1 text-sm uppercase">
                {car.condition || 'New'}
              </h2>

              <img
                src={
                  Array.isArray(car.images) && car.images.length > 0
                    ? car.images[0]
                    : 'https://content.carlelo.com/uploads/blog_img/1710568288.webp'
                }
                alt={car.listingTitle}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.listingTitle}</h3>
              <p className="text-gray-600 mb-2">Model: {car.model}</p>
              <p className="text-gray-600 flex items-center mb-2">
                <BsFillFuelPumpFill className="mr-2" /> {car.type}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <SiSpeedtest className="mr-2" /> {car.fuelEfficiency}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <GiGearStickPattern className="mr-2" /> {car.driveType}
              </p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-900 font-semibold">Price: ${car.sellingPrice}</p>
                <button
                  onClick={() => handleDelete(car.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;

