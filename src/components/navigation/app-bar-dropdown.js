import React from "react";



const AppBarDropdown = ({open}) => open
    ? <div className="dropdown-menu absolute sm:hidden bg-white shadow-lg rounded-md" >
        <div className="px-2 pt-2 pb-3">
            <a href="/"
               className="mt-1 block px-3 py-2 pr-20 rounded-md text-base font-medium text-primary hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</a>
            <a href="/"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
            <a href="/"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>

        </div>
    </div>
    : '';

export default AppBarDropdown