import Image from 'next/image';

import { notable } from '@/utils/notableFont';
import Link from 'next/link';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
	const handleLinkClick = () => {
		onClose();
	};

	return isOpen ? (
		<div className='bg-yellow-500 absolute top-0 z-10 w-full h-screen transition-all duration-500 ease '>
			<div className=' flex justify-between items-center px-36 py-28 md:py-12'>
				<div>
					<Image
						src='https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='man cooking'
						width={482}
						height={696}
					/>
				</div>
				<ul
					className={`${notable.className} flex flex-col text-4xl md:text-2xl gap-16 md:gap-8 md:pb-24 items-start`}>
					<Link
						href='/'
						passHref>
						<li
							className='group transition duration-300'
							onClick={handleLinkClick}>
							Início
							<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-black'></span>
						</li>
					</Link>
					<Link
						href='/cardapio'
						passHref>
						<li
							className='group transition duration-300'
							onClick={handleLinkClick}>
							Cardápio
							<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-black'></span>
						</li>
					</Link>
					<Link
						href='/reservation'
						passHref>
						<li
							className='group transition duration-300'
							onClick={handleLinkClick}>
							Reserva
							<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-black'></span>
						</li>
					</Link>
					<Link
						href='/kitchen'
						passHref>
						<li
							className='group transition duration-300'
							onClick={handleLinkClick}>
							Cozinha
							<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-black'></span>
						</li>
					</Link>
					<Link
						href='/contact'
						passHref>
						<li
							className='group transition duration-300'
							onClick={handleLinkClick}>
							Contato
							<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-black'></span>
						</li>
					</Link>
				</ul>
			</div>
			<div className='flex flex-col items-end gap-6 tracking-[3.3px] text-xl md:text-sm absolute bottom-16 right-40'>
				<p>Rua Robert Kennedy, 30</p>
				<p>União dos Palmares, Cohab Velha</p>
				<p>Aberto de Terça à Domingo</p>
				<p>Horário 18h à 23h</p>
			</div>
		</div>
	) : null;
};
