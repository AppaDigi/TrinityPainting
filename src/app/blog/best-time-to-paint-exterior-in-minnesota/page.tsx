import { Metadata } from 'next';
import { BestTimeBlogPostClient } from '../components/BestTimeBlogPostClient';

export const metadata: Metadata = {
    title: "Best Time to Paint Exterior in Minnesota | Trinity Painting",
    description: "Minnesota exterior painting season runs May-September. Learn why temperature, humidity & daylight hours matter for a lasting finish — from a local MN painting contractor.",
};

export default function BestTimePage() {
    return <BestTimeBlogPostClient />;
}
