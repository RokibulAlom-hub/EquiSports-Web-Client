import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const loadedInfo = useLoaderData()
    // console.log(loadedInfo);
    const { imageURL,itemName,categoryName,
        description,price,rating,customization,
        processingTime,stockStatus,email,
        displayName,} = loadedInfo
    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="h-64 bg-gray-200">
                        <img
                            src={imageURL}
                            alt="Product"
                            className="w-full h-full "
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-800">{itemName}</h1>

                        {/* Category */}
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold">Category: </span>{categoryName}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700">
                            <span className="font-semibold">Description: </span>
                            {description}
                        </p>

                        {/* Price */}
                        <p className="text-lg text-gray-800">
                            <span className="font-semibold">Price: </span>{price}
                        </p>

                        {/* Rating */}
                        <p className="text-lg text-yellow-500">
                            <span className="font-semibold">Rating: </span>{rating}/5
                        </p>

                        {/* Customization */}
                        <p className="text-gray-700">
                            <span className="font-semibold">Customization: </span>
                            {customization}
                        </p>

                        {/* Processing Time */}
                        <p className="text-gray-700">
                            <span className="font-semibold">Processing Time: </span>
                            {processingTime}
                        </p>

                        {/* Stock Status */}
                        <p className="text-lg text-green-600">
                            <span className="font-semibold">Stock Status: </span>Available ({stockStatus} units)
                        </p>

                        {/* User Information */}
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-700">
                                <span className="font-semibold">Added By: </span>{displayName}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Contact Email: </span>{email}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 mt-6">
                            <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-focus">
                                Add to Cart
                            </button>
                            <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-focus">
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;