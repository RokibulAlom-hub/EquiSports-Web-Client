import React, { useState, useEffect } from 'react';

const SportsCategory = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    // Load categories from JSON or server
    useEffect(() => {
        const fetchCategories = async () => {
            // Replace with an actual API endpoint if fetching from a server
            const response = await fetch('/Category.json');
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return ( 
        <div className="p-6 bg-gray-100 rounded shadow">
           
            <ul className="gap-2 flex flex-wrap justify-center items-center ">
                {categories.map((category) => (
                    <li key={category.id}>
                        <button
                            onClick={() => onCategorySelect(category.categoryName)}
                            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            {category.categoryName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SportsCategory;
