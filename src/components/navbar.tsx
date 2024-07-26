// import React from 'react';

export default function Navbar(){
    return<header className='p-10 flex justify-between text-medium-gray mb-32'>
        <div className='nav-nd-logo flex flex-start w-5/6'>
            <img src='/proj-assets/images/logo.svg' alt="company-logo"></img>

            <div className=" hidden lg:flex lg:flex-end">
                <button className="hover:cursor-pointer">
                <img src='/proj-assets/images/icon-menu.svg' alt="menu-icon"></img>
                </button>
            </div>
            

            <nav className='text-lg w-w-navbar flex justify-around  items-center lg:hidden'>
                <button className='flex items-center gap-2 hover:text-black active:font-semibold '>
                    <a href='#' className="p-1">Features</a>
                    <img src='/proj-assets/images/icon-arrow-down.svg' alt="down-arrow-icon"></img>
                </button>

                <button className='flex items-center gap-2 hover:text-black active:font-semibold'>
                    <a href='#' className="p-1">Company</a>
                    <img src='/proj-assets/images/icon-arrow-down.svg' alt="down-arrow-icon"></img>
                </button>

                <button className='flex hover:text-black active:font-semibold'>
                    <a href='#' className="p-1">Careers</a>
                </button>

                <button className='flex hover:text-black active:font-semibold'>
                    <a href='#' className="p-1">About</a>
                </button>
            </nav>
        </div>

        <div className='login-nd-register w-1/6 flex justify-around lg:hidden '>
            <button className="hover:text-black active:font-semibold">
                <a href='#' className="p-1">Login</a>
            </button>
            <button className='px-5 py-3 border-solid border-2 border-medium-gray rounded-2xl active:border-almost-black  hover:text-black active:font-semibold'>
                <a href='#' className="p-1">Register</a>
            </button>
        </div>
    </header>
}