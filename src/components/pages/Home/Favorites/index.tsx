import Image from 'next/image';

export const Favorites = () => {
	return (
		<section
			id='destaques'
			className='flex justify-center items-center w-full h-screen text-gray-100'>
			<ul className='w-full h-screen flex flex-col justify-center items-end pr-16 gap-14 text-6xl text-[#D6D6D6]'>
				<li className='group transition duration-300 tracking-[8.25px]'>
					Godzilla
					<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-[#d6d6d6]'></span>
				</li>
				<li className='group transition duration-300 tracking-[8.25px]'>
					Monster
					<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-[#d6d6d6]'></span>
				</li>
				<li className='group transition duration-300 tracking-[8.25px]'>
					Pizza
					<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-[#d6d6d6]'></span>
				</li>
				<li className='group transition duration-300 tracking-[8.25px]'>
					Metallica
					<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-[#d6d6d6]'></span>
				</li>
				<li className='group transition duration-300 tracking-[8.25px]'>
					Guns n` Roses
					<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-[#d6d6d6]'></span>
				</li>
			</ul>

			<div className='w-full h-screen bg-[url("https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-no-repeat bg-gray-500/50 opacity-50' />
		</section>
	);
};
