import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const EquipCard = ({data}) => {
    const { imageURL, itemName, categoryName, price, _id } = data;
   return (
    <Fade delay={0.6}>
      <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg border border-green-300 rounded-lg ">
        {/* Image Section */}
        <Slide delay={1}>
          <img
            src={`${imageURL}`} // Replace with dynamic image URL
            alt="Item"
            className="w-full h-48 object-cover"
          />
        </Slide>
        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Item Name */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{itemName}</h2> {/* Dynamic Item Name */}

          {/* Category */}
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Category: </span>{categoryName} {/* Dynamic Category */}
          </p>

          {/* Price */}
          <p className="text-lg text-primary dark:text-yellow-400">
            <span className="font-semibold">Price: </span>{price} {/* Dynamic Price */}
          </p>

          {/* View Details Button */}
          <Link to={`/details/${_id}`}
            className="block w-full bg-primary dark:bg-yellow-400 text-white dark:text-gray-800 py-2 px-4 rounded-lg "
          >
            View Details
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default EquipCard;
