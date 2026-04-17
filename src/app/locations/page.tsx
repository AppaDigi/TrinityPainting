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
  // Twin Cities South Metro
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
  // Anoka County
  {
    city: 'Blaine',
    href: '/locations/blaine-mn',
    description: 'Interior painting, exterior painting, and popcorn ceiling removal for one of the north metro\'s fastest-growing suburbs.',
    neighborhoods: ['Anoka County', 'Coon Rapids', 'Andover']
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
    city: 'Coon Rapids',
    href: '/locations/coon-rapids-mn',
    description: 'Interior and exterior painting for one of Anoka County\'s largest and most established cities.',
    neighborhoods: ['Anoka County', 'Blaine', 'Andover']
  },
  {
    city: 'Anoka',
    href: '/locations/anoka-mn',
    description: 'Painting services for Anoka\'s historic county seat, from Victorian-era homes to modern builds.',
    neighborhoods: ['Anoka County', 'Champlin', 'Coon Rapids']
  },
  {
    city: 'Champlin',
    href: '/locations/champlin-mn',
    description: 'Interior painting, exterior painting, and popcorn ceiling removal in Champlin.',
    neighborhoods: ['Hennepin County', 'Coon Rapids', 'Brooklyn Park']
  },
  {
    city: 'Lino Lakes',
    href: '/locations/lino-lakes-mn',
    description: 'Custom home painting and popcorn ceiling removal for Lino Lakes\' lake-dotted suburb.',
    neighborhoods: ['Anoka County', 'Blaine', 'Forest Lake']
  },
  {
    city: 'Ham Lake',
    href: '/locations/ham-lake-mn',
    description: 'Expert painting for Ham Lake\'s larger-lot homes and semi-rural properties.',
    neighborhoods: ['Anoka County', 'Blaine', 'East Bethel']
  },
  {
    city: 'East Bethel',
    href: '/locations/east-bethel-mn',
    description: 'Interior and exterior painting for East Bethel\'s spacious rural community.',
    neighborhoods: ['Anoka County', 'Ham Lake', 'Blaine']
  },
  {
    city: 'St. Francis',
    href: '/locations/st-francis-mn',
    description: 'Painting and popcorn ceiling removal for St. Francis along the Rum River corridor.',
    neighborhoods: ['Anoka County', 'Ramsey', 'Elk River']
  },
  // Sherburne County
  {
    city: 'Elk River',
    href: '/locations/elk-river-mn',
    description: 'Exterior painting, popcorn ceiling removal, and deck staining for Elk River\'s booming housing market.',
    neighborhoods: ['Sherburne County', 'Zimmerman', 'Big Lake']
  },
  {
    city: 'Big Lake',
    href: '/locations/big-lake-mn',
    description: 'Lake home painting and exterior services for Big Lake and the surrounding area.',
    neighborhoods: ['Sherburne County', 'Elk River', 'Zimmerman']
  },
  {
    city: 'Zimmerman',
    href: '/locations/zimmerman-mn',
    description: 'Interior and exterior painting for Zimmerman, midway between the Twin Cities and St. Cloud.',
    neighborhoods: ['Sherburne County', 'Elk River', 'St. Francis']
  },
  // Washington & Chisago Counties
  {
    city: 'Forest Lake',
    href: '/locations/forest-lake-mn',
    description: 'Lake home exterior painting, interior painting, and deck staining near Forest Lake.',
    neighborhoods: ['Washington County', 'Lino Lakes', 'Hugo']
  },
  {
    city: 'North Branch',
    href: '/locations/north-branch-mn',
    description: 'Painting services along the I-35 corridor for North Branch and Chisago County.',
    neighborhoods: ['Chisago County', 'Chisago City', 'Cambridge']
  },
  {
    city: 'Lindstrom',
    href: '/locations/lindstrom-mn',
    description: 'Exterior painting and deck staining for Lindstrom\'s Scandinavian lake-area community.',
    neighborhoods: ['Chisago County', 'Chisago City', 'North Branch']
  },
  {
    city: 'Chisago City',
    href: '/locations/chisago-city-mn',
    description: 'Lake home and year-round property painting throughout the Chisago Lakes area.',
    neighborhoods: ['Chisago County', 'Lindstrom', 'North Branch']
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
  // East Central MN
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
