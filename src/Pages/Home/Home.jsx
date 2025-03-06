import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sliders from '../../Components/Slides/Sliders';
import EquipCard from '../../Components/EquipCard/EquipCard';
import Category from '../../../public/Category.json';
import ThemeChange from '../../Components/ThemeChange/ThemeChange';
import Reveiw from '../../Components/Reveiw/Reveiw';
const Home = () => {
  const loaddata = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData =
    selectedCategory === 'All'
      ? loaddata
      : loaddata.filter((item) => item.categoryName === selectedCategory);

  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900 dark:text-white">
      {/* Theme Toggle */}
      {/* <div className="flex justify-center py-4">
        <ThemeChange />
      </div> */}

      {/* Sliders */}
      <Sliders />

      {/* Categories */}
      <div className="my-5">
        <h2 className="text-2xl font-bold text-center">Choose a Category</h2>
        <div className="flex justify-center gap-4 my-4">
          <button
            className={`px-4 py-2 rounded-lg ${selectedCategory === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-[#27391C] text-white'
              }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {Category.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-lg ${selectedCategory === cat.categoryName
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#27391C] text-white'
                  }`}
                onClick={() => setSelectedCategory(cat.categoryName)}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10 w-10/12 mx-auto">
        {filteredData.map((data) => (
          <EquipCard key={data._id} data={data} />
        ))}
      </div>
      {/* reveiw */}
      <Reveiw></Reveiw>
    </div>
  );
};

export default Home;
