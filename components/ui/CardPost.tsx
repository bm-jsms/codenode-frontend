import type { Post } from '@/interfaces';
import { formatDate } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight, LuClock3 } from 'react-icons/lu';

interface Props {
	post: Post;
}

export const CardPost = ({ post }: Props) => {
	return (
		<Link href={`/posts/${post.slug}`} className='group flex h-full flex-col'>
			<div className='relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900'>
				<Image
					src='/logo.svg' // TODO: Replace with post cover image
					alt={post.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
				/>

				<div className='absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100' />

				<span
					className='absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-lg backdrop-blur-md sm:text-xs'
					style={{
						backgroundColor: post.category.color || '#2563eb',
					}}
				>
					{post.category.name}
				</span>

				<div className='absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
					<LuArrowUpRight size={18} />
				</div>
			</div>

			<div className='flex flex-1 flex-col pt-4'>
				<div className='mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm'>
					<span>{formatDate(post.publishedAt)}</span>

					<span className='size-1 rounded-full bg-slate-300 dark:bg-slate-700' />

					<span className='inline-flex items-center gap-1.5'>
						<LuClock3 size={13} />
						{post.read_time} minutes of reading
					</span>
				</div>

				<h3 className='mb-2 line-clamp-2 text-lg font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl'>
					{post.title}
				</h3>

				<p className='line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base'>
					{post.excerpt}
				</p>
			</div>
		</Link>
	);
};
