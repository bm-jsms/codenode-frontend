import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	className?: string;
}

export const Logo = ({ className = '' }: Props) => {
	return (
		<Link href='/' className={cn('flex items-center gap-1 group', className)}>
			<Image
				src='/logo.svg'
				alt='logo'
				width={40}
				height={40}
				className='object-cover size-12'
			/>
			<p className='text-2xl font-black font-jetBrains tracking-tighter group-hover:scale-105 transition-all duration-300'>
				Code<span className='text-slate-400'>Node</span>
			</p>
		</Link>
	);
};
