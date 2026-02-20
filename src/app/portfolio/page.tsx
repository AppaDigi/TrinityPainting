"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ProjectModal } from "@/components/ui/project-modal";
import ProjectMapDynamic from "@/components/ProjectMapDynamic";
import { completedProjects, type CompletedProject } from "@/data/completed-projects";
import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { QuoteModal } from "@/components/ui/quote-modal";

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<CompletedProject | null>(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
            <div className="noise-overlay" />

            <main className="flex-grow pt-32 pb-24 relative z-10">
                <div className="container-wide">
                    <div className="max-w-3xl mb-16">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">Our Portfolio</span>
                        <h1 className="text-primary mb-6">Completed Projects</h1>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            Explore our portfolio of transformed spaces. Use the interactive map to view projects in your area, or browse the complete list below to see our dramatic before & after transformations.
                        </p>
                    </div>

                    {/* Interactive Map */}
                    <div className="mb-24">
                        <ProjectMapDynamic onProjectClick={setSelectedProject} />
                    </div>

                    {/* Project List */}
                    <div>
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-12 block border-b border-border pb-4">All Projects</span>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {completedProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group cursor-pointer bg-surface-50 rounded-[2.5rem] overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="relative aspect-video overflow-hidden border-b border-border/50">
                                        <Image
                                            src={project.afterImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Hover reveal button */}
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <span className="text-white text-xs font-bold uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                                                View Details
                                            </span>
                                            <div className="h-10 w-10 rounded-full bg-gold text-white flex items-center justify-center shadow-xl">
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-gold mb-4 font-bold text-[10px] uppercase tracking-[0.2em]">
                                            <span className="flex items-center gap-1.5 bg-gold/10 px-2 py-1.5 rounded-md">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {project.city}
                                            </span>
                                            <span className="text-border">•</span>
                                            <span className="text-primary/60">{project.serviceType}</span>
                                        </div>
                                        <h3 className="text-xl font-serif text-primary mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}
