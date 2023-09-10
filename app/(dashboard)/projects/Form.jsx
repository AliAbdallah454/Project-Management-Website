'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Project from './Project'

export default function Form() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [severity, setSeverity] = useState('')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = async () => {

            const supabase = createClientComponentClient()
            const { data: { session } } = await supabase.auth.getSession()
            const userEmail = session.user.email

            const {data, error} = await supabase.from('projects').select().contains('members', [userEmail])
            console.log(data)
            setProjects(data)
        }

        getProjects()

    }, [])

  return (
    <div>
      
      {projects.map(project => <Project key={project.id} name={project.name} projectId={project.id} />)}

    </div>
  )
}
