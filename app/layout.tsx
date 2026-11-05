import type { Metadata } from 'next';
import { JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});
const jetBrains = JetBrains_Mono({
	variable: '--font-jetbrains',
	subsets: ['latin'],
	weight: ['700', '800'],
});

export const metadata: Metadata = {
	title: 'CodeNode App',
	description: 'Best place to known programming',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			className={`${poppins.variable} ${jetBrains.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className='min-h-full flex flex-col'>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
