import { FeaturedSection, HeroSection } from '@/components/home';
import { posts } from '@/data/post.data';

export default function Home() {
	return (
		<main className='min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-gray-9	00'>
			<HeroSection />

			<div className='container mx-auto px-4 pb-20 pt-8 sm:px-6 lg:pb-28 lg:pt-12'>
				<FeaturedSection items={posts} />
			</div>
		</main>
	);
}
