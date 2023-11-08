import Image from 'next/image';

import { notable } from '@/utils/notableFont';
import Link from 'next/link';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
	const modalClass = isOpen ? 'modal-overlay.active' : 'modal-overlay';

	const handleLinkClick = () => {
		onClose();
	};

	return isOpen ? (
		<div className='bg-yellow-500 absolute top-0 z-10 w-full h-screen transition-all duration-500 ease '>
			<div className=' flex justify-between items-center px-32 py-28'>
				<div>
					<Image
						src='https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='man cooking'
						width={482}
						height={696}
					/>
				</div>
				<div>
					<ul
						className={`${notable.className} flex flex-col text-4xl gap-16 items-start`}>
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
			</div>
		</div>
	) : null;
};
