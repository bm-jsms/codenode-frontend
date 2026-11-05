'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { SearchForm } from './SearchForm';
import { Logo } from './Logo';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

import { cn } from '@/lib/utils';
import ThemeToggle from '../ToggleTheme';
import {
	LuChevronRight,
	LuFileText,
	LuFolderOpen,
	LuHouse,
	LuSettings2,
} from 'react-icons/lu';

const navigation = [
	{
		label: 'Home',
		href: '/',
		icon: LuHouse,
	},
	{
		label: 'All Posts',
		href: '/posts',
		icon: LuFileText,
	},
	{
		label: 'Categories',
		href: '/categories',
		icon: LuFolderOpen,
	},
];

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const toggleSearch = () => setIsSearchOpen((prev) => !prev);

	const closeMenu = () => setIsMenuOpen(false);
	const closeSearch = () => setIsSearchOpen(false);

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/';

		return pathname === href || pathname.startsWith(`${href}/`);
	};

	const navLinkStyles =
		'relative py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400';

	const mobileLinkStyles =
		'group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200';

	return (
		<>
			<header className='sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 text-slate-700 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-200'>
				<div className='container mx-auto flex items-center justify-between gap-6 px-4 py-4'>
					<Logo />

					<nav className='hidden md:flex'>
						<ul className='flex items-center gap-8'>
							{navigation.map(({ label, href }) => (
								<li key={href}>
									<Link
										href={href}
										className={cn(
											navLinkStyles,
											isActive(href)
												? 'text-blue-600 dark:text-blue-400'
												: 'text-slate-600 dark:text-slate-300',
										)}
									>
										{label}

										{isActive(href) && (
											<span className='absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600 dark:bg-blue-400' />
										)}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className='hidden items-center gap-5 md:flex'>
						<SearchForm />

						<div className='h-6 w-px bg-slate-200 dark:bg-slate-800' />

						<ThemeToggle />
					</div>

					<div className='flex items-center gap-3 md:hidden'>
						<button
							aria-label='Open search'
							aria-expanded={isSearchOpen}
							onClick={toggleSearch}
							className='rounded-lg p-2.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400'
						>
							<FaSearch size={18} />
						</button>

						<button
							aria-label='Open menu'
							aria-expanded={isMenuOpen}
							aria-controls='mobile-navigation'
							onClick={toggleMenu}
							className='rounded-lg p-2.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400'
						>
							<FaBarsStaggered size={20} />
						</button>
					</div>
				</div>
			</header>

			{isSearchOpen && (
				<div
					className='fixed inset-0 z-50 flex items-start justify-center bg-slate-950/50 px-4 pt-24 backdrop-blur-sm md:hidden'
					onClick={closeSearch}
				>
					<div
						className='w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='mb-5 flex items-center justify-between'>
							<h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
								Search Posts
							</h3>

							<button
								aria-label='Close search'
								onClick={closeSearch}
								className='rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
							>
								<FaXmark size={20} />
							</button>
						</div>

						<SearchForm isInMobile onSearch={closeSearch} />
					</div>
				</div>
			)}

			{isMenuOpen && (
				<div
					className='fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm md:hidden'
					onClick={closeMenu}
					aria-hidden='true'
				/>
			)}

			<aside
				id='mobile-navigation'
				aria-label='Mobile navigation'
				aria-hidden={!isMenuOpen}
				inert={!isMenuOpen}
				className={cn(
					'fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col border-l border-slate-200 bg-white shadow-2xl transition-[transform,visibility] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 md:hidden',
					isMenuOpen ? 'visible translate-x-0' : 'invisible translate-x-full',
				)}
			>
				<div className='flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800'>
					<span className='text-sm font-semibold tracking-wide text-slate-900 dark:text-white'>
						Navigation
					</span>

					<button
						onClick={closeMenu}
						className='rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
						aria-label='Close menu'
					>
						<FaTimes size={20} />
					</button>
				</div>

				<div className='flex flex-1 flex-col overflow-y-auto px-4 py-6'>
					<div className='mb-8'>
						<span className='mb-4 block px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500'>
							Navigation
						</span>

						<nav>
							<ul className='flex flex-col gap-1.5'>
								{navigation.map(({ label, href, icon: Icon }) => {
									const active = isActive(href);

									return (
										<li key={href}>
											<Link
												href={href}
												onClick={closeMenu}
												aria-current={active ? 'page' : undefined}
												className={cn(
													mobileLinkStyles,
													active
														? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400'
														: 'text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400',
												)}
											>
												<span className='flex items-center gap-3'>
													<Icon
														size={18}
														className={cn(
															'transition-colors',
															active
																? 'text-blue-600 dark:text-blue-400'
																: 'text-slate-400 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400',
														)}
													/>

													{label}
												</span>

												<LuChevronRight
													size={16}
													className={cn(
														'transition-all duration-200',
														active
															? 'translate-x-0 text-blue-500 opacity-100 dark:text-blue-400'
															: 'translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:text-slate-600',
													)}
												/>
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>

					<div className='mt-auto border-t border-slate-200 pt-6 dark:border-slate-800'>
						<span className='mb-4 block px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500'>
							Preferences
						</span>

						<div className='flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 transition-colors dark:border-slate-800 dark:bg-slate-900'>
							<div className='flex items-center gap-3'>
								<LuSettings2
									size={18}
									className='text-slate-400 dark:text-slate-500'
								/>

								<span className='text-sm font-medium text-slate-700 dark:text-slate-300'>
									Appearance
								</span>
							</div>

							<ThemeToggle />
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};
