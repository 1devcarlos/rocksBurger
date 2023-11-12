import { notable } from '@/utils/notableFont';
import Link from 'next/link';

import { RiArrowDownDoubleLine } from 'react-icons/ri';

export const Hero = () => {
	return (
		<div className='relative flex flex-col w-full py-44 justify-between items-center h-screen bg-hero-bg bg-cover bg-center bg-no-repeat text-[#ffffff]'>
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
						className='animate-bounce text-[#ffffff]'
						size={45}
					/>
				</Link>
			</div>
		</div>
	);
};
