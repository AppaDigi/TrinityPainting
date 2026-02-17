
'use server';

import fs from 'node:fs/promises';
import path from 'node:path';
import Link from 'next/link';
import Image from 'next/image';

const pagesDir = path.join(process.cwd(), 'src/data/pages');

async function getPages() {
    try {
        const files = await fs.readdir(pagesDir);
        return files
            .filter(file => file.endsWith('.json'))
            .map(file => ({
                slug: file.replace('.json', ''),
                name: file.replace('.json', '').replace(/^\w/, (c: string) => c.toUpperCase())
            }));
    } catch (error) {
        return [];
    }
}

export default async function EditorDashboard() {
    const pages = await getPages();

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-[5%] md:p-[2%] lg:p-[4%] 2xl:p-[6%]">
            <div className="flex w-full max-w-[1600px] aspect-video bg-[#13131a] text-zinc-100 font-sans overflow-hidden selection:bg-teal-500 selection:text-white rounded-[40px] shadow-2xl shadow-black ring-1 ring-white/5">
                {/* Sidebar Navigation */}
                <aside className="w-20 flex flex-col items-center py-8 bg-[#1a1a23] border-r border-white/5">
                    <div className="mb-10 relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10">
                        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                    </div>

                    <nav className="flex-1 flex flex-col gap-8 w-full items-center">
                        <button className="p-3 rounded-xl text-teal-400 bg-teal-400/10 transition-all hover:scale-110">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </button>
                        <button className="p-3 rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                        <button className="p-3 rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="p-3 rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </button>
                    </nav>

                    <button className="p-3 rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all mt-auto">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="w-[60%] mx-auto flex flex-col h-full">
                        <header className="flex justify-between items-center mb-10 shrink-0">
                            <div>
                                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Dashboard</h1>
                                <p className="text-zinc-500 text-sm mt-1">Welcome back, Editor</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-zinc-500 group-focus-within:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search pages..."
                                        className="pl-10 pr-4 py-2.5 bg-[#1a1a23] border border-transparent focus:border-white/10 rounded-full w-64 text-sm text-white placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:font-medium"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 p-[2px]">
                                        <div className="h-full w-full rounded-full bg-[#13131a] p-[2px]">
                                            <Image src="/logo.jpeg" alt="User" width={40} height={40} className="rounded-full object-cover h-full w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <span>Recent Pages</span>
                                <span className="px-2 py-0.5 rounded-md bg-[#252530] text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Editable</span>
                            </h3>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                {pages.map((page: { slug: string; name: string }) => (
                                    <Link
                                        key={page.slug}
                                        href={`/editor/${page.slug}`}
                                        className="group bg-[#1a1a23] hover:bg-[#20202b] p-6 rounded-3xl border border-white/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 flex flex-col"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-4 bg-[#eab308]/10 text-[#eab308] rounded-2xl group-hover:scale-110 transition-transform shadow-inner border border-[#eab308]/20">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                            </div>
                                            <div className="px-3 py-1 bg-[#252530] rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                                                Active
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{page.name}</h4>
                                            <p className="text-xs text-zinc-500 font-mono mb-6">/{page.slug === 'home' ? '' : page.slug}</p>

                                            <div className="w-full bg-[#252530] h-2 rounded-full overflow-hidden mb-3">
                                                <div className="bg-[#eab308] h-full rounded-full w-3/4 group-hover:w-full transition-all duration-500"></div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-zinc-500 font-medium">Last updated today</span>
                                                <span className="text-xs text-white font-medium flex items-center gap-1">
                                                    Edit Page <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}

                                <button className="group bg-[#1a1a23] hover:bg-[#20202b] p-6 rounded-3xl border border-dashed border-white/10 hover:border-teal-500/50 transition-all flex flex-col items-center justify-center text-center min-h-[280px] cursor-not-allowed opacity-60">
                                    <div className="h-16 w-16 rounded-full bg-[#252530] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-teal-400">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">Create New Page</h3>
                                    <p className="text-xs text-zinc-500 max-w-[200px]">Add a new landing page to your website.</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
