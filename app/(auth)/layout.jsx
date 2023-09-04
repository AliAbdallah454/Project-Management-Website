import React from 'react'

import parrot from '@/public/icons/parrot.png'

export const metadata = {
    
    title: "Parrot",
    description: "A Free software for project Management",

}

export default function AuthLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  )
}
