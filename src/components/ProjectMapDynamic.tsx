"use client";

import dynamic from "next/dynamic";
import { type CompletedProject } from "@/data/completed-projects";
import { Loader2 } from "lucide-react";

const ProjectMap = dynamic(() => import("./ProjectMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] rounded-[2rem] bg-surface-50 border border-border flex flex-col items-center justify-center animate-pulse">
            <Loader2 className="h-10 w-10 text-primary/20 animate-spin mb-4" />
            <p className="text-primary/40 font-bold uppercase tracking-widest text-xs">Loading Interactive Map...</p>
        </div>
    ),
});

interface ProjectMapDynamicProps {
    onProjectClick: (project: CompletedProject) => void;
}

export default function ProjectMapDynamic({ onProjectClick }: ProjectMapDynamicProps) {
    return <ProjectMap onProjectClick={onProjectClick} />;
}
