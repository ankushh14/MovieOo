import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"



export default function Navbar(){
    const [nav,setNav] = useState(false);
    return(
        <>
            <nav className="nav-bar w-full bg-cyan-950 flex justify-between items-center p-4 ">
                <div className="logo">
                    <h1 className="text-2xl text-white">MovieOo</h1>
                </div>
                <div className="bars flex w-6 flex-col space-y-2 md:hidden" onClick={()=>{setNav(!nav)}}>
                    <span className={`border border-white transition-all duration-300 ${nav?`rotate-45 translate-y-[0.30rem]`:`rotate-0`}`}></span>
                    <span className={`border border-white transition-all duration-300 ${nav?`-rotate-45 -translate-y-[0.30rem]`:`rotate-0`}`}></span>
                </div>
                <ul className={`navlist text-white absolute w-full bg-cyan-950 transition-all duration-300 p-6 items-center space-y-6 flex flex-col top-16 ${nav?`left-0`:`-left-full`} md:flex-row md:space-x-8 md:static md:w-fit md:p-0 md:bg-none md:z-0 md:space-y-0 md:transition-none md:duration-0`}>
                    <NavLink to="/" onClick={()=>{setNav(!nav)}}>Home</NavLink>
                    <NavLink to="/movies" onClick={()=>{setNav(!nav)}}>Movies</NavLink>
                </ul>
            </nav>
        </>
    )
};