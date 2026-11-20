import {
  VillaConfiguration,
  Amenity,
  GalleryImage,
  FloorPlan,
  LandmarkCategory,
  Testimonial,
  FAQItem,
} from '../types';

export const PROJECT_DETAILS = {
  companyName: 'DevSyntix Builder',
  companyTagline: 'Architects of Luxury Digital Experiences',
  projectName: 'THE GRAND ESTATE',
  subtitle: 'A New Standard of Luxury Living in North Bangalore',
  location: 'North Bangalore, Karnataka, India',
  address: 'Bellary Road, Near Yelahanka & Airport Expressway, North Bangalore 562157',
  type: 'Ultra-Luxury Plotted & Row Villas',
  landParcel: '25+ Acres',
  residencesCount: '150 Exclusive Residences',
  openSpace: '70% Landscaped Open Green Spaces',
  startingPrice: '₹2.5 Cr*',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'concierge@devsyntix.com',
  reraNumber: 'PRM/KA/RERA/1251/309/PR/240226/006689 (Demo RERA ID)',
  isDemonstration: true,
  disclaimer:
    'This website is an interactive demonstration showcase designed and developed by DevSyntix to display web engineering excellence for Indian real estate builders and developers. Project details, specifications, floor plans, and pricing are illustrative sample concepts.',
};

export const VILLA_CONFIGURATIONS: VillaConfiguration[] = [
  {
    id: '3bhk-signature',
    name: '3 BHK Signature Villa',
    bhk: '3 BHK',
    tagline: 'Ideal for Contemporary Executive Living & Young Families',
    builtUpArea: '2,850 sq.ft',
    plotArea: '2,400 sq.ft (40 x 60 ft)',
    price: '₹2.50 Cr*',
    priceNumeric: '₹2.50 Cr',
    pricePerSqFt: '₹8,770 / sq.ft',
    bedrooms: 3,
    bathrooms: 4,
    carParks: 2,
    features: [
      'G+1 Bespoke Modern Villa Layout',
      'Private 450 sq.ft Manicured Rear Garden',
      'Double-Height Foyer & Dining Space',
      'Master Suite with Walk-In Closet & Deck',
      'Covered 2-Car Parking with EV Port',
      'European Modular Kitchen Provisions',
      'Solar Rooftop Water Heating Setup',
    ],
    popular: false,
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '4bhk-presidential',
    name: '4 BHK Presidential Villa',
    bhk: '4 BHK',
    tagline: 'The Pinnacle of Aristocratic Living with Private Plunge Pool Deck',
    builtUpArea: '3,900 sq.ft',
    plotArea: '3,200 sq.ft (50 x 64 ft)',
    price: '₹3.50 Cr*',
    priceNumeric: '₹3.50 Cr',
    pricePerSqFt: '₹8,974 / sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    carParks: 3,
    features: [
      'G+2 Lavish Architectural Villa Design',
      'Private Heated Plunge Pool & Teak Deck',
      'Panoramic 22-Foot Double Height Living Room',
      'Dual Master Suites with Spa Bathrooms',
      'Private Home Theatre / Entertainment Lounge',
      'Separate Maid / Chauffeur Quarters with Bath',
      'Private Hydraulic Elevator Provision',
    ],
    popular: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '5bhk-royal-estate',
    name: '5 BHK Royal Estate Villa',
    bhk: '5 BHK',
    tagline: 'Palatial Private Manor for Multi-Generational Prestige',
    builtUpArea: '5,400 sq.ft',
    plotArea: '4,500 sq.ft (60 x 75 ft)',
    price: 'Price on Request',
    priceNumeric: 'Bespoke Quoting',
    pricePerSqFt: 'Ultra-Luxury Custom',
    bedrooms: 5,
    bathrooms: 6,
    carParks: 4,
    features: [
      'Palatial G+2 Custom Trophy Residence',
      'Expansive 1,200 sq.ft Private Botanical Garden',
      'Lap Pool with Outdoor Pergola & Barbecue Station',
      'Rooftop Sky Lounge & Stargazing Solarium',
      'Dedicated Executive Home Office & Library',
      'Double Staff Accommodation Suites',
      'Full Automation Biometric Access & Climate Control',
    ],
    popular: false,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  },
];

