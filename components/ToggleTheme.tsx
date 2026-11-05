'use client';

import { useTheme } from 'next-themes';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			aria-label='Toggle Dark Mode'
			type='button'
			className='flex items-center justify-center p-2 rounded-lg transition-colors bg-gray-800 dark:bg-gray-700 cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-600'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<HiOutlineSun className='h-5 w-5 text-slate-200' />
			) : (
				<HiOutlineMoon className='h-5 w-5 text-slate-200' />
			)}
		</button>
	);
};

export default ThemeToggle;
