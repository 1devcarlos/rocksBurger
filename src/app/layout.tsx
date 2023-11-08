import type { Metadata } from 'next';
import { Inter, Notable } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const notable = Notable({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-notable',
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Rocks Burger',
	description: 'Sua fome de rock está aqui!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-black`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
