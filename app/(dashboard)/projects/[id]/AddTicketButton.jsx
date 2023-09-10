'use client'

import { useState } from 'react'
import { Dialog, Button, Flex, Text, TextField } from '@radix-ui/themes'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import SeveritySelect from './SeveritySelect'

export default function AddTicketButton({ projectId }) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [severity, setSeverity] = useState('')

    const handleClick = async () => {

        const supabase = createClientComponentClient()
        const { data: { session } } = await supabase.auth.getSession()
        const authorEmail = session.user.email

        const { error } = await supabase.from('tickets').insert({
            projectId: projectId,
            authorEmail: authorEmail,
            title: title,
            body: body,
            severity: severity 
        })

        console.log(error)

    }

    return (

        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Add Ticket</Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Create New Project</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Enter your new project name
                </Dialog.Description>
                <Flex direction="column" gap="3">

                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Title
                        </Text>
                        <TextField.Input
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Body
                        </Text>
                        <TextField.Input
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </label>

                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Severity
                        </Text>
                        <SeveritySelect setSeverity={setSeverity} />
                    </label>

                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleClick} type='submit'>Save</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
