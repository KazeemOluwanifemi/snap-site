// import React from 'react';

export default function Navbar(){
    return<header className='p-10 flex justify-between text-medium-gray mb-32'>
        <div className='nav-nd-logo flex flex-start w-5/6 gap-32'>
            <img src='/proj-assets/images/logo.svg'></img>
            <nav className='text-lg w-w-navbar flex justify-around  items-center '>
                <button className='flex items-center gap-2 hover:text-black active:font-semibold'>
                    <a href='#' className="">Features</a>
                    <img src='/proj-assets/images/icon-arrow-down.svg'></img>
                </button>

                <button className='flex items-center gap-2 hover:text-black active:font-semibold'>
                    <a href='#'>Company</a>
                    <img src='/proj-assets/images/icon-arrow-down.svg'></img>
                </button>

                <button className='flex hover:text-black active:font-semibold'>
                    <a href='#'>Careers</a>
                </button>

                <button className='flex hover:text-black active:font-semibold'>
                    <a href='#'>About</a>
                </button>
            </nav>
        </div>

        <div className='login-nd-register w-1/6 flex justify-around'>
            <button className="hover:text-black active:font-semibold">
                <a href='#'>Login</a>
            </button>
            <button className='px-5 py-3 border-solid border-2 border-almost-black rounded-2xl hover:text-black active:font-semibold'>
                <a href='#'>Register</a>
            </button>
        </div>
    </header>
}