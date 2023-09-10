import React from 'react'
import Link from 'next/link'

export default function Project({ name, projectId }) {
    return (
    <Link href={`/projects/${projectId}`}>
            <div className='p-5 d h-28 w-auto bg-white border-2 border-black'>
                <div className='flex justify-between'>
                    <p className='font-bold text-3xl text-black'>{ name }</p>
                    <p>GO</p>
                </div>
            </div>
    </Link>
    )
}
