import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BsGoogle } from "react-icons/bs"
import { AuthContext } from '../../AuthProviderFile/AuthProvider';
const Login = () => {
    const { userLogin,googlelogin} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')

        // console.log({ email, password });
        userLogin(email,password)
        .then(result => {
            // console.log("user logged in",result.user);
            Swal.fire({
                title: '',
                text: 'Login successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              }) 
        })
        .catch((error) => {
            const errorMessage = error.message;
            // console.log(errorMessage);
            Swal.fire({
                title: 'Error!',
                text: "something wrong",
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          });

    }
    const handlegoggle = () => {
        googlelogin()
          .then((result) => {
            // console.log(result.user);
            Swal.fire({
                title: '',
                text: 'User Login successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
          })
          .catch((err) => console.log(err.message)
          )
      }
    return (
        <div className='w-10/12 mx-auto min-h-screen'>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl my-4 font-bold text-center text-black mb-6">Login</h2>
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label

                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your password"
                                required
                            />
                            <div className="text-right mt-2">
                                <Link to="/ForgetPass"
                                    className="text-sm text-indigo-600 hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        {/* Login Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <button
                         onClick={handlegoggle}
                        className="w-full px-4 py-2 my-3 bg-gray-500 text-white 
              rounded-lg flex items-center justify-center gap-2"
                    >
                        <BsGoogle />
                        Google
                    </button>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-indigo-600 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>

                {/* Register Link */}
            </div>
        </div>
    );
};

export default Login;