import Image from 'next/image';

export const Logo = () => {
	return (
		<div className='flex flex-col items-center'>
			<Image
				src='/logo.png'
				alt='logo'
				width={100}
				height={0}
				className='rounded-full'
			/>
			<span className='font-medium text-xl'>RocksBurger</span>
		</div>
	);
};
