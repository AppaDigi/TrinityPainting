import { Metadata } from 'next';
import { BlogListingClient } from './components/BlogListingClient';

export const metadata: Metadata = {
    title: "Blog & Resources | Trinity Painting & Renewal",
    description: "Expert advice, pricing guides, and painting tips for Minneapolis and Twin Cities homeowners. Learn about interior and exterior painting, cabinet refinishing, and more.",
};

export default function BlogListing() {
    return <BlogListingClient />;
}
