'use client';

import { useState } from 'react';

const DEFAULT_IMAGE_URL =
	'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface ImageProps {
	name: string;
	url: string;
}

export const Favorites = () => {
	const [hoveredImage, setHoveredImage] = useState<ImageProps | null>(null);

	const images: ImageProps[] = [
		{
			name: 'Godzilla',
			url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Monster',
			url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Pizza',
			url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Metallica',
			url: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: "Guns n' Roses",
			url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];

	const handleMouseEnter = (image: ImageProps) => {
		setHoveredImage(image);
	};

	const handleMouseLeave = () => {
		setHoveredImage(null);
	};

	return (
		<section
			id='destaques'
			className='flex justify-center items-center w-full h-screen text-gray-100'>
			<ul className='w-full h-screen flex flex-col justify-center items-end pr-16 gap-14 text-6xl text-[#D6D6D6]'>
				{images.map((image, index) => (
					<li
						key={index}
						className='group transition duration-300 tracking-[8.25px]'
						onMouseEnter={() => handleMouseEnter(image)}
						onMouseLeave={handleMouseLeave}>
						{image.name}
						<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-[#d6d6d6]'></span>
					</li>
				))}
			</ul>

			<div
				className='w-full h-screen bg-cover bg-no-repeat bg-gray-500/50 opacity-50'
				style={{
					backgroundImage: `url(${hoveredImage?.url || DEFAULT_IMAGE_URL})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
		</section>
	);
};