export const PROJECT_STATISTICS = [
  { value: '25+', label: 'Acres Gated Sanctuary', caption: 'Exclusive masterplanned enclave' },
  { value: '150+', label: 'Exclusive Residences', caption: 'Low-density private living' },
  { value: '70%', label: 'Open Green Canopy', caption: 'Native flora & landscaped parks' },
  { value: '30+', label: 'Lifestyle Amenities', caption: 'Curated world-class clubhouse' },
];

export const PROJECT_HIGHLIGHTS = [
  {
    title: 'Contemporary Tropical Architecture',
    subtitle: 'Timeless Aesthetic',
    description:
      'Seamless fusion of natural stone, exposed concrete, warm teak finishes, and expansive floor-to-ceiling glass that dissolves the boundary between indoors and outdoors.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Premium Construction Quality',
    subtitle: 'Engineered for Generations',
    description:
      'Built with precision German seismic-resistant structural frames, MIVAN shear wall engineering, premium Saint-Gobain acoustic glazing, and imported marble craftsmanship.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Spacious Palatial Interiors',
    subtitle: 'Grand Volume Living',
    description:
      'Dramatic double-height living areas soaring up to 24 feet, wide column-free spans, expansive cross-ventilated galleries, and private terrace sanctuaries for every bedroom.',
    icon: 'Maximize2',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Private Courtyards & Zen Gardens',
    subtitle: 'Biophilic Serenity',
    description:
      'Each residence boasts an autonomous private garden designed by renowned landscape architects, adorned with fragrant frangipani, zen reflection water pools, and stone pergolas.',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Smart Home Automation Ecosystem',
    subtitle: 'Intuitive Modern Convenience',
    description:
      'Integrated touch-panel and smartphone controls for ambient scene lighting, VRF air conditioning, motorized drapes, smart locks, digital video intercoms, and leak detectors.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Exclusive Gated Community',
    subtitle: 'Prestigious Neighborhood',
    description:
      '50-foot wide tree-lined arterial avenues with underground cabling, concealed stormwater drains, gentle speed tables, pedestrian walking corridors, and ambient landscape illumination.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sustainable Living & IGBC Platinum Target',
    subtitle: 'Eco-Conscious Excellence',
    description:
      '100% rainwater harvesting system, localized tertiary sewage treatment plant, dedicated solar grid generation, organic composting units, and dual-plumbing water conservation.',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: '3-Tier Integrated Security',
    subtitle: 'Absolute Peace of Mind',
    description:
      'RFID boom barriers, biometric visitor pre-clearance app, perimeter infrared intrusion sensors, 24/7 guard patrols, and continuous high-definition AI CCTV surveillance coverage.',
    icon: 'Lock',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'grand-clubhouse',
    title: 'The Grand Clubhouse',
    category: 'community',
    categoryLabel: 'Club & Social',
    description:
      'A 35,000 sq.ft multi-level clubhouse designed as an aristocratic social haven, featuring concierge reception, fine dining lounge, and private library.',
    iconName: 'Building',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    specs: '35,000 sq.ft | 3 Levels | Concierge Service',
  },
  {
    id: 'swimming-pool',
    title: 'Infinity Lap Pool & Aqua Deck',
    category: 'wellness',
    categoryLabel: 'Wellness',
    description:
      'Temperature-regulated 25-meter infinity edge lap pool flanked by sunken private cabanas, wooden sun-loungers, and an integrated safe toddler splash pool.',
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    specs: '25m Heated Lap Pool | Sunken Cabanas | Toddlers Pool',
  },
  {
    id: 'gymnasium',
    title: 'High-Tech Fitness Studio',
    category: 'wellness',
    categoryLabel: 'Wellness',
    description:
      'Outfitted with premier Technogym cardio machines, free weights, functional cross-training rigs, and personal trainer consultation zones overlooking the pool.',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    specs: 'Technogym Equipment | Cardio Studio | Steam & Sauna',
  },
  {
    id: 'yoga-pavilion',
    title: 'Yoga & Zen Meditation Deck',
    category: 'wellness',
    categoryLabel: 'Wellness',
    description:
      'Open-air natural Burmese teakwood pavilion nestled beneath ancient banyan and bamboo groves, curated for morning pranayama and restorative meditation.',
    iconName: 'Flower2',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    specs: 'Bamboo Shaded Deck | Water Cascade | Sound Therapy',
  },
  {
    id: 'landscaped-gardens',
    title: 'Botanical & Japanese Zen Gardens',
    category: 'nature',
    categoryLabel: 'Nature',
    description:
      'Over 18 acres of landscaped micro-ecosystems featuring sensory walking paths, ornamental koi reflection ponds, and shaded seating alcoves.',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
    specs: 'Over 1,200 Specimen Trees | Koi Ponds | Aromatic Greens',
  },
  {
    id: 'jogging-track',
    title: '1.8 km Woodland Jogging Track',
    category: 'recreation',
    categoryLabel: 'Recreation',
    description:
      'Cushioned rubberized pedestrian and jogging boulevard meandering through shaded tree-lined avenues with solar-lit distance markers.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    specs: 'EPDM Cushioned Surface | 1.8 km Loop | Solar Lit',
  },
  {
    id: 'tennis-court',
    title: 'Championship Tennis Court',
    category: 'recreation',
    categoryLabel: 'Recreation',
    description:
      'Professional Plexipave-surfaced championship tennis court with anti-glare LED floodlights for evening singles and doubles tournaments.',
    iconName: 'CircleDot',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
    specs: 'Plexipave Acrylic Court | Tournament Floodlights | Spectator Seating',
  },
  {
    id: 'badminton-court',
    title: 'Indoor Badminton & Squash Arena',
    category: 'recreation',
    categoryLabel: 'Recreation',
    description:
      'Two climate-controlled indoor badminton courts with shock-absorbing teakwood sprung floors complying with BWF standards, plus international glass-back squash.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
    specs: 'BWF Certified Maple Floor | 2 Badminton + 1 Squash Court',
  },
  {
    id: 'childrens-play',
    title: 'Sensory Adventure Play Arena',
    category: 'community',
    categoryLabel: 'Community',
    description:
      'Safe, modern play haven equipped with impact-cushioned EPDM flooring, Scandinavian climbing webs, sandpit, and covered toddler pavilion.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1200&q=80',
    specs: 'EPDM Safety Flooring | Ages 2-12 | Toddler & Youth Zones',
  },
  {
    id: 'indoor-games',
    title: 'Recreation & Billiards Lounge',
    category: 'recreation',
    categoryLabel: 'Recreation',
    description:
      'Sophisticated clubroom featuring vintage English slate pool tables, table tennis arenas, chess pavilions, and virtual golf simulation console.',
    iconName: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    specs: 'Riley Snooker Table | Table Tennis | Board Game Parlour',
  },
  {
    id: 'multipurpose-hall',
    title: 'Grand Banquet & Celebration Lawn',
    category: 'community',
    categoryLabel: 'Community',
    description:
      'Magnificent 300-guest ballroom with crystal chandeliers, attached commercial catering pantry, and spillover alfresco manicured garden lawn.',
    iconName: 'PartyPopper',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    specs: '300 Guest Capacity | Commercial Pantry | Event Lawn',
  },
  {
    id: 'senior-citizen',
    title: 'Senior Citizen Reflexology Park',
    category: 'nature',
    categoryLabel: 'Nature',
    description:
      'Serene shaded grove with therapeutic stone pebble reflexology pathways, ergonomic teak benches, chess tables, and gentle water fountains.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
    specs: 'Pebble Walkway | Shaded Gazebos | Zero-Step Gradient',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Evening Illumination at The Grand Estate',
    category: 'exterior',
    categoryLabel: 'Exterior',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Luxury villa exterior facade illuminated with pool reflection',
    caption: 'Cinematic architectural facade with ambient pool lighting and lush landscaped perimeter.',
  },
  {
    id: 'gal-2',
    title: 'Double-Height Grand Living Salon',
    category: 'living',
    categoryLabel: 'Living Spaces',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    alt: 'Double height living room with Italian marble and custom lighting',
    caption: 'Soaring 24-foot ceiling heights welcoming natural daylight into the grand salon.',
  },
  {
    id: 'gal-3',
    title: 'Presidential 4 BHK Villa Front Elevation',
    category: 'exterior',
    categoryLabel: 'Exterior',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    alt: 'Contemporary luxury villa entrance with manicured lawn',
    caption: 'Private entrance driveway with double-covered car ports and tropical foliage.',
  },
  {
    id: 'gal-4',
    title: 'Gourmet Modular Italian Kitchen',
    category: 'interiors',
    categoryLabel: 'Interiors',
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80',
    alt: 'Modern kitchen island with luxury marble and integrated appliances',
    caption: 'Ergonomic kitchen fitted with quartz counters, hidden breakfast pantry, and German hardware.',
  },
  {
    id: 'gal-5',
    title: 'Master Bedroom Suite with Private Balcony',
    category: 'bedrooms',
    categoryLabel: 'Bedrooms',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
    alt: 'Master bedroom with warm hardwood floors and garden vista',
    caption: 'Spacious master sanctuary featuring sound-insulated glazing and panoramic garden vistas.',
  },
  {
    id: 'gal-6',
    title: 'Resort Infinity Swimming Pool & Sunken Deck',
    category: 'amenities',
    categoryLabel: 'Amenities',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
    alt: 'Resort style swimming pool with submerged lounge chairs',
    caption: '25-meter infinity pool designed with sunken relaxation cabanas and wooden sun decks.',
  },
  {
    id: 'gal-7',
    title: 'Ultra-Modern Glass Villa Facade',
    category: 'exterior',
    categoryLabel: 'Exterior',
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
    alt: 'Modern architectural villa with geometric cantilever',
    caption: 'Geometric cantilevers and energy-efficient Low-E glass facades overlooking private lawns.',
  },
  {
    id: 'gal-8',
    title: 'Grand Dining & Family Lounge',
    category: 'living',
    categoryLabel: 'Living Spaces',
    url: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=80',
    alt: 'Luxury open plan dining table with contemporary chandelier',
    caption: 'Seamless flow from formal dining into the outdoor barbecue deck.',
  },
  {
    id: 'gal-9',
    title: 'The Clubhouse Grand Reception Atrium',
    category: 'amenities',
    categoryLabel: 'Amenities',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Clubhouse luxury lobby with chandelier and concierge desk',
    caption: 'Triple-height reception lobby welcoming residents and guests with 5-star concierge hospitality.',
  },
  {
    id: 'gal-10',
    title: 'Guest Bedroom with Ambient Warmth',
    category: 'bedrooms',
    categoryLabel: 'Bedrooms',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sophisticated guest bedroom with ensuite marble bathroom',
    caption: 'Thoughtfully planned guest suite offering complete privacy and opulent finishes.',
  },
  {
    id: 'gal-11',
    title: 'Manicured Zen Courtyard & Reflection Pool',
    category: 'landscape',
    categoryLabel: 'Landscape',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1400&q=80',
    alt: 'Private garden courtyard with stepping stones and manicured plants',
    caption: 'Serene internal courtyard garden providing soothing green views from every floor.',
  },
  {
    id: 'gal-12',
    title: 'Sprawling Aerial View of Residential Community',
    category: 'landscape',
    categoryLabel: 'Landscape',
    url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Aerial view of luxury villa community masterplan',
    caption: 'Bird’s-eye perspective of the 25-acre green masterplan with wide avenues and tree canopy.',
  },
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: 'fp-3bhk',
    bhk: '3 BHK',
    title: 'Signature Villa 3 BHK Floor Layout',
    area: '2,850 sq.ft Built-Up Area',
    plotSize: '40 x 60 ft (2,400 sq.ft Plot)',
    levels: 'Ground + 1 Floor + Terrace',
    facing: 'East & North Facing Available',
    highlights: [
      'Expansive Living & Dining (26’0” x 15’6”) opening to private garden',
      'Open Gourmet Kitchen (13’0” x 11’6”) with utility area',
      'Ground Floor Guest / Parent Bedroom (14’0” x 13’0”) with ensuite bath',
      'First Floor Master Suite (17’6” x 14’0”) with private balcony & walk-in closet',
      'First Floor Children Bedroom (15’0” x 12’6”) with attached bath',
      'Upper Family Lounge & Open Study Alcove',
      'Terrace Garden & Solar Water Setup Deck',
    ],
    groundFloorImage: 'ground-3bhk',
    firstFloorImage: 'first-3bhk',
  },
  {
    id: 'fp-4bhk',
    bhk: '4 BHK',
    title: 'Presidential Villa 4 BHK Floor Layout',
    area: '3,900 sq.ft Built-Up Area',
    plotSize: '50 x 64 ft (3,200 sq.ft Plot)',
    levels: 'Ground + 2 Floors + Sky Deck',
    facing: 'East Facing Vastu Compliant',
    highlights: [
      'Double Height Living Room (28’0” x 16’0”) with 22-ft ceiling',
      'Private Plunge Pool (18’0” x 10’0”) with timber sun deck',
      'Chef Kitchen with dry & wet cooking zones plus store room',
      'Grand Master Suite (21’0” x 15’0”) with 5-fixture luxury spa bathroom',
      'Junior Master Suite & Two additional luxury ensuite bedrooms',
      'Second Floor Private Media Room / Home Cinema Lounge',
      'Dedicated Servant Quarters with separate external access',
    ],
    groundFloorImage: 'ground-4bhk',
    firstFloorImage: 'first-4bhk',
  },
  {
    id: 'fp-5bhk',
    bhk: '5 BHK',
    title: 'Royal Estate Villa 5 BHK Floor Layout',
    area: '5,400 sq.ft Built-Up Area',
    plotSize: '60 x 75 ft (4,500 sq.ft Plot)',
    levels: 'Ground + 2 Floors + Pent-Lounge',
    facing: 'North-East Facing Vastu Compliant',
    highlights: [
      'Palatial Living & Banquet Dining Area (34’0” x 18’6”)',
      'Private Swimming Pool (24’0” x 12’0”) with jacuzzi jets & gazebo',
      'Two Expansive Master Suites on separate levels with dressing boudoirs',
      'Three Additional Large Guest & Family Bedrooms with attached luxury baths',
      'Dedicated Executive Study / Private Home Office',
      'Private Hydraulic Passenger Elevator serving all 3 floors',
      'Dual Staff Quarters (Cook & Chauffeur) with dedicated bath and pantry',
    ],
    groundFloorImage: 'ground-5bhk',
    firstFloorImage: 'first-5bhk',
  },
];

export const LOCATION_LANDMARKS: LandmarkCategory[] = [
  {
    category: 'Connectivity & Transit',
    icon: 'Plane',
    items: [
      { name: 'Kempegowda International Airport (BLR)', distance: '14.5 km', time: '18 Mins', type: 'Direct Expressway' },
      { name: 'Upcoming Metro Blue Line (Airport Corridor)', distance: '3.2 km', time: '5 Mins', type: 'Rapid Transit' },
      { name: 'Hebbal Flyover & Outer Ring Road (ORR)', distance: '12.0 km', time: '15 Mins', type: 'Arterial Junction' },
      { name: 'Yelahanka Railway Junction', distance: '5.8 km', time: '10 Mins', type: 'Rail Connectivity' },
      { name: 'Bangalore Cantt / City Railway Station', distance: '22.0 km', time: '35 Mins', type: 'Central Hub' },
    ],
  },
  {
    category: 'IT & Business Parks',
    icon: 'Briefcase',
    items: [
      { name: 'Manyata Embassy Business Park (Nagavara)', distance: '13.2 km', time: '18 Mins', type: 'Over 1.5 Lakh Tech Jobs' },
      { name: 'Devanahalli Aerospace & Defense SEZ (KIADB)', distance: '11.5 km', time: '14 Mins', type: 'Aviation Tech Hub' },
      { name: 'Kirloskar Business Park (Hebbal)', distance: '11.8 km', time: '15 Mins', type: 'Corporate Park' },
      { name: 'Ecopolis IT SEZ / Bagalur IT Corridor', distance: '8.4 km', time: '12 Mins', type: 'Emerging Tech Enclave' },
      { name: 'Prestige Cloud Tech Park', distance: '9.0 km', time: '12 Mins', type: 'Tech & Innovation' },
    ],
  },
  {
    category: 'International Schools & Universities',
    icon: 'GraduationCap',
    items: [
      { name: 'Canadian International School (CIS)', distance: '5.2 km', time: '8 Mins', type: 'IB World School' },
      { name: 'Stonehill International School', distance: '7.8 km', time: '12 Mins', type: 'IB Continuum' },
      { name: 'Delhi Public School (DPS Bangalore North)', distance: '6.4 km', time: '10 Mins', type: 'CBSE Excellence' },
      { name: 'Vidyashilp Academy', distance: '6.1 km', time: '9 Mins', type: 'ICSE & Cambridge' },
      { name: 'Mallya Aditi International School', distance: '8.5 km', time: '14 Mins', type: 'Premier Education' },
    ],
  },
  {
    category: 'Healthcare & Super-Specialty Hospitals',
    icon: 'Stethoscope',
    items: [
      { name: 'Aster CMI Hospital (Hebbal)', distance: '12.4 km', time: '16 Mins', type: 'Multi-Super Specialty' },
      { name: 'Manipal Hospital (Hebbal)', distance: '11.8 km', time: '15 Mins', type: 'Quaternary Healthcare' },
      { name: 'Cytecare Cancer Hospital', distance: '7.2 km', time: '10 Mins', type: 'Oncology Centre' },
      { name: 'Columbia Asia / Manipal (Doddaballapur Rd)', distance: '6.5 km', time: '10 Mins', type: '24/7 Emergency Care' },
    ],
  },
  {
    category: 'Luxury Retail & Leisure',
    icon: 'ShoppingBag',
    items: [
      { name: 'Phoenix Mall of Asia (Hebbal)', distance: '11.0 km', time: '14 Mins', type: 'Luxury Flagship Retail' },
      { name: 'RMZ Galleria Mall (Yelahanka)', distance: '6.2 km', time: '10 Mins', type: 'Cinema & High-Street' },
      { name: 'Padukone-Dravid Centre for Sports Excellence', distance: '8.5 km', time: '12 Mins', type: 'Olympic Sports Hub' },
      { name: 'Angsana Oasis Resort & Spa', distance: '10.2 km', time: '15 Mins', type: 'Weekend Resort' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Priya Sharma',
    role: 'Senior Vice President',
    company: 'Global Fintech Enterprise',
    quote:
      'We visited multiple villa developments across North Bangalore, including Embassy and Prestige projects. The spatial proportion, double-height living areas, and quiet woodland feel of The Grand Estate are in a class of their own. The craftsmanship demonstrated here represents the pinnacle of modern luxury living.',
    rating: 5,
    villaType: '4 BHK Presidential Villa Owner (Demo)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    name: 'Vikramaditya Reddy',
    role: 'Founder & Managing Director',
    company: 'Apex Infrastructure Holdings',
    quote:
      'As someone in civil infrastructure, I inspect foundation engineering and structural details meticulously. The MIVAN engineering, acoustic thermal glazing, and deep integration of sustainable solar and rainwater setups reflect an uncompromising commitment to long-term quality.',
    rating: 5,
    villaType: '5 BHK Royal Estate Villa Owner (Demo)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    name: 'Anita & Sanjay Mehta',
    role: 'Managing Partner',
    company: 'Mehta & Associates Law Offices',
    quote:
      'What won us over was the masterplan: 70% open green space with no vehicular traffic intersecting the central jogging and kids play zones. Proximity to Canadian International School and a 15-minute straight expressway drive to the Airport makes our daily commute effortless.',
    rating: 5,
    villaType: '3 BHK Signature Villa Owner (Demo)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is The Grand Estate located and what is its connectivity?',
    answer:
      'The Grand Estate is strategically situated in North Bangalore along the high-growth International Airport growth corridor, directly accessible via Bellary Road (NH 44). It is located within 15 to 18 minutes of Kempegowda International Airport (BLR), 15 minutes from Hebbal Flyover, and 18 minutes from Manyata Embassy Business Park. The upcoming Bangalore Metro Blue Line station is just 5 minutes away.',
  },
  {
    id: 'faq-2',
    question: 'What villa configurations and plot sizes are available in this development?',
    answer:
      'The enclave offers three bespoke configurations:\n• 3 BHK Signature Villas: Built-up area of 2,850 sq.ft on 2,400 sq.ft plots (40 x 60 ft)\n• 4 BHK Presidential Villas: Built-up area of 3,900 sq.ft on 3,200 sq.ft plots with private plunge pool\n• 5 BHK Royal Estate Villas: Palatial built-up area of 5,400 sq.ft on 4,500 sq.ft plots featuring private elevator provisions and expansive botanical gardens.',
  },
  {
    id: 'faq-3',
    question: 'What lifestyle and clubhouse amenities are included in the masterplan?',
    answer:
      'The community features over 30 hand-curated amenities centered around a 35,000 sq.ft 3-level Grand Clubhouse. Highlights include a 25m heated infinity lap pool with sunken cabanas, high-tech Technogym fitness studio, yoga pavilion, championship Plexipave tennis court, indoor badminton courts, a 1.8 km cushioned jogging loop, sensory children’s play arena, billiards room, banquet hall, and senior citizen reflexology park.',
  },
  {
    id: 'faq-4',
    question: 'Is the gated community family-friendly and secure for children and senior citizens?',
    answer:
      'Yes, exceptionally so. The masterplan is engineered on a biophilic pedestrian-first philosophy. Roads feature dedicated speed-dampened loops, perimeter walkways, and zero vehicular conflict with central recreational parks. Safety is ensured via 3-tier round-the-clock security, RFID access gates, continuous AI CCTV surveillance, and verified visitor pre-authorization.',
  },
  {
    id: 'faq-5',
    question: 'How can I schedule a private site visit or chauffeur pickup?',
    answer:
      'You can schedule a personalized site tour directly through our website by clicking "Schedule Site Visit" or via WhatsApp concierge (+91 98765 43210). For interested high-net-worth buyers, our concierge coordinates complimentary chauffeured Mercedes/BMW transfers from anywhere in Bengaluru.',
  },
  {
    id: 'faq-6',
    question: 'How can I download the complete master brochure and detailed cost sheet?',
    answer:
      'Click the "Download Brochure" button in the navigation or hero section, enter your mobile number and email, and the official comprehensive 48-page architectural brochure along with the unit-level pricing sheet will be made available for immediate high-resolution digital download.',
  },
  {
    id: 'faq-7',
    question: 'What is the RERA approval status and development timeline?',
    answer:
      'The project masterplan has received all statutory approvals including BIAAPA sanction and RERA acknowledgment under registration number PRM/KA/RERA/1251/309/PR/240226/006689 (Demo RERA identifier). Phase 1 handovers are scheduled in planned phases with escrow-backed bank accountability.',
  },
  {
    id: 'faq-8',
    question: 'Notice for real estate developers & builders reviewing this website:',
    answer:
      'This website is a live demonstration created by DevSyntix to showcase our senior UI/UX design, performance optimization, and conversion-focused web architecture for elite Indian builders (such as Embassy, Prestige, Sobha, Brigade, and Lodha). Every component — from the glassmorphic lead capture to the lightbox gallery and floor plan viewer — is custom engineered for high conversion and effortless CMS/CRM integration.',
  },
];
