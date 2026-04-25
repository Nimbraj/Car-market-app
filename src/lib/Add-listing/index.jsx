import Header from '@/components/Header';
import InputField from '@/lib/inputfield';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { api } from '@/lib/api';
import { useNavigate } from 'react-router-dom';

// Car details structure
const carDetails = {
  CarDetails: [
    {
      label: 'Name',
      name: 'listingTitle',
      fieldType: 'text',
      required: true,
      columns: 2,
    },
    {
      label: 'TagLine',
      name: 'tagLine',
      fieldType: 'text',
      required: true,
    },
    {
      label: 'Original Price',
      name: 'originalPrice',
      fieldType: 'number',
      required: true,
    },
    {
      label: 'Category',
      name: 'category',
      fieldType: 'dropdown',
      option: [
        'SUV',
        'Convertible',
        'Coupe',
        'Hatchback',
        'Hybrid',
        'Electric',
        'Truck',
        'Van',
        'Sedan',
      ],
      required: true,
    },
    {
      label: 'Selling Price',
      name: 'sellingPrice',
      fieldType: 'number',
      required: true,
    },
    {
      label: 'Type',
      name: 'type',
      fieldType: 'dropdown',
      option: ['Electric', 'Petrol', 'Diesel', 'Hybrid'],
      required: true,
    },
    {
      label: 'Make',
      name: 'make',
      fieldType: 'dropdown',
      option: [
        'Toyota',
        'Tata',
        'Honda',
        'Ford',
        'Chevrolet',
        'Mahindra',
        'Nissan',
        'BMW',
        'Kia',
        'Jeep',
        'Mazda',
        'Tesla',
        'Audi',
      ],
      required: true,
    },
    {
      label: 'Condition',
      name: 'condition',
      fieldType: 'dropdown',
      option: ['new', 'old'],
      required: true,
    },
    {
      label: 'Color',
      name: 'color',
      fieldType: 'checkbox',
      required: true,
      option: ['Black', 'Blue', 'Gold', 'Pink', 'Red', 'Silver'],
    },
    {
      label: 'Year',
      name: 'year',
      fieldType: 'number',
      required: true,
    },
    {
      label: 'Drive Type',
      name: 'driveType',
      fieldType: 'dropdown',
      required: true,
      option: ['FWD', 'RWD', '4WD'],
    },
    {
      label: 'Model',
      name: 'model',
      fieldType: 'text',
      required: true,
    },
    {
      label: 'Fuel Efficiency',
      name: 'fuelEfficiency',
      fieldType: 'text',
      required: true,
    },
    {
      label: 'Doors',
      name: 'door',
      fieldType: 'number',
      required: true,
    },
    {
      label: 'Engine Size',
      name: 'engineSize',
      fieldType: 'text',
    },
    {
      label: 'Cylinder',
      name: 'cylinder',
      fieldType: 'number',
    },
    {
      label: 'VIN',
      name: 'vin',
      fieldType: 'text',
    },
    {
      label: 'Offer Type',
      name: 'offerType',
      fieldType: 'dropdown',
      option: ['Buy', 'Hot offer', 'Sell', 'Urgent'],
    },
    {
      label: 'Listing Description',
      name: 'listingDescription',
      fieldType: 'textarea',
      required: true,
    },
  ],
};

// Features structure
const features = {
  features: [
    { label: 'Sunroof' },
    { label: 'Leather Seats' },
    { label: 'Bluetooth' },
    { label: 'Backup Camera' },
    { label: 'Brake Assist' },
    { label: 'Driver Airbag' },
    { label: 'Child Safety Locks' },
    { label: 'Tachometer' },
    { label: 'Panoramic Moonroof' },
    { label: 'Heater' },
    { label: 'Digital Odometer' },
    { label: 'Window-Electric' },
    { label: 'Apple-CarPlay' },
    { label: 'Power Steering' },
    { label: 'Rear Spoiler' },
    { label: 'Vanity Mirror' },
    { label: 'Rain Sensing Wiper' },
    { label: 'Adaptive Cruise Control' },
    { label: 'Lane Keep Assist' },
    { label: 'Blind Spot Monitor' },
    { label: '360 Camera' },
    { label: 'Heated Seats' },
    { label: 'Ventilated Seats' },
    { label: 'Wireless Charging' },
    { label: 'Navigation System' },
    { label: 'Keyless Entry' },
    { label: 'Push Start Button' },
    { label: 'Auto Climate Control' },
    { label: 'Alloy Wheels' },
    { label: 'LED Headlights' },
    { label: 'Parking Sensors' },
    { label: 'Towing Package' },
    { label: 'Roof Rack' },
    { label: 'Sound System' },
  ],
};

function AddListing() {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle feature checkbox state
  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setSelectedFeatures((prevFeatures) =>
      checked ? [...prevFeatures, value] : prevFeatures.filter((feature) => feature !== value)
    );
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!isSignedIn) {
      setMessage('Please sign in to add a listing.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formData,
        features: selectedFeatures,
        userId: user.id,
        userEmail: user.primaryEmailAddress?.emailAddress,
        userName: user.fullName || user.username,
      };

      await api.createCar(payload);
      setMessage('Listing created successfully!');
      setFormData({});
      setSelectedFeatures([]);
      setTimeout(() => navigate('/profile'), 1500);
    } catch (error) {
      console.error('Error creating listing:', error);
      setMessage(error.message || 'Failed to create listing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="container mx-auto px-5 md:px-10 py-10">
        <h2 className="font-bold text-4xl mb-6 text-center text-gray-800">Add New Listing</h2>

        {message && (
          <div
            className={`mb-4 p-4 rounded-md text-center ${
              message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-10 bg-white shadow-lg rounded-xl">
          {/* Car Details */}
          <div>
            <h1 className="font-medium text-2xl mb-6 text-gray-700">Car Details</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {carDetails.CarDetails.map((item, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2 font-semibold text-gray-600">
                  {item.label}
                  {item.required && <span className="text-red-500">*</span>}
                </label>
                {item.fieldType === 'text' || item.fieldType === 'number' ? (
                  <InputField
                    item={item}
                    handleinputChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ) : item.fieldType === 'dropdown' ? (
                  <select
                    name={item.name}
                    required={item.required}
                    onChange={(e) => handleInputChange(item.name, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select {item.label}</option>
                    {item.option?.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : item.fieldType === 'checkbox' ? (
                  <div>
                    {item.option.map((opt, idx) => (
                      <label key={idx} className="mr-4 inline-flex items-center">
                        <input
                          type="checkbox"
                          name={item.name}
                          value={opt}
                          onChange={handleFeatureChange}
                          className="mr-2 accent-blue-600"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : item.fieldType === 'textarea' ? (
                  <textarea
                    name={item.name}
                    required={item.required}
                    onChange={(e) => handleInputChange(item.name, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ) : null}
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-10">
            <h2 className="font-medium text-2xl my-6 text-gray-700">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.features.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={`feature-${index}`}
                    value={item.label}
                    onChange={handleFeatureChange}
                    className="accent-blue-600"
                  />
                  <label htmlFor={`feature-${index}`} className="text-gray-700">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;

