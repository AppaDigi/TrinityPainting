export interface LocationContent {
    city: string;
    description: string;
    introTitle: string;
    introContent1: string;
    introContent2: string;
    whyTitle: string;
    whyContent: string;
    coordinates: { lat: string; lng: string };
    longContent1?: string;
    longContent2?: string;
    neighborhoodList?: string[];
}

export const locationData: Record<string, LocationContent> = {
    "edina": {
        city: "Edina",
        description: "Trinity Painting & Renewal provides premium painting services in Edina, MN. We specialize in high-end interior and exterior transformations with God-honoring craftsmanship.",
        introTitle: "Serving the Edina Area",
        introContent1: "Edina homeowners expect excellence, and Trinity Painting & Renewal is dedicated to delivering just that. From the historic charm of Country Club to the modern estates in Sunnyside and Morningside, we bring surgical precision to every project. We understand that an Edina home is more than just a residence; it's a significant investment that deserves the highest level of protection and aesthetic care.",
        introContent2: "Our crews operate with a focus on 'Projects Over Profits,' ensuring that every surface—from vaulted ceilings to intricate millwork—is prepared and coated following Sherwin-Williams' most rigorous specifications. We handle the unique architectural details common in Edina homes with a mastery that only years of local experience can provide.",
        whyTitle: "Why Trinity in Edina?",
        whyContent: "In Edina, reputation matters. Trinity Painting & Renewal has built an impeccable standing through radical transparency and a commitment to quality that goes beyond the surface. We provide detailed, stewardship-driven pricing and use only premium materials like Sherwin-Williams Emerald for a finish that withstands the Minnesota climate while exuding luxury. Our faith-focused approach means we respect your home as if it were our own.",
        coordinates: { lat: "44.8891", lng: "-93.3501" },
        longContent1: "The unique climate of Edina requires a specialized approach to paint selection and application. We don't just 'paint' a house; we perform a complete restoration of the protective envelope. Our process includes deep-penetrating primers for cedar siding and silk-finish enamels for interior cabinetry that feel as smooth as they look. We understand the specific color palettes favored in Edina neighborhoods, ensuring your home remains a standout for its sophistication and quality.",
        longContent2: "Whether you're refreshing a master-planned kitchen or seeking to preserve the historic siding of a Morningside colonial, we provide the industrial-strength solutions you need with a residential attention to detail. Our knowledge of local Edina building codes and homeowner association requirements ensures a seamless project experience from the first drop cloth to the final walkthrough.",
        neighborhoodList: ["Country Club", "Morningside", "Sunnyside", "White Oaks", "Indian Hills", "Parkview", "Todd Park"]
    },
    "st-louis-park": {
        city: "St. Louis Park",
        description: "Professional painting services for St. Louis Park, MN. Interior, exterior, and cabinet refinishing for SLP homeowners with a focus on quality and community.",
        introTitle: "Painting for St. Louis Park Neighbors",
        introContent1: "St. Louis Park is a vibrant, growing community with a beautiful variety of home styles, from classic bungalows to modern developments. Trinity Painting & Renewal is proud to be the trusted choice for SLP homeowners who value reliability and top-tier results. We serve all neighborhoods, including Fern Hill, Bronx Park, and Elmwood, bringing a local touch to every job.",
        introContent2: "We understand the local environment and the importance of timely project completion. Whether you're updating a kitchen with our specialized cabinet refinishing or protecting your home's exterior from the freeze-thaw cycle, our team provides clear communication and a clean job site from start to finish.",
        whyTitle: "Your SLP Painting Experts",
        whyContent: "Trinity Painting & Renewal stands out in St. Louis Park for our 'God-Honoring Craftsmanship.' We don't just paint walls; we renew spaces. Our use of premium low-VOC paints ensures your family's safety, while our meticulous prep work guarantees a durable finish. We are fully licensed and insured, operating as stewards of your property with an uncompromising dedication to excellence.",
        coordinates: { lat: "44.9483", lng: "-93.3483" },
        longContent1: "The residential landscape of St. Louis Park is a study in preservation meets modernization. We specialize in bringing older SLP homes into the current era with sophisticated exterior and interior updates. Our 'stewardship' mindset means we don't just solve immediate problems; we identify potential issues like moisture intrusion behind outdated siding before they lead to structural damage.",
        longContent2: "From the mid-century treasures of Fern Hill to the updated rentals and single-family homes near the West End, our commitment is the same. We provide a surgical level of preparation that ensures your investment is protected. We are your local partners for everything from popcorn ceiling removal to high-durability kitchen cabinet refinishing.",
        neighborhoodList: ["Fern Hill", "Bronx Park", "Elmwood", "St. Louis Park Plaza", "Birchwood", "Sorenson"]
    },
    "richfield": {
        city: "Richfield",
        description: "Expert painting contractors in Richfield, MN. Specialized in exterior protection and interior refreshes for Richfield homes and rentals.",
        introTitle: "Renewing Richfield Homes",
        introContent1: "As 'The Urban Hometown,' Richfield features a rich history of well-built homes that often benefit from a professional refresh. Trinity Painting & Renewal specializes in revitalizing Richfield properties, from the mid-century ramblers near Wood Lake to newer builds throughout the city. We focus on maximizing your home's value and curb appeal with modern color palettes and durable coatings.",
        introContent2: "We know that many Richfield homes have unique siding materials and interior textures that require specialized knowledge. Our team is expert at everything from popcorn ceiling removal to exterior wood restoration, ensuring that your home receives the specific care it needs to look its best for the next decade.",
        whyTitle: "The Trinity Standard in Richfield",
        whyContent: "Homeowners in Richfield choose Trinity because we offer high-performance results without the corporate runaround. Our 'Trinity Seal of Integrity' means we stand by our work 100%. We use Sherwin-Williams' best products to ensure your home survives the MN winters, and our transparent pricing means you always know exactly what you're paying for. We are your neighbors, serving with honesty and pride.",
        coordinates: { lat: "44.8833", lng: "-93.2831" },
        longContent1: "In Richfield, home maintenance is about more than just looks; it's about protecting the long-term integrity of your property against the extreme Minnesota freeze-thaw cycle. We specialize in the meticulous surface preparation that older Richfield homes require, ensuring that every layer of paint bonds completely to the substrate for maximum longevity.",
        longContent2: "Whether you're prepping a property for the local real estate market or simply renewing your family's favorite room, our 'stewardship' mission means we treat your asset with total respect. We prioritize clean job sites and clear communication, making us a top choice for Richfield homeowners who need an honest contractor they can trust around their families.",
        neighborhoodList: ["Wood Lake", "Penn Ave", "Richfield Hub", "East Richfield", "Centennial"]
    },
    "bloomington": {
        city: "Bloomington",
        description: "Comprehensive painting services in Bloomington, MN. Exterior house painting and interior renewals for one of the Twin Cities' largest communities.",
        introTitle: "Serving the Bloomington Community",
        introContent1: "Bloomington is one of the largest and most diverse communities in the Twin Cities, and Trinity Painting & Renewal is equipped to handle its wide range of residential painting needs. From large suburban estates to cozy neighborhood homes, we provide the scale and expertise required for any Bloomington project. We serve areas around Normandale, Bush Lake, and the Minnesota River Valley.",
        introContent2: "Our exterior painting services are specifically designed to handle the exposure common in Bloomington's more open residential areas, where wind and sun can accelerate paint degradation. By utilizing high-build primers and premium Sherwin-Williams coatings, we build a protective shell that lasts twice as long as standard contractor-grade applications.",
        whyTitle: "Why Bloomington Trusts Trinity",
        whyContent: "In Bloomington, we are known for our professional logistical planning and high-volume capability without sacrificing our 'Surgical Preparation' standards. Whether we're painting a massive exterior or refinishing a kitchen full of cabinets, we maintain a clean environment and provide frequent updates. Our faith-focused mission drives us to deliver a service that honors both the Lord and our clients.",
        coordinates: { lat: "44.8408", lng: "-93.2983" },
        longContent1: "The diversity of Bloomington's residential architecture means our crews must be masters of their craft. While we're handling the expansive siding of a colonial-style estate one day, we're performing detailed interior enameling on local Ramblers the next. We understand that Bloomington homeowners value both aesthetic beauty and structural integrity.",
        longContent2: "Our commitment to 'Radical Transparency' means you receive an estimate that is detailed down to the specific coating brand and the number of hours required for prep. No vague language or hidden fees. We treat every project in Bloomington as a partnership to preserve and enhance your property for the next decade of Minnesota seasons.",
        neighborhoodList: ["Normandale", "Bush Lake", "River Valley", "East Bloomington", "West Bloomington", "Southtown"]
    },
    "golden-valley": {
        city: "Golden Valley",
        description: "Premium interior and exterior painting in Golden Valley, MN. Specializing in modern aesthetics and high-performance finishes for GV residents.",
        introTitle: "Excellence in Golden Valley",
        introContent1: "Golden Valley is a community that appreciates modern design and meticulous maintenance. Trinity Painting & Renewal caters to GV residents who demand a sophisticated touch. Whether you're updating a mid-century modern gem with a fresh interior palette or seeking to protect your home's exterior with a weather-tough finish, we provide the aesthetic expertise and technical skill required.",
        introContent2: "We specialize in the deep preparation work that high-end finishes require. This includes extensive sanding for smooth-enamelled trim and specialized primers for wood and metal surfaces. Our goal is to enhance the natural beauty of Golden Valley's diverse architecture while providing a coating that survives the Minnesota elements.",
        whyTitle: "A Higher Standard for Golden Valley",
        whyContent: "Trinity Painting & Renewal brings a 'Radical Transparency' to every project in Golden Valley. We don't hide costs or use inferior materials. By specifying Sherwin-Williams' top-tier lines and employing only verified American citizens, we ensure a project experience that is as professional as the result. We treat your property with the stewardship it deserves, delivering results that truly wow.",
        coordinates: { lat: "44.9861", lng: "-93.3783" },
        longContent1: "Golden Valley properties often feature unique textures and architectural details that standard painters overlook. We take the time to properly seal and prime these surfaces, using high-performance coatings like Sherwin-Williams Duration. We focus on 'Projects Over Profits,' meaning we never rush the drying or curing times necessary for a high-end finish.",
        longContent2: "From the refined interiors of properties near Sweeney Lake to the classic modern builds throughout the city, we provide a service that is as sophisticated as the community we serve. Our commitment to 'God-Honoring Craftsmanship' means we provide a level of surgical detail that results in a finish our neighbors are proud to display for years.",
        neighborhoodList: ["GV Center", "Sweeney Lake", "GV Commons", "GV Hills", "Valley View"]
    },
    "mora": {
        city: "Mora",
        description: "Our founding location, providing premium painting services to East Central Minnesota. Residential and commercial painting with God-honoring craftsmanship.",
        introTitle: "Serving our Home in Mora",
        introContent1: "Mora is where Trinity Painting & Renewal began, and it remains the heart of our operations. We are proud to serve our neighbors in Kanabec County with the same dedication to excellence that we bring to the entire Twin Cities metro. From historic homes in town to lakeside properties and farmsteads, we understand the local climate and the specific needs of Mora homeowners.",
        introContent2: "Whether you're looking for a fresh interior to brighten up your winter or a durable exterior to protect your home from the elements, our Mora-based crews provide reliable, high-quality service. We are your local partners in home maintenance and renewal, operating with a commitment to integrity and stewardship in every project we touch.",
        whyTitle: "Why Mora Chooses Trinity",
        whyContent: "In Mora, we aren't just contractors; we're neighbors. Trinity Painting & Renewal has built its reputation on 'Radical Transparency'—meaning we provide honest, detailed estimates and use only the best materials like Sherwin-Williams Duration. Our faith-focused approach drives us to provide a service that honors the Lord and respects your property. When you choose Trinity, you're choosing a team that cares about the long-term health and beauty of your Mora home.",
        coordinates: { lat: "45.8769", lng: "-93.2938" },
        longContent1: "Mora homes often need someone who understands the deeper structural care required for survival in East Central MN. Our 'Surgical Prep' includes checking for moisture rot behind siding and properly treating wood before a single drop of paint is applied. We prioritize 'Home Preservation' above all else.",
        longContent2: "From the traditional properties within Mora city limits to the expansive farm estates and lakeside homes throughout Kanabec County, we bring a level of professional dedication that honors our local community. We are your neighbors, and our results reflect the respect we have for our shared hometown environment.",
        neighborhoodList: ["Kanabec County", "East Central MN", "Ogilvie", "Quamba", "Mora City Center"]
    }
};
