import Image from 'next/image'

import teamWork from '@/public/teamWork.jpg'

export default async function Home() {

	return(
		<main className='flex'>
			<div>
				<Image src={teamWork} alt='team' width={ 600 } />
			</div>
			<div className='px-5'>
				<h1 className='pb-5 text-6xl font-bold'>Welcome to parrot</h1>
				<p className='text-'>A Free Software to manage all your Software Projects !</p>
			</div>
		</main>
	)
}