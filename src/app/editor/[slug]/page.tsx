
import fs from 'node:fs/promises';
import path from 'node:path';
import EditorClient from '@/components/EditorClient';
import { ContentData } from '@/components/PageTemplate';

const pagesDir = path.join(process.cwd(), 'src/data/pages');

async function getContent(slug: string): Promise<ContentData> {
    const filePath = path.join(pagesDir, `${slug}.json`);
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Failed to read content file, using fallback', error);
        // Fallback if file doesn't exist
        return {
            badge: "Error Loading Content",
            title: "Error",
            description: "Could not load content.",
            heroImage: "",
            links: [],
            features: []
        };
    }
}

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function EditorPage({ params }: PageProps) {
    const { slug } = await params
    const content = await getContent(slug);
    return <EditorClient initialContent={content} slug={slug} />;
}
