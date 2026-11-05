import type { Post } from '@/interfaces';
import { CardPost, TitleSection } from '../ui';

interface Props {
	items: Post[];
}

export const FeaturedSection = ({ items }: Props) => {
	const featuredPosts = items.slice(0, 3);

	if (!featuredPosts.length) return null;

	return (
		<section className='relative isolate overflow-hidden rounded-3xl border-slate-200 bg-slate-50 px-5 py-10 dark:border-slate-800/80 dark:bg-gray-900/40 sm:px-8 sm:py-12 lg:px-10 lg:py-14'>
			<div className='relative z-10 space-y-8'>
				<div className='flex flex-col gap-3'>
					<TitleSection
						title='Featured Articles'
						className='text-2xl sm:text-3xl lg:text-4xl'
					/>

					<p className='max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base'>
						Explore our latest tutorials, insights, and practical guides to
						improve your development skills.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
					{featuredPosts.map((item) => (
						<CardPost key={item.id} post={item} />
					))}
				</div>
			</div>
		</section>
	);
};
