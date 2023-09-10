'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function Project({ name, projectId }) {

    const handleDelete = async () => {

        const supabase = createClientComponentClient()
        const { error } = await supabase.from("projects").delete().eq("id", projectId)
        const { err2 } = await supabase.from("tickets").delete().eq("projectId", projectId)

        console.log(error)
        console.log(err2)

    }

    return (
        
        <div className='p-5 d h-28 w-auto bg-white border-2 border-black'>
            <div className='flex justify-between'>
                <p className='font-bold text-3xl text-black'>{ name }</p>
                <Link href={`/projects/${projectId}`}>
                    <p>GO</p>
                </Link>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
