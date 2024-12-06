import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProviderFile/AuthProvider';
import { Link } from 'react-router-dom';

const MyequipmentPage = () => {
    const {user} = useContext(AuthContext)
    const[loaddata,setLoaddata] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/equipments/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setLoaddata(data)
        })
    },[user.email])
    console.log(loaddata);
    const handleDelete = _id => {
        console.log('is im getting the id ',_id);
        fetch(`http://localhost:5000/equipments/${_id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            const remaining = loaddata.filter(d => d._id !== _id);
            setLoaddata(remaining)

            alert('data delted successfully from database')
        })
    }
    return (
        <div className="container mx-auto p-6 w-10/12 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">My Added Equipments</h1>

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
                            loaddata.map((d,id)=> <tr key={id}>
                                <td className="border border-gray-300 px-4 py-2">{id+1}</td>
                                <td className="border border-gray-300 px-4 py-2">{d.itemName}</td>
                                <td className="border border-gray-300 px-4 py-2">{d.categoryName}</td>
                                <td className="border border-gray-300 px-4 py-2">{d.price}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link to={`/UpdatePage/${d._id}`}
                                        className=" btn bg-green-500 text-white mr-3 py-1 px-3 rounded"
                                    >
                                        Update
                                    </Link>
                                    <Link onClick={()=> handleDelete(d._id)}
                                        className=" btn bg-red-500 text-white py-1 px-3 rounded"
                                    >
                                        Delete
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

export default MyequipmentPage;