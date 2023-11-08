'use client';

import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Modal } from '../Modal';
import { notable } from '@/utils/notableFont';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className='fixed w-full flex items-center justify-center h-24 backdrop-blur-xl bg-gradient-to-b from-[#000000EB] to-[#1C1C1C2B]'>
			<div className='flex flex-col items-center'>
				<span
					className={`${notable.className}  text-[#f4c64e] text-3xl leading-[39px]`}>
					Rocks Burger
				</span>
				<span className='text-xl text-white font-light tracking-[9.3px]'>
					Rock Restaurant
				</span>
			</div>
			<button
				className='absolute right-6 z-40'
				onClick={toggleMenu}>
				<Hamburger
					color={menuOpen ? '#000000' : '#ffffff'}
					size={35}
					toggled={menuOpen}
				/>
			</button>
			<Modal
				isOpen={menuOpen}
				onClose={toggleMenu}
			/>
		</header>
	);
};
