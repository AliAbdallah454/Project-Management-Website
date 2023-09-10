'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Ticket from './Ticket'

export default function RealTimeTickets({ tickets }) {

    const supabase = createClientComponentClient()

    supabase.channel('realTimeTickets').on('postgres_changes', {
        event: "*",
        schema: "public",
        table: 'tickets'
    }, () => {
        window.location.reload()
    }).subscribe()

    return (
        <div>
            {tickets.map(ticket => <Ticket
                key={ ticket.id }
                title={ ticket.title }
                body={ ticket.body }
                severity={ ticket.severity }
                ticketId={ ticket.id }
            />)}
        </div>
    )
}
