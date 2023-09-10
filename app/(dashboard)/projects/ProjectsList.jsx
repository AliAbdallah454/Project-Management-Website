'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import Project from "./Project"

export default function ProjectsList() {

    const [projects, setProjects] = useState([])

    const supabase = createClientComponentClient()

    supabase.channel('realTimeTickets').on('postgres_changes', {
        event: "*",
        schema: "public",
        table: 'projects'
    }, () => {
        window.location.reload()
    }).subscribe()

    useEffect(() => {
        const getProjects = async () => {

            const supabase = createClientComponentClient()
            const { data: { session } } = await supabase.auth.getSession()
            const userEmail = session.user.email

            const {data, error} = await supabase.from('projects')
            .select()
            .contains('members', [userEmail])

            console.log(data)
            setProjects(data)
        }

        getProjects()

    }, [])

    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">

            {projects.map(project => <Project name={project.name} key={project.id} projectId={project.id} />)}

        </div>
    )
}
