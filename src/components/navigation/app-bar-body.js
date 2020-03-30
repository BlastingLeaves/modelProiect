import React from "react"
import AppBarLogo from "./app-bar-logo";



const AppBarBody = () =>
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <AppBarLogo/>
        <div className="hidden sm:block sm:ml-6">
            <div className="flex">
                <a href="/"
                   className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black focus:outline-none hover:bg-orange-400 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</a>
                <a href="/"
                   className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:bg-orange-400 focus:outline-none focus:text-black focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
                <a href="/"
                   className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:bg-orange-400 focus:outline-none focus:text-black focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
            </div>
        </div>
    </div>

export default AppBarBody