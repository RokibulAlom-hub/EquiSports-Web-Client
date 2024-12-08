import React from 'react';
import { Link } from 'react-router-dom';

const EquipCard = ({ data }) => {
    const {rating,price,categoryName,itemName,imageURL,_id} = data;
    return (
        <div>
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                <img
                    src={`${imageURL}`} // Replace with dynamic image URL
                    alt="Item"
                    className="w-full h-48 object-cover"
                />

                {/* Content Section */}
                <div className="p-6 space-y-4">
                    {/* Item Name */}
                    <h2 className="text-2xl font-bold text-gray-800">{itemName}</h2> {/* Dynamic Item Name */}

                    {/* Category */}
                    <p className="text-gray-600">
                        <span className="font-semibold">Category: </span>{categoryName} {/* Dynamic Category */}
                    </p>

                    {/* Price */}
                    <p className="text-lg text-primary">
                        <span className="font-semibold">Price: </span>{price} {/* Dynamic Price */}
                    </p>

                    {/* View Details Button */}
                    <Link to={`/details/${_id}`}
                        
                        className="block w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-focus"
                    >
                        View Details
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default EquipCard;