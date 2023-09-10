'use client'
import React, { useState } from 'react'

import { Dialog, Button, Flex, Text, TextField } from '@radix-ui/themes'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function CreateNewProjectButton({ handleAction }) {

    const [name, setName] = useState('')
    const router = useRouter()

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const addProject = async () => {

        const supabase = createClientComponentClient()
        const { data : { session } } = await supabase.auth.getSession()
        const ownerEmail = session.user.email
        const { error } = await supabase.from("projects").insert({
            name,
            ownerEmail,
            members: [ownerEmail],
            admins: [ownerEmail]
        })

        console.log(error)
        router.refresh()

    }

    return(

        <form action={handleAction}>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button>Add Project</Button>
                </Dialog.Trigger>
                <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Create New Project</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Enter your new project name
                    </Dialog.Description>
                    <Flex direction="column" gap="3">
                        <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Project Name
                        </Text>
                        <TextField.Input
                            onChange={handleChange}
                            defaultValue="Ecommerce Website"
                            placeholder="Enter Project Name"
                        />
                        </label>
                    </Flex>
                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            {/* <button className='bg-black text-white' type='submit'>save</button> */}
                            <Button onClick={addProject} type='submit'>Save</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </form>

    )
}
