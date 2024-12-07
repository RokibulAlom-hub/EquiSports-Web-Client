import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sliders from '../../Components/Slides/Sliders';
import EquipCard from '../../Components/EquipCard/EquipCard';
import Category from '../../../public/Category.json';
import ThemeChange from '../../Components/ThemeChange/ThemeChange';

const Home = () => {
  const loaddata = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData =
    selectedCategory === 'All'
      ? loaddata
      : loaddata.filter((item) => item.categoryName === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      {/* Theme Toggle */}
      <div className="flex justify-end py-4">
        <ThemeChange />
      </div>

      {/* Sliders */}
      <Sliders />

      {/* Categories */}
      <div className="my-5">
        <h2 className="text-2xl font-bold text-center">Choose a Category</h2>
        <div className="flex justify-center gap-4 my-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-800 dark:text-white'
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {Category.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === cat.categoryName
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 dark:text-white'
              }`}
              onClick={() => setSelectedCategory(cat.categoryName)}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {filteredData.map((data) => (
          <EquipCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
