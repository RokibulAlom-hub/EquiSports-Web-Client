import React from 'react';
import Sliders from '../../Components/Slides/Sliders';
import { data, useLoaderData } from 'react-router-dom';
import EquipCard from '../../Components/EquipCard/EquipCard';
import Category from '../../../public/Category.json'
const Home = () => {
  const loaddata = useLoaderData();
  
  return (
    <div className='w-10/12 mx-auto min-h-screen'>
      <Sliders></Sliders>
      <div className='my-3'>
        <h1 className='text-center text-[#6C1C2E] underline font-bold text-4xl  mt-5'>ALL Equipments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {
            loaddata.map(data => <EquipCard key={data._id} data={data}></EquipCard>)
          }
        </div>
      </div>
      <h2>category{Category.length}</h2>
    </div>
  );
};

export default Home;