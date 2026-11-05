'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import type { SubmitEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
	isInMobile?: boolean;
	className?: string;
	onSearch?: () => void;
}

export const SearchForm = ({
	isInMobile = false,
	className = '',
	onSearch,
}: Props) => {
	const router = useRouter();

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const query = formData.get('q') as string;

		if (query.trim()) {
			router.push(
				`/search?q=${encodeURIComponent(query.trim().toLowerCase())}`,
			);
		}

		onSearch?.();
	};

	return (
		<form
			onSubmit={handleSubmit}
			role='search'
			className={cn(
				`
          flex flex-1 items-center gap-3
          rounded-xl border border-slate-200
          bg-slate-50 px-4 py-2
          transition-all duration-200
          hover:border-slate-300
          focus-within:border-blue-500
          focus-within:bg-white
          focus-within:ring-2 focus-within:ring-blue-500/10
          dark:border-slate-800
          dark:bg-slate-900
          dark:hover:border-slate-700
          dark:focus-within:border-blue-500
          dark:focus-within:bg-slate-900
          dark:focus-within:ring-blue-500/20
        `,
				isInMobile ? 'flex md:hidden' : 'hidden md:flex',
				className,
			)}
		>
			<input
				type='search'
				name='q'
				placeholder='Search posts...'
				aria-label='Search posts'
				className='
          w-full bg-transparent py-1
          text-sm text-slate-900
          placeholder:text-slate-400
          outline-none
          dark:text-slate-100
          dark:placeholder:text-slate-500
        '
			/>

			<button
				type='submit'
				aria-label='Submit search'
				className='
          shrink-0 rounded-lg p-1.5
          text-slate-500
          transition-colors duration-200
          hover:bg-blue-50 hover:text-blue-600
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-blue-500
          dark:text-slate-400
          dark:hover:bg-blue-500/10
          dark:hover:text-blue-400
        '
			>
				<FaSearch size={15} />
			</button>
		</form>
	);
};
