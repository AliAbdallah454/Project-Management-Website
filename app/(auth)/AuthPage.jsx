'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import InputForm from '@/app/components/InputForm'
import AuthButton from '@/app/components/Buttons/AuthButton'

import parrotIcon from '../../public/icons/parrot.png'

export default function AuthPage({ title, buttonText, alternativeText, href, handleAction }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='w-screen h-screen bg-gray-200 flex justify-center items-center'>

            <div className='bg-white h-4/5 w-4/12 rounded-xl'>

                <div className='w-auto h-auto m-8'>
                    <div className='m-10'>
                        <Image src={ parrotIcon } width={ 50 } alt='hi'/>
                    </div>

                    <div className='mt-15 flex flex-col items-center'>
                        <h1 className='p-5 font-bold text-xl'>{ title }</h1>

                        <form action={() => handleAction(email, password)}>
                            <InputForm text="Email" type="text" onChange={(e) => setEmail(e.target.value)}/>
                            <InputForm text="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                            
                            <div className='my-4'></div>

                            <AuthButton type="submit" text={ buttonText } />
                        </form>

                        <div className="my-5">
                            <Link href={href}>
                                <p className='underline text-gray-500'>{ alternativeText }</p>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
