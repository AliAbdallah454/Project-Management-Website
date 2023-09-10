import React from 'react'

import Link from 'next/link'

export default function NavbarLink({ text, href }) {
    return (
        <div>
            <Link href={href}>
                <p className='text-2xl font-bold hover:text-purple-500'>{text}</p>
            </Link>
        </div>
    )
}
