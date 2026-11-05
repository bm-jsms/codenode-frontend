import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(...inputs));
};

export const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
};

export interface BreadcrumbItem {
	label: string;
	href: string;
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
	const paths = pathname.split('/').filter((path) => path !== '');

	const breadcrumbs = paths.map((path, index) => {
		const href = `/${paths.slice(0, index + 1).join('/')}`;

		// Formatear el label: reemplazar guiones por espacios y capitalizar
		const label = path
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (char) => char.toUpperCase());

		return { label, href };
	});

	return [{ label: 'Inicio', href: '/' }, ...breadcrumbs];
}
