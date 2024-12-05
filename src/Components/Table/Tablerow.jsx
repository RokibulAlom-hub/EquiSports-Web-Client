import React from 'react';

const Tablerow = ({data}) => {
    console.log(data);
    
    return (
        <div>
            <tbody>
                {/* Example Row */}
                <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">Football</td>
                    <td className="border border-gray-300 px-4 py-2">Outdoor Sports</td>
                    <td className="border border-gray-300 px-4 py-2">$30</td>
                    <td className="border border-gray-300 px-4 py-2">
                        <button
                            className="bg-primary text-white py-1 px-3 rounded hover:bg-primary-focus"
                        >
                            View Details
                        </button>
                    </td>
                </tr>
                {/* Add more rows here */}
            </tbody>
        </div>
    );
};

export default Tablerow;