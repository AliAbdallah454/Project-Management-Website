import React from 'react'

import AuthPage from '../AuthPage'

export default function Signup() {

    const signupAction = async (email, password) => {
		'use server'
		console.log('SIGNUP', email, password)
	}

    return (

        <AuthPage 
            title="Create Account"
            buttonText="Sign Up"
            handleAction={signupAction}
            href="/login"
            alternativeText="Already have an account ? Log In !"
        />

    )
}
