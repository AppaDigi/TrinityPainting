import { MetadataRoute } from 'next';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.trinitypaintingmn.com';
    const lastModified = new Date();

    const coreRoutes = [
        '',
        '/about',
        '/blog',
        '/locations',
        '/portfolio',
        '/privacy',
        '/services',
        '/terms',
    ];

    const blogRoutes = [
        '/blog/best-time-to-paint-exterior-in-minnesota',
        '/blog/how-much-does-it-cost-to-paint-a-house-in-minneapolis',
    ];

    const locationRoutes = [
        '/locations/bloomington-cabinet-painting',
        '/locations/bloomington-exterior-painting',
        '/locations/bloomington-interior-painting',
        '/locations/bloomington-mn',
        '/locations/edina-cabinet-painting',
        '/locations/edina-exterior-painting',
        '/locations/edina-interior-painting',
        '/locations/edina-mn',
        '/locations/golden-valley-cabinet-painting',
        '/locations/golden-valley-exterior-painting',
        '/locations/golden-valley-interior-painting',
        '/locations/golden-valley-mn',
        '/locations/minneapolis-cabinet-painting',
        '/locations/minneapolis-exterior-painting',
        '/locations/minneapolis-interior-painting',
        '/locations/minneapolis-mn',
        '/locations/mora-cabinet-painting',
        '/locations/mora-exterior-painting',
        '/locations/mora-interior-painting',
        '/locations/mora-mn',
        '/locations/richfield-cabinet-painting',
        '/locations/richfield-exterior-painting',
        '/locations/richfield-interior-painting',
        '/locations/richfield-mn',
        '/locations/st-louis-park-cabinet-painting',
        '/locations/st-louis-park-exterior-painting',
        '/locations/st-louis-park-interior-painting',
        '/locations/st-louis-park-mn',
    ];

    const corePages = coreRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
        priority:
            route === ''
                ? 1.0
                : route === '/services' || route === '/locations' || route === '/blog'
                  ? 0.9
                  : 0.8,
    }));

    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const blogPages = blogRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const locationPages = locationRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...corePages, ...servicePages, ...blogPages, ...locationPages];
}
