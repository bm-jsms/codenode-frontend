import { Footer, Header } from '@/components/shared';
import { ThemeProvider } from '@/components/ThemeProvider';
import React from 'react';

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	);
}

export default RootLayout;
