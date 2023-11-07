import { Logo } from './Logo';

export const Header = () => {
	return (
		<header className='container flex items-center justify-between bg-zinc-800 text-gray-100'>
			<div className='flex flex-col gap-2'>
				<button>Login</button>
				<button>Cadastro</button>
			</div>
			<Logo />
			<button> - - - </button> {/* Navbar que será aberta com algum efeito */}
		</header>
	);
};
