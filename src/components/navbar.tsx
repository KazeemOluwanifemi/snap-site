// import React from 'react';

export default function Navbar(){
    return<header className='p-10 flex justify-between border-solid border-2 border-almost-black text-medium-gray'>
        <div className='nav-nd-logo border-solid border-2 border-almost-black flex flex-start w-5/6 gap-32'>
            <img src='/proj-assets/images/logo.svg'></img>
            <nav className='text-lg w-w-navbar flex justify-around border-solid border-2 border-almost-black items-center'>
                <button className='flex items-center gap-2 border-solid border-2 border-almost-black'>
                    <a href='#'>Features</a>
                    <img src='/proj-assets/images/icon-arrow-down.svg'></img>
                </button>
                <button className='flex items-center gap-2 border-solid border-2 border-almost-black'>
                    <a href='#'>Company</a>
                    <img src='/proj-assets/images/icon-arrow-down.svg'></img>
                </button>
                <button className='flex border-solid border-2 border-almost-black'>
                    <a href='#'>Careers</a>
                </button>
                <button className='flex border-solid border-2 border-almost-black'>
                    <a href='#'>About</a>
                </button>
            </nav>
        </div>

        <div className='login-nd-register w-1/6 border-solid border-2 border-almost-black flex justify-around'>
            <button>
                <a href='#'>Login</a>
            </button>
            <button className='px-5 py-3 border-solid border-2 border-almost-black rounded-2xl'>
                <a href='#'>Register</a>
            </button>
        </div>
    </header>
}