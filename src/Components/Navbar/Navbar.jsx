import React, { useContext } from "react";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import "./Navbar.css";
import { Tooltip } from "react-tooltip";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  // console.log(user);
  const logout = () => {
    userLogout()
      .then(() => {
        // console.log("log out done");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div className="bg-[#2C3639] text-white">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="font-semibold font-semibold-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[500] mt-3 w-52 p-2 shadow"
            >
              <NavLink className="font-semibold" to="/">
                Home
              </NavLink>
              <NavLink className="font-semibold" to="/allEquipment">
                Allequipment
              </NavLink>
              {user ? (
                <div className="flex flex-col">
                  <NavLink className="font-semibold" to="/Addequipment">
                    Addequipment
                  </NavLink>
                  <NavLink className="font-semibold" to="/MyequipmentPage">
                    MyequipmentPage
                  </NavLink>
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
          <a className="font-semibold font-semibold-ghost text-xl">
            GearChamps
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-3 menu-horizontal px-1">
            <NavLink className="font-semibold" to="/">
              Home
            </NavLink>
            <NavLink className="font-semibold" to="/allEquipment">
              Allequipment
            </NavLink>
            {user ? (
              <div className="space-x-2">
                <NavLink className="font-semibold" to="/Addequipment">
                  Addequipment
                </NavLink>
                <NavLink className="font-semibold" to="/MyequipmentPage">
                  MyequipmentPage
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 z-10 justify-center items-center">
              <p className="font-semibold">{user?.displayName}</p>
              <Link
                to="/login"
                onClick={logout}
                className="p-2 rounded-lg bg-red-600 text-white "
              >
                Logout
              </Link>
              <Tooltip id="my-tooltip" />
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="p-2 rounded-lg bg-green-700 text-white font-semibold mx-3"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="p-2 rounded-lg bg-red-600 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
