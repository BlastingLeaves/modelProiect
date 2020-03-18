import React from "react";



const AppBarDropdown = ({open}) => open
    ? <div className="dropdown-menu absolute sm:hidden bg-white shadow-lg rounded-md top-64 sm:top-50 " >
        <div className="px-2 pt-2 pb-3">
            <a href="/"
               className=" block px-3 py-2 pr-24 rounded-md text-base font-medium text-primary hover:text-white hover:bg-gray-700 bg-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
            <a href="/"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
            <a href="/"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
            <a href="/"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
        </div>
    </div>
    : '';

export default AppBarDropdown