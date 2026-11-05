import { GiSparkles } from 'react-icons/gi';
import { ArrowRight, Mail, Code2 } from 'lucide-react';

export const HeroSection = () => {
	return (
		<section className='relative isolate flex min-h-[88dvh] items-center justify-center overflow-hidden bg-slate-100 pt-24 text-slate-900 dark:bg-slate-950 dark:text-white'>
			{/* Background Effects */}
			<div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
				<div className='absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/15' />

				<div className='absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px] dark:bg-cyan-500/10' />

				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:32px_32px]' />

				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950' />
			</div>

			<div className='container relative z-10 mx-auto px-5 py-16 sm:px-6'>
				<div className='mx-auto max-w-4xl text-center'>
					{/* Badge */}
					<div className='mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 shadow-sm backdrop-blur-md dark:border-blue-500/20 dark:bg-blue-500/10'>
						<GiSparkles className='size-4 text-blue-600 dark:text-blue-400' />

						<span className='text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-300 sm:text-sm'>
							New tutorials published every week
						</span>

						<span className='ml-1 size-1.5 animate-pulse rounded-full bg-emerald-500' />
					</div>

					{/* Heading */}
					<h1 className='text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
						Build better software.
						<span className='mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400'>
							Learn faster.
						</span>
					</h1>

					{/* Description */}
					<p className='mx-auto mb-10 mt-7 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl'>
						Master modern software development with practical tutorials,
						industry best practices, and real-world projects.
						<span className='font-medium text-slate-800 dark:text-slate-200'>
							{' '}
							Take your coding skills to the next level.
						</span>
					</p>

					{/* Newsletter Form */}
					<div className='mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-xl shadow-blue-950/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/20'>
						<form className='flex flex-col gap-2 sm:flex-row'>
							<div className='flex h-12 flex-1 items-center gap-3 px-3'>
								<Mail className='size-5 shrink-0 text-slate-400' />

								<input
									type='email'
									placeholder='Enter your email address'
									aria-label='Email address'
									className='h-full w-full min-w-0 border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0 dark:text-white'
								/>
							</div>

							<button
								type='submit'
								className='group flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-600/30 active:translate-y-0'
							>
								Subscribe
								<ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
							</button>
						</form>
					</div>

					{/* Social Proof */}
					<div className='mt-7 flex flex-col items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row'>
						<div className='flex items-center gap-2'>
							<Code2 className='size-4 text-blue-500' />

							<span>
								Join{' '}
								<strong className='font-bold text-slate-800 dark:text-white'>
									18,000+
								</strong>{' '}
								developers
							</span>
						</div>

						<span className='hidden text-slate-300 dark:text-slate-700 sm:inline'>
							•
						</span>

						<span>Practical knowledge, delivered weekly.</span>
					</div>
				</div>
			</div>
		</section>
	);
};
