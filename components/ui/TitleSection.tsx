import { cn } from '@/lib/utils';

interface Props {
	title: string;
	className?: string;
}

export const TitleSection = ({ title, className }: Props) => {
	return (
		<div className='flex items-center gap-3'>
			<div className='h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400' />

			<h2
				className={cn(
					'text-2xl font-bold tracking-tight text-slate-900',
					'dark:text-white sm:text-3xl',
					className,
				)}
			>
				{title}
			</h2>
		</div>
	);
};
