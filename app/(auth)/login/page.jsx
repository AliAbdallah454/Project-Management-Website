'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import AuthPage from '../AuthPage'

export default function Login() {

    const router = useRouter()

	const loginAction = async (e, email, password) => {

        e.preventDefault()

        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if(error){
            console.log("ERRRR")
        }
        else{
            router.push("/")
        }

	}

	return (

        <AuthPage 
            title="Log In"
            buttonText="Log In"
            handleAction={loginAction}
            href="/signup"
            alternativeText="Dont have an account ? Create One !"
        />
	)
}
