import '../globals.css'
import '@radix-ui/themes/styles.css';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Theme } from '@radix-ui/themes';

import Navbar from '../components/Navbar/Navbar'

export const metadata = {
	title: 'Dashboard',
	description: 'Generated by create next app',
	icons: {
		icon: '/favicon.ico?v=1'
	}
}

export default async function RootLayout({ children }) {

	const supabase = createServerComponentClient({ cookies })
	const { data : { session } } = await supabase.auth.getSession()

	if(!session){
	redirect("/login")
	}

	const user = session.user

	return (
		<html lang="en">
			<body className='mx-20'>
				<Theme>
					<Navbar user={user}/>
					{children}
				</Theme>
			</body>
		</html>
	)
}
