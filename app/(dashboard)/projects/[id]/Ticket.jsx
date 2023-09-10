'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Ticket({ title, body, severity, ticketId }) {

    let severityTextColor = "text-black" 

    if(severity === "Low"){
        severityTextColor = "text-green-500"
    }
    else if(severity === "Medium"){
        severityTextColor = "text-yellow-400"
    }
    else{
        severityTextColor = "text-red-500"
    }

    const handleDelete = async () => {
        const supabase = createClientComponentClient()
        const { error } = await supabase.from('tickets').delete().eq('id',ticketId)

        console.log(error)

    }

    return (
        <div className='w-96 p-5 my-5 border-2 border-black'>

            <p className='font-bold text-4xl'>{ title }</p>
            <p className='py-5 '>{ body }</p>
            <p className={`${severityTextColor} font-bold text-xl`}>{ severity }</p>

            <button onClick={ handleDelete }>Delete Ticket</button>

        </div>
    )
}
