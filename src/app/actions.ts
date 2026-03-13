'use server';

import fs from 'node:fs/promises';
import path from 'node:path';
import { revalidatePath } from 'next/cache';
import { ContentData } from '@/components/PageTemplate';

const pagesDir = path.join(process.cwd(), 'src/data/pages');

export async function saveContent(slug: string, content: ContentData) {
    try {
        const filePath = path.join(pagesDir, `${slug}.json`);
        await fs.writeFile(filePath, JSON.stringify(content, null, 2), 'utf-8');
        revalidatePath('/');
        revalidatePath(`/editor/${slug}`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save content:', error);
        return { success: false, error: 'Failed to save content' };
    }
}

export async function getPages() {
    try {
        const files = await fs.readdir(pagesDir);
        return files
            .filter(file => file.endsWith('.json'))
            .map(file => file.replace('.json', ''));
    } catch (error) {
        return [];
    }
}
