import AuthPage from '../AuthPage'
import { redirect } from 'next/navigation'

export default function Login() {

	const loginAction = async (email, password) => {
		'use server'
		console.log('LOGIN', email, password)
		redirect("/")
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
