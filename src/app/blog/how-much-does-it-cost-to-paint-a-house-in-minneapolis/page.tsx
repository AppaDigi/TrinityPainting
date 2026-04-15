import { Metadata } from 'next';
import { CostBlogPostClient } from '../components/CostBlogPostClient';

export const metadata: Metadata = {
    title: "How Much Does It Cost to Paint a House in Minneapolis? (2025 Guide)",
    description: "Minneapolis house painting costs range $1,800-$6,000+ depending on size, prep needs & paint quality. Get local MN pricing breakdowns & what to look for when hiring a Minneapolis painter.",
    alternates: {
        canonical: "/blog/how-much-does-it-cost-to-paint-a-house-in-minneapolis",
    },
};

export default function MinneapolisCostPage() {
    return <CostBlogPostClient />;
}
