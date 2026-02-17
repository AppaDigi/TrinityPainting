'use client';

import React, { useState, useTransition } from 'react';
import PageTemplate, { ContentData } from './PageTemplate';
import { saveContent } from '@/app/actions';

export default function EditorClient({ initialContent, slug }: { initialContent: ContentData; slug: string }) {
    const [content, setContent] = useState<ContentData>(initialContent);
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState('');

    const handleSave = () => {
        setMessage('');
        startTransition(async () => {
            const result = await saveContent(slug, content);
            if (result.success) {
                setMessage('Saved successfully!');
                // Clear message after 3 seconds
                setTimeout(() => setMessage(''), 3000);
            } else {
                setMessage('Error saving content.');
            }
        });
    };

    const updateFeature = (index: number, field: 'title' | 'description', value: string) => {
        const newFeatures = [...content.features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        setContent({ ...content, features: newFeatures });
    }

    const inputClasses = "w-full rounded bg-zinc-900 border border-zinc-700 text-sm text-zinc-100 shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none placeholder:text-zinc-600";
    const labelClasses = "block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider";

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a]">
            {/* Sidebar */}
            <div className="w-1/3 min-w-[320px] max-w-md border-r border-zinc-800 bg-[#0a0a0a] flex flex-col">
                <header className="flex items-center justify-between border-b border-zinc-800 bg-[#0a0a0a] px-4 py-3 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-zinc-800 to-black rounded-xl flex items-center justify-center shrink-0 border border-zinc-700 p-1.5 shadow-lg shadow-orange-900/10">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                                <defs>
                                    <linearGradient id="silverGradientSm" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F4F4F5" />
                                        <stop offset="1" stopColor="#71717A" />
                                    </linearGradient>
                                    <linearGradient id="orangeGradientSm" x1="50" y1="100" x2="50" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EA580C" />
                                        <stop offset="0.5" stopColor="#F97316" />
                                        <stop offset="1" stopColor="#FFEDD5" />
                                    </linearGradient>
                                </defs>
                                {/* Left Mountain (Silver) */}
                                <path d="M15 85 L35 45 L55 85" fill="url(#silverGradientSm)" stroke="#18181b" strokeWidth="3" strokeLinejoin="round" />
                                {/* Right Mountain (Silver) */}
                                <path d="M45 85 L65 45 L85 85" fill="url(#silverGradientSm)" stroke="#18181b" strokeWidth="3" strokeLinejoin="round" />
                                {/* Center Mountain (Orange) */}
                                <path d="M30 85 L50 25 L70 85" fill="url(#orangeGradientSm)" stroke="#18181b" strokeWidth="3" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-white tracking-wide">Appalachia</h1>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Editor</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {message && <span className="text-xs text-green-500 animate-pulse">{message}</span>}
                        <button
                            onClick={handleSave}
                            disabled={isPending}
                            className="rounded bg-orange-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-orange-700 disabled:opacity-50 transition-colors shadow-lg shadow-orange-900/20"
                        >
                            {isPending ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
                    {/* Main Info */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-orange-500 border-b border-zinc-800 pb-2">Main Content</h2>

                        <div>
                            <label className={labelClasses}>Badge</label>
                            <input
                                type="text"
                                value={content.badge}
                                onChange={(e) => setContent({ ...content, badge: e.target.value })}
                                className={inputClasses}
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>Title</label>
                            <textarea
                                value={content.title}
                                onChange={(e) => setContent({ ...content, title: e.target.value })}
                                rows={2}
                                className={inputClasses}
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>Description</label>
                            <textarea
                                value={content.description}
                                onChange={(e) => setContent({ ...content, description: e.target.value })}
                                rows={3}
                                className={inputClasses}
                            />
                        </div>
                    </section>

                    {/* Hero Image */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-orange-500 border-b border-zinc-800 pb-2">Media</h2>
                        <div>
                            <label className={labelClasses}>Hero Image URL</label>
                            <input
                                type="text"
                                value={content.heroImage}
                                onChange={(e) => setContent({ ...content, heroImage: e.target.value })}
                                className={inputClasses}
                            />
                            <p className="mt-2 text-xs text-zinc-500">Paste a URL or choose a preset:</p>
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                {[
                                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
                                    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000",
                                    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
                                    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
                                ].map((url, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setContent({ ...content, heroImage: url })}
                                        className={`relative w-full aspect-square rounded-md overflow-hidden border-2 transition-all ${content.heroImage === url ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-zinc-700 hover:border-zinc-500'}`}
                                    >
                                        <img src={url} alt="preset" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Features */}
                    <section className="space-y-4">
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-500">Features</h2>
                        </div>

                        {content.features.map((feature, idx) => (
                            <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-3 hover:border-zinc-700 transition-colors">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-zinc-500">Feature {idx + 1}</span>
                                </div>
                                <div>
                                    <label className={labelClasses}>Title</label>
                                    <input
                                        type="text"
                                        value={feature.title}
                                        onChange={(e) => updateFeature(idx, 'title', e.target.value)}
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Description</label>
                                    <textarea
                                        value={feature.description}
                                        onChange={(e) => updateFeature(idx, 'description', e.target.value)}
                                        rows={2}
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* Preview */}
            <div className="flex-1 bg-zinc-950 overflow-y-auto relative h-full flex flex-col">
                <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex justify-between items-center shrink-0">
                    <span className="text-xs text-zinc-500 font-mono">LIVE PREVIEW</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                </div>
                {/* Scale wrapper to simulate desktop view if needed, but for now we just render it full width */}
                <div className="flex-1 overflow-auto bg-zinc-900/50 p-8">
                    <div className="min-h-full shadow-2xl rounded-xl overflow-hidden ring-1 ring-white/10">
                        <PageTemplate content={content} />
                    </div>
                </div>
            </div>
        </div>
    );
}
