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
  // East Central MN (Home Base)
  {
    city: 'Mora',
    href: '/locations/mora-mn',
    description: 'Our founding location, providing premium painting services to East Central Minnesota.',
    neighborhoods: ['Kanabec County', 'Pine City', 'Cambridge']
  },
  {
    city: 'Pine City',
    href: '/locations/pine-city-mn',
    description: 'Interior painting, exterior painting, and popcorn ceiling removal in Pine City and Pine County.',
    neighborhoods: ['Pine County', 'Mora', 'North Branch']
  },
  // Isanti & Mille Lacs Counties
  {
    city: 'Cambridge',
    href: '/locations/cambridge-mn',
    description: 'Interior and exterior painting for Cambridge and the Isanti County area.',
    neighborhoods: ['Isanti County', 'North Branch', 'Princeton']
  },
  {
    city: 'Princeton',
    href: '/locations/princeton-mn',
    description: 'Full-service painting contractor serving Princeton and Mille Lacs County.',
    neighborhoods: ['Mille Lacs County', 'Zimmerman', 'Cambridge']
  },
  // Chisago & Washington Counties
  {
    city: 'North Branch',
    href: '/locations/north-branch-mn',
    description: 'Painting services along the I-35 corridor for North Branch and Chisago County.',
    neighborhoods: ['Chisago County', 'Chisago City', 'Cambridge']
  },
  {
    city: 'Chisago City',
    href: '/locations/chisago-city-mn',
    description: 'Lake home and year-round property painting throughout the Chisago Lakes area.',
    neighborhoods: ['Chisago County', 'Lindstrom', 'North Branch']
  },
  {
    city: 'Lindstrom',
    href: '/locations/lindstrom-mn',
    description: 'Exterior painting and deck staining for Lindstrom\'s Scandinavian lake-area community.',
    neighborhoods: ['Chisago County', 'Chisago City', 'North Branch']
  },
  {
    city: 'Forest Lake',
    href: '/locations/forest-lake-mn',
    description: 'Lake home exterior painting, interior painting, and deck staining near Forest Lake.',
    neighborhoods: ['Washington County', 'Lino Lakes', 'Hugo']
  },
  // Sherburne County
  {
    city: 'Zimmerman',
    href: '/locations/zimmerman-mn',
    description: 'Interior and exterior painting for Zimmerman, midway between the Twin Cities and St. Cloud.',
    neighborhoods: ['Sherburne County', 'Elk River', 'St. Francis']
  },
  {
    city: 'Big Lake',
    href: '/locations/big-lake-mn',
    description: 'Lake home painting and exterior services for Big Lake and the surrounding area.',
    neighborhoods: ['Sherburne County', 'Elk River', 'Zimmerman']
  },
  {
    city: 'Elk River',
    href: '/locations/elk-river-mn',
    description: 'Exterior painting, popcorn ceiling removal, and deck staining for Elk River\'s booming housing market.',
    neighborhoods: ['Sherburne County', 'Zimmerman', 'Big Lake']
  },
  // Anoka County
  {
    city: 'St. Francis',
    href: '/locations/st-francis-mn',
    description: 'Painting and popcorn ceiling removal for St. Francis along the Rum River corridor.',
    neighborhoods: ['Anoka County', 'Ramsey', 'Elk River']
  },
  {
    city: 'East Bethel',
    href: '/locations/east-bethel-mn',
    description: 'Interior and exterior painting for East Bethel\'s spacious rural community.',
    neighborhoods: ['Anoka County', 'Ham Lake', 'Blaine']
  },
  {
    city: 'Ham Lake',
    href: '/locations/ham-lake-mn',
    description: 'Expert painting for Ham Lake\'s larger-lot homes and semi-rural properties.',
    neighborhoods: ['Anoka County', 'Blaine', 'East Bethel']
  },
  {
    city: 'Lino Lakes',
    href: '/locations/lino-lakes-mn',
    description: 'Custom home painting and popcorn ceiling removal for Lino Lakes\' lake-dotted suburb.',
    neighborhoods: ['Anoka County', 'Blaine', 'Forest Lake']
  },
  {
    city: 'Andover',
    href: '/locations/andover-mn',
    description: 'Expert painting services for Andover\'s larger single-family homes and established neighborhoods.',
    neighborhoods: ['Anoka County', 'Ramsey', 'Coon Rapids']
  },
  {
    city: 'Ramsey',
    href: '/locations/ramsey-mn',
    description: 'Full-service painting and popcorn ceiling removal for Ramsey\'s riverfront community.',
    neighborhoods: ['Anoka County', 'Andover', 'St. Francis']
  },
  {
    city: 'Anoka',
    href: '/locations/anoka-mn',
    description: 'Painting services for Anoka\'s historic county seat, from Victorian-era homes to modern builds.',
    neighborhoods: ['Anoka County', 'Champlin', 'Coon Rapids']
  },
  {
    city: 'Coon Rapids',
    href: '/locations/coon-rapids-mn',
    description: 'Interior and exterior painting for one of Anoka County\'s largest and most established cities.',
    neighborhoods: ['Anoka County', 'Blaine', 'Andover']
  },
  {
    city: 'Champlin',
    href: '/locations/champlin-mn',
    description: 'Interior painting, exterior painting, and popcorn ceiling removal in Champlin.',
    neighborhoods: ['Hennepin County', 'Coon Rapids', 'Brooklyn Park']
  },
  {
    city: 'Blaine',
    href: '/locations/blaine-mn',
    description: 'Interior painting, exterior painting, and popcorn ceiling removal for one of the north metro\'s fastest-growing suburbs.',
    neighborhoods: ['Anoka County', 'Coon Rapids', 'Andover']
  },
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
