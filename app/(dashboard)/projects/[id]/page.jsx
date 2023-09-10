'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import AddTicketButton from './AddTicketButton'
import RealTimeTickets from './RealTimeTickets'

export default function Project({ params }) {

    const id = params.id
    const [project, setProject] = useState({})
    const [tickets, setTickets] = useState([])

    useEffect(() => {

        const getTickets = async () => {
    
            const supabase = createClientComponentClient()
            const { data, error } = await supabase.from('projects').select().eq('id', id).single()
            setProject(data)
            console.log(data)
            const ticketsObject = await supabase.from('tickets').select().eq('projectId', id)
            console.log(ticketsObject.data)
            setTickets(ticketsObject.data)

        }

        getTickets()

    }, [])

    return (
        <div>
            <p className='font-bold text-4xl py-5'>{ project.name }</p>
            <AddTicketButton projectId={ id } />
            <RealTimeTickets tickets={ tickets }/>
        </div>
    )
}
