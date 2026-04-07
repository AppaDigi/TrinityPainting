import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { ChevronRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | Trinity Painting & Renewal',
  description: 'Explore the communities we serve across Minnesota, including Minneapolis, St. Paul, and the East Central MN region.',
};

const locations = [
  {
    city: 'Minneapolis',
    href: '/locations/minneapolis-mn',
    description: 'Serving the heart of the Twin Cities with expert interior, exterior, and cabinet painting.',
    neighborhoods: ['Uptown', 'Northeast', 'South Minneapolis']
  },
  {
    city: 'Edina',
    href: '/locations/edina-mn',
    description: 'Premium painting services for Edina estates, focusing on high-end finishes and protection.',
    neighborhoods: ['Country Club', 'Morningside', 'Sunnyside']
  },
  {
    city: 'St. Louis Park',
    href: '/locations/st-louis-park-mn',
    description: 'Trusted local painters for the SLP community, covering bungalows to modern builds.',
    neighborhoods: ['Fern Hill', 'Bronx Park', 'Elmwood']
  },
  {
    city: 'Richfield',
    href: '/locations/richfield-mn',
    description: 'Modernizing Richfield homes with durable coatings and professional interior refreshes.',
    neighborhoods: ['Wood Lake', 'Penn Ave', 'Richfield Hub']
  },
  {
    city: 'Bloomington',
    href: '/locations/bloomington-mn',
    description: 'Comprehensive residential painting for Bloomington, the largest suburb in the metro.',
    neighborhoods: ['Normandale', 'Bush Lake', 'River Valley']
  },
  {
    city: 'Golden Valley',
    href: '/locations/golden-valley-mn',
    description: 'Aesthetic expertise for Golden Valley gems, enhancing modern and mid-century homes.',
    neighborhoods: ['GV Center', 'Sweeney Lake', 'GV Commons']
  },
  {
    city: 'Mora',
    href: '/locations/mora-mn',
    description: 'Our founding location, providing premium painting services to East Central Minnesota.',
    neighborhoods: ['Kanabec County', 'East Central MN', 'Ogilvie']
  }
];

export default function LocationsHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header theme="light" />
      
      <main className="flex-grow pt-40 pb-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
             <div className="flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-6 animate-fade-in">
                <span>Coverage</span>
                <div className="h-[1px] w-8 bg-gold/30" />
             </div>
             <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6 leading-[1.1]">
               Our <span className="text-gold italic font-light underline decoration-gold/20 underline-offset-8">Service</span> Areas.
             </h1>
             <p className="text-xl text-muted-foreground font-light leading-relaxed">
               Trinity Painting & Renewal is proud to provide God-honoring craftsmanship to homeowners and businesses throughout the Twin Cities and East Central Minnesota.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <Link 
                key={loc.city} 
                href={loc.href}
                className="group relative bg-white border border-border p-10 rounded-[2rem] hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                     <MapPin className="h-6 w-6" />
                   </div>
                   <h2 className="text-2xl font-serif font-black text-primary uppercase italic group-hover:text-gold transition-colors">
                     {loc.city}
                   </h2>
                </div>
                
                <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                  {loc.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {loc.neighborhoods.map(n => (
                    <span key={n} className="text-[9px] font-bold uppercase tracking-widest text-primary/40 px-3 py-1 bg-surface-50 rounded-full border border-primary/5">
                      {n}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold">
                  Explore {loc.city} Coverage
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
