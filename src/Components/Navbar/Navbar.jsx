import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviderFile/AuthProvider';
import Swal from 'sweetalert2'
const Navbar = () => {
    const {user, userLogout} = useContext(AuthContext);
    console.log(user);
    const logout = ( ) => {
        userLogout()
        .then(() => {
            console.log("log out done");
            Swal.fire({
                title: '',
                text: 'Logout successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              }) 
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
                title: 'Error!',
                text: "something wrong",
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          });
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to='/'>Home</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            <Link to='/allEquipment'>Allequipment</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">GearChamps</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-3 menu-horizontal px-1">
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/allEquipment'>Allequipment</Link>
                        {
                            user? <div>
                                <Link to='/Addequipment'>Addequipment</Link>
                                <Link to='/MyequipmentPage'>MyequipmentPage</Link>
                            </div> : ''
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<div>
                            <Link to='/login' onClick={logout} className="btn">Logout</Link>
                        </div>
                        : <div>
                            <Link to='/login' className="btn-sm mx-3">Login</Link>
                            <Link to='/register' className="btn-sm">Register</Link>
                        </div>
                    }
                </div>
            </div>







        </div>
    );
};

export default Navbar;