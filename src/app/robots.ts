import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api', '/editor', '/thank-you'],
            },
            {
                userAgent: 'Bytespider',
                disallow: '/',
            },
        ],
        sitemap: 'https://www.trinitypaintingmn.com/sitemap.xml',
    };
}
