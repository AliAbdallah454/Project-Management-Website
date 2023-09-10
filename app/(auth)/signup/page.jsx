'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import AuthPage from '../AuthPage'
import { useRouter } from 'next/navigation'

export default function Signup() {

    const router = useRouter()

    const signupAction = async (e, email, password) => {

        e.preventDefault()

        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })

        if(error){
            console.log("Signup Error")
        }
        else{
            router.push("/verification")
        }

	}

    return (

        <AuthPage 
            title="Create Account"
            buttonText="Sign Up"
            handleAction={ signupAction }
            href="/login"
            alternativeText="Already have an account ? Log In !"
        />

    )
}
