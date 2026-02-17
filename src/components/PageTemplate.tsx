
import React from 'react';

type LinkData = {
  text: string;
  url: string;
  primary: boolean;
};

type FeatureData = {
  title: string;
  description: string;
};

export type ContentData = {
  badge: string;
  title: string;
  description: string;
  heroImage: string;
  links: LinkData[];
  features: FeatureData[];
};

export default function PageTemplate({ content }: { content: ContentData }) {
  if (!content) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-14 md:px-12">
        <section className="space-y-4">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600">
            {content.badge}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {content.title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            {content.description}
          </p>
          
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-slate-200">
             <img 
               src={content.heroImage} 
               alt="Hero Image" 
               className="h-full w-full object-cover"
             />
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {content.links && content.links.map((link, idx) => (
              <a
                key={idx}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  link.primary 
                    ? "bg-slate-900 text-white hover:bg-slate-700" 
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {content.features && content.features.map((feature, idx) => (
            <article key={idx} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">{feature.title}</h2>
              <p className="mt-2 text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Quick Start</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-700">
            <li>1. Run <code>npm install</code>.</li>
            <li>2. Run <code>npm run dev</code> and start building under <code>src/app</code>.</li>
            <li>3. Before shipping, run <code>npm run check</code>.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
