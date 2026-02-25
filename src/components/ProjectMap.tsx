"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { completedProjects, type CompletedProject } from "@/data/completed-projects";
import { MapPin } from "lucide-react";
import ReactDOMServer from "react-dom/server";

// Fix Leaflet's default icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom Icon leveraging Lucide React and Project Image
const createCustomIcon = (project: CompletedProject) => {
    const iconHtml = ReactDOMServer.renderToString(
        <div className="relative w-12 h-12 rounded-full border-4 border-white shadow-xl overflow-hidden cursor-pointer hover:scale-110 transition-transform group">
            <img
                src={project.afterImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay to ensure it looks like a Map Pin base */}
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 pointer-events-none" />
        </div>
    );

    return L.divIcon({
        html: iconHtml,
        className: "custom-leaflet-icon bg-transparent border-0",
        iconSize: [48, 48],
        iconAnchor: [24, 48],
        popupAnchor: [0, -48],
    });
};

interface ProjectMapProps {
    onProjectClick: (project: CompletedProject) => void;
}

function FitBounds() {
    const map = useMap();

    useEffect(() => {
        if (completedProjects.length === 0) return;

        const bounds = L.latLngBounds(completedProjects.map(p => p.coordinates));
        map.fitBounds(bounds, { padding: [50, 50], animate: true });
    }, [map]);

    return null;
}

export default function ProjectMap({ onProjectClick }: ProjectMapProps) {
    // Center roughly on East Central Minnesota as a fallback
    const centerPosition: [number, number] = [45.65, -93.1];

    return (
        <div className="w-full h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-border relative z-10 isolate">
            <MapContainer
                center={centerPosition}
                zoom={9}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
            >
                <FitBounds />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {completedProjects.map((project) => (
                    <Marker
                        key={project.id}
                        position={project.coordinates}
                        icon={createCustomIcon(project)}
                        eventHandlers={{
                            click: () => onProjectClick(project),
                        }}
                    >
                        <Popup className="project-popup">
                            <div className="p-1">
                                <h4 className="font-serif font-bold text-primary mb-1">{project.title}</h4>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{project.city}</p>
                                <button
                                    onClick={() => onProjectClick(project)}
                                    className="w-full py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors rounded-lg text-xs font-bold uppercase tracking-widest"
                                >
                                    View Details
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
