'use client'

import { Select } from '@radix-ui/themes'

export default function SeveritySelect({ setSeverity }) {

    return (

        <Select.Root onValueChange={ (value) => setSeverity(value) }>
            <Select.Trigger placeholder="Select a Level…" />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Levels</Select.Label>
                    <Select.Item value="Low">Low</Select.Item>
                    <Select.Item value="Medium">Medium</Select.Item>
                    <Select.Item value="High">High</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>

    )
}
