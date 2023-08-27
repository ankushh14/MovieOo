import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { changeTheme } from '../store/Slices/themeSlice';



export default function Navbar(){
    const [nav,setNav] = useState(false);
    const [themes,setThemes]=useState("light");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changeTheme(themes));
    },[themes]);
    return(
        <>
            <nav className="nav-bar w-full bg-cyan-950 flex justify-between items-center p-4 border-b-2 border-white ">
                <div className="logo w-fit">
                    <h1 className="text-2xl text-white">MovieOo</h1>
                </div>
                <div className="theme-div flex space-x-2">
                    <BsFillSunFill className='cursor-pointer' color={`${themes === 'light'?'white':'black'}`} onClick={()=>{setThemes("light")}}/>
                    <BsMoonStarsFill className='cursor-pointer' color={`${themes === 'dark'?'white':'black'}`} onClick={()=>{setThemes("dark")}}/>
                </div>
                <div className="bars flex w-6 flex-col space-y-2 md:hidden" onClick={()=>{setNav(!nav)}}>
                    <span className={`border border-white transition-all duration-300 ${nav?`rotate-45 translate-y-[0.30rem]`:`rotate-0`}`}></span>
                    <span className={`border border-white transition-all duration-300 ${nav?`-rotate-45 -translate-y-[0.30rem]`:`rotate-0`}`}></span>
                </div>
                <ul className={`navlist text-white absolute w-full bg-cyan-950 transition-all duration-300 p-6 items-center space-y-6 flex flex-col top-16 ${nav?`left-0`:`-left-full`} md:flex-row md:space-x-8 md:static md:w-fit md:p-0 md:bg-none md:z-0 md:space-y-0 md:transition-none md:duration-0`}>
                    <NavLink to="/" onClick={()=>{setNav(!nav)}} className="w-full  flex items-center justify-center"><i class='bx bx-home'></i>Home</NavLink>
                    <NavLink to="/movies" onClick={()=>{setNav(!nav)}} className="w-full  flex items-center justify-center"><i class='bx bx-movie' ></i>Movies</NavLink>
                </ul>
            </nav>
        </>
    )
};