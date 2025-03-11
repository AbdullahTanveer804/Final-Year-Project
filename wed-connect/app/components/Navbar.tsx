import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header >
            <nav className='bg-bggray h-20 md:h-16 w-screen flex justify-between items-center px-5 sm:px-20'>
                <div className='text-2xl font-bold text-accent'>
                    <Link href={'/'}>
                        WedConnect.
                    </Link>
                </div>
                <div>
                    <ul className='md:flex md:items-center gap-[2vw] hidden'>
                        <li>
                            <Link href={"/"} className='navbar__link relative'>Home</Link>
                        </li>
                        <li>
                            <Link href={"#"} className='navbar__link relative'>Vendors</Link>
                        </li>
                        <li>
                            <Link href={"#"} className='navbar__link relative'>Blogs</Link>
                        </li>
                        <li>
                            <Link href={"#"} className='navbar__link relative'>About us</Link>
                        </li>
                        <li>
                            <Link href={"#"} className='navbar__link relative'>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='hidden md:flex '>
                        <Link href={"#"} className='px-5 pt-[5px] pb-2 rounded-full text-white font-semibold bg-accent border-accent border-2 hover:bg-bggray hover:text-accent transition duration-300 ease-in-out'>Log in</Link>
                    </div>
                    <div className='sm:hidden text-3xl'>
                        &#8801;
                    </div>
                </div>
            </nav>
           <section >
            <div className='bg-[url(/hero.jpg)] bg-cover bg-center h-[91.4vh]'>
            <div >
                Your Dream Wedding Starts Here
            </div>
            </div>
           </section>
        </header>
    )
}
