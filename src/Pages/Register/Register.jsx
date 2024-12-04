import React from 'react';
import { BsGoogle } from "react-icons/bs"
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()

        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        
        console.log({name,photo,email,password});
        
    }
    return (
        <div className='w-10/12 mx-auto min-h-screen'>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                <div className="w-full my-4 max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-center text-black mb-6">
                        Register
                    </h2>
                    <form onSubmit={handleRegister}>
                        {/* Name Input */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your name"

                            />
                        </div>

                        {/* Photo URL Input */}
                        <div className="mb-4">
                            <label
                                htmlFor="photoURL"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name="photoURL"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter a photo URL"

                            />
                        </div>


                        {/* Email Input */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"

                            />
                        </div>


                        {/* Password Input */}
                        <div className="mb-4 relative">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your password"

                            />
                        </div>

                        {/* Register Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    {/* google log in */}
                    <div className="mt-6">
                        <button
                           
                            className="w-full px-4 py-2 bg-gray-500 text-white 
              rounded-lg flex items-center justify-center gap-2"
                        >
                            <BsGoogle />
                            Google
                        </button>
                    </div>
                    {/* Login Link */}
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                           to="/login"
                            className="text-indigo-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;