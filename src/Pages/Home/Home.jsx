import React, { useState } from 'react';
import Sliders from '../../Components/Slides/Sliders';
import { useLoaderData } from 'react-router-dom';
import EquipCard from '../../Components/EquipCard/EquipCard';
import Category from '../../../public/Category.json'
const Home = () => {
  const loaddata = useLoaderData();
  console.log(Category);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredData =
    selectedCategory === 'All'
      ? loaddata
      : loaddata.filter((item) => item.categoryName === selectedCategory);
  return (
    <div className='w-10/12 mx-auto min-h-screen'>
      <Sliders></Sliders>
      <div className="my-5">
        <h2 className="text-2xl font-bold text-center">Choose a Category</h2>
        <div className="flex justify-center gap-4 my-4">
          <button
            className={`px-4 py-2 rounded-lg ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {Category.map((cat) => (
            <button
              key={cat.id} // Use the unique "id" for the key
              className={`px-4 py-2 rounded-lg ${selectedCategory === cat.categoryName ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory(cat.categoryName)}
            >
              {cat.categoryName} {/* Render the category name */}
            </button>
          ))}
        </div>

      </div>
      <div className='my-3'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {
            filteredData.map(data => <EquipCard key={data._id} data={data}></EquipCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;