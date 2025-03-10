import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Allequipment = () => {
    const loaddata = useLoaderData();
    const [sorting,setSorting] = useState(loaddata);
    const handleSortByPrice =() => {
        fetch(`https://b10-a10-server-side-rokibul-alom-hub.vercel.app/equipments/sort`)
        .then(res => res.json())
        .then(data => {
            setSorting(data)
        })
    }

    return (
        <div className="container mx-auto p-6 w-10/12 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">All Sports Equipment</h1>
            <div className="flex justify-end mb-4">
                <button
                    onClick={handleSortByPrice}
                    className="bg-[#27391C] text-white py-1 px-4 rounded hover:bg-red-600"
                >
                    Sort by Price
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sorting.map((d,id)=> <tr key={id}>
                                <td className="border border-gray-300 px-4 py-2">{id+1}</td>
                                <td className="border border-gray-300 px-4 py-2">{d.itemName}</td>
                                <td className="border border-gray-300 px-4 py-2">{d.categoryName}</td>
                                <td className="border border-gray-300 px-4 py-2">{d.price} $</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link to={`/details/${d._id}`}
                                        className="bg-[#27391C] btn text-white py-1 px-3 rounded hover:bg-red-600"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Allequipment;