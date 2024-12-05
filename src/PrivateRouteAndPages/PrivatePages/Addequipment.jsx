import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviderFile/AuthProvider';

const Addequipment = () => {
    const{user} = useContext(AuthContext)
    const handleAdd = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const imageURL= form.get('image');
        const itemName= form.get('itemName');
        const categoryName= form.get('categoryName');
        const description= form.get('description');
        const price= form.get('price');
        const rating= form.get('rating');
        const customization= form.get('customization');
        const processingTime= form.get('processingTime');
        const stockStatus= form.get('stockStatus');

        const allInfo = {
            imageURL,itemName,categoryName,
            description,price,rating,customization,
            processingTime,stockStatus,email: user?.email,
            userName: user.displayName,
        }
        console.log(allInfo);
        fetch('http://localhost:5000/equipments',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(allInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("data created in the database successfuly",data);
            alert('data created in the database successfuly')
        })
    }
    return (
        <div>
            <form onSubmit={handleAdd} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

                {/* Image Upload */}
                <div className="flex flex-col">
                    <label htmlFor="image" className="text-lg font-medium mb-2">Image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder=" imageURL"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Item Name */}
                <div className="flex flex-col">
                    <label htmlFor="itemName" className="text-lg font-medium mb-2">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        name="itemName"
                        placeholder="Enter item name"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Category Name */}
                <div className="flex flex-col">
                    <label htmlFor="categoryName" className="text-lg font-medium mb-2">Category Name</label>
                    <input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        placeholder="Enter category name"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-lg font-medium mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Enter product description"
                        className="border border-gray-300 rounded-lg p-2"
                    ></textarea>
                </div>

                {/* Price */}
                <div className="flex flex-col">
                    <label htmlFor="price" className="text-lg font-medium mb-2">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        defaultValue={"$"}
                        placeholder="Enter price"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Rating */}
                <div className="flex flex-col">
                    <label htmlFor="rating" className="text-lg font-medium mb-2">Rating</label>
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        placeholder="Enter rating"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Customization */}
                <div className="flex flex-col">
                    <label htmlFor="customization" className="text-lg font-medium mb-2">Customization</label>
                    <input
                        type="text"
                        id="customization"
                        name="customization"
                        placeholder="Enter customization details"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Processing Time */}
                <div className="flex flex-col">
                    <label htmlFor="processingTime" className="text-lg font-medium mb-2">Processing Time</label>
                    <input
                        type="text"
                        id="processingTime"
                        name="processingTime"
                        placeholder="Enter delivery time"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Stock Status */}
                <div className="flex flex-col">
                    <label htmlFor="stockStatus" className="text-lg font-medium mb-2">Stock Status</label>
                    <input
                        type="number"
                        id="stockStatus"
                        name="stockStatus"
                        placeholder="Enter available quantity"
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* User Email */}
                <div className="flex flex-col">
                    <label htmlFor="userEmail" className="text-lg font-medium mb-2">User Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        defaultValue={user.email}// Replace with dynamic value
                        readOnly
                        className="border border-gray-300 rounded-lg p-2 bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* User Name */}
                <div className="flex flex-col">
                    <label htmlFor="userName" className="text-lg font-medium mb-2">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                       defaultValue={user.displayName} // Replace with dynamic value
                        readOnly
                        className="border border-gray-300 rounded-lg p-2 bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-focus"
                    >
                        Add Product
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Addequipment;