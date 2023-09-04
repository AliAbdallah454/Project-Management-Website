import React from 'react'

export default function AuthButton({ text, type }) {
  return (
    <button type={type} className='w-80 text-white bg-black text-center h-10 hover:text-black hover:bg-white hover:border-2 hover:border-black transition-all ease-in'>
        <p className='text-xl font-bold '>{text}</p>
    </button>
  )
}
