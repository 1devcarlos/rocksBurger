'use client';

import { notable } from '@/utils/notableFont';
import Link from 'next/link';

import { RiArrowDownDoubleLine } from 'react-icons/ri';

export const Hero = () => {
	return (
		<div className='flex flex-col w-full py-44 justify-between items-center h-screen bg-hero-bg text-[#D6D6D6]'>
			<span
				className={`${notable.className}  capitalize text-9xl text-[#F6DE00] mix-blend-color-dodge`}>
				rocks ® burger
			</span>

			<div className='flex flex-col justify-center items-center'>
				<span className='text-4xl'>Seduzindo paladares desde 2019</span>
				<Link
					href='#destaques'
					className='pt-16'>
					<RiArrowDownDoubleLine
						className='animate-bounce text-[#D6D6D6]'
						size={45}
					/>
				</Link>
			</div>
		</div>
	);
};
