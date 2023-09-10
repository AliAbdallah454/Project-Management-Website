import React from 'react'
import Image from 'next/image'
import NavbarLink from './NavbarLink'

import Link from 'next/link'

import parrotIcon from '@/public/icons/parrot.png'

export default function Navbar({ user }) {
    return (
        <div className='text-black flex w-auto h-20 bg-white border-b-2 border-black my-5'>
            
            <div className='flex justify-between items-center px-10 w-1/2 h-16'>

                <Link href="/">
                    <Image src={parrotIcon} alt='parr' width={ 40 } />
                </Link>

                {/* <NavbarLink text="Profile" href="/login"/> */}
                <NavbarLink text="Projects" href="/projects"/>
                <NavbarLink text="Colleages" href="/login"/>
                <NavbarLink text="Discussion" href="/login"/>

            </div>
            <div className='w-1/2 h-16 flex items-center justify-end px-10'>
                <NavbarLink 
                        text={user ? user.email : "Hello"} 
                        href="/profile" />
            </div>

        </div>
    )
}
