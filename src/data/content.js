import {
  FiWifi,
  FiVideo,
  FiPhoneCall,
  FiShield,
  FiServer,
  FiCloud,
  FiTool,
  FiCpu,
  FiHome,
} from 'react-icons/fi'
import { LuBuilding2 } from 'react-icons/lu'

export const company = {
  name: 'SNET',
  fullName: 'S. Net Networking & Security Solutions',
  tagline: 'Smart Connectivity. Secure Solutions. Reliable Service.',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'support@snetnetwork.com',
  address: '2nd Floor, Vertex Business Park, MP Nagar, Bhopal, Madhya Pradesh, India',
}

export const services = [
  {
    slug: 'internet-wifi',
    icon: FiWifi,
    accent: 'signal',
    title: 'Internet & Wi-Fi',
    short: 'Fibre broadband and enterprise-grade wireless for homes, offices and campuses.',
    description:
      'Ultra-reliable fibre broadband with symmetrical speeds, dual-band Wi-Fi 6 routers, and dedicated leased lines for businesses that cannot afford downtime.',
    points: [
      'Home & commercial fibre broadband (FTTH)',
      'Dedicated 1:1 leased line connections',
      'Optical fibre splicing & cable repair',
      'Wi-Fi 6 routers & mesh coverage design',
    ],
  },
  {
    slug: 'cctv',
    icon: FiVideo,
    accent: 'volt',
    title: 'CCTV Sale & Service',
    short: 'HD & 4K surveillance systems with remote monitoring and AMC support.',
    description:
      'IP and HD CCTV cameras from leading brands, day/night colour vision, AI motion detection, remote smartphone streaming, and annual maintenance contracts.',
    points: [
      '2MP / 4MP / 4K IP & analog cameras',
      'Colour night vision & two-way audio',
      'DVR / NVR setup with cloud backup',
      'On-site repair & AMC — monthly or yearly',
    ],
  },
  {
    slug: 'intercom',
    icon: FiPhoneCall,
    accent: 'signal',
    title: 'Intercom Services',
    short: 'EPABX and IP intercom systems for societies, offices and hospitals.',
    description:
      'Crystal-clear communication systems for housing societies, apartments, corporate offices and hospitals — from analog EPABX to modern IP-PBX.',
    points: [
      'Apartment-to-guard video & audio intercom',
      'Multi-extension IP-PBX for offices',
      'Automated call attendant setup',
      'Cable laying, fault detection & repair',
    ],
  },
  {
    slug: 'fire-safety',
    icon: FiShield,
    accent: 'amber',
    title: 'Fire Safety Solutions',
    short: 'Detection, alarm and suppression systems built to compliance standards.',
    description:
      'Certified fire detection and alarm systems, suppression equipment, and compliance documentation for commercial and residential premises.',
    points: [
      'Smoke & heat detector installation',
      'Fire alarm panel & hooter systems',
      'Extinguisher supply & annual refill',
      'Compliance certification support',
    ],
  },
  {
    slug: 'advanced-wifi',
    icon: FiCpu,
    accent: 'volt',
    title: 'Advanced Wi-Fi Solutions',
    short: 'High-density access point design for spaces with hundreds of devices.',
    description:
      'Enterprise wireless design for high-density environments — access point placement, band steering, and guest network isolation.',
    points: [
      'Site survey & heat-map planning',
      'High-density AP deployment',
      'Guest & staff network segmentation',
      'Centralised controller management',
    ],
  },
  {
    slug: 'campus-networking',
    icon: LuBuilding2,
    accent: 'signal',
    title: 'Campus Networking',
    short: 'Structured LAN backbones connecting multi-building institutions.',
    description:
      'End-to-end structured cabling and switching for schools, colleges and corporate campuses — one managed backbone across every building.',
    points: [
      'Structured cabling (Cat6 / fibre backbone)',
      'Core-to-edge switch architecture',
      'VLAN segmentation per department',
      'Centralised network monitoring',
    ],
  },
  {
    slug: 'cloud-networking',
    icon: FiCloud,
    accent: 'volt',
    title: 'Cloud Networking',
    short: 'Cloud-managed Wi-Fi and remote site visibility from one dashboard.',
    description:
      'Cloud-controller based networking that gives you visibility and control across every site from a single dashboard, anywhere.',
    points: [
      'Cloud-managed access points & switches',
      'Remote multi-site configuration',
      'Real-time analytics & alerts',
      'Firmware & security patch automation',
    ],
  },
  {
    slug: 'installation-maintenance',
    icon: FiTool,
    accent: 'amber',
    title: 'Networking Installation & Maintenance',
    short: 'Certified installation crews and scheduled preventive maintenance.',
    description:
      'From first cable pull to ongoing preventive maintenance — certified technicians handle install, testing, and documentation.',
    points: [
      'New network installation & commissioning',
      'Preventive maintenance schedules',
      'Fault diagnosis & rapid response',
      'As-built documentation & handover',
    ],
  },
  {
    slug: 'sale-service',
    icon: FiServer,
    accent: 'signal',
    title: 'Sale, Installation & Service',
    short: 'Hardware sourcing paired with installation and after-sales support.',
    description:
      'Genuine networking and security hardware sourced from authorised distributors, delivered with installation and after-sales support included.',
    points: [
      'Routers, switches, NVRs & access points',
      'Warranty-backed hardware supply',
      'Bundled installation packages',
      'Dedicated after-sales support line',
    ],
  },
]

export const solutions = [
  {
    icon: LuBuilding2,
    title: 'Campus Solutions',
    description:
      'Multi-building LAN and Wi-Fi backbones for schools, colleges and corporate parks, managed from one control point.',
    features: ['Structured cabling across buildings', 'Unified SSID roaming', 'Departmental VLANs', 'Central NOC monitoring'],
  },
  {
    icon: FiHome,
    title: 'Enterprise Solutions',
    description:
      'Resilient connectivity and security infrastructure for offices that run on uptime — leased lines, redundancy and rapid support.',
    features: ['Leased line + failover broadband', 'CCTV & access control integration', 'IP-PBX voice systems', 'Priority SLA support'],
  },
  {
    icon: FiCloud,
    title: 'Cloud Networking',
    description:
      'Cloud-controller networks that let you configure, monitor and secure every site remotely, without an on-site engineer.',
    features: ['Cloud-managed APs & switches', 'Multi-site dashboard', 'Automated firmware updates', 'Usage & threat analytics'],
  },
  {
    icon: FiCpu,
    title: 'Advanced Wi-Fi',
    description:
      'High-density wireless design for auditoriums, stadiums and co-working floors where hundreds of devices connect at once.',
    features: ['Pre-deployment heat mapping', 'Band steering & load balancing', 'Guest network isolation', 'Capacity planning for events'],
  },
]

export const productCategories = [
  {
    title: 'CCTV & Surveillance',
    items: ['IP & HD analog cameras', 'NVR / DVR recorders', 'PTZ & dome cameras', 'Video door phones'],
  },
  {
    title: 'Networking Equipment',
    items: ['Managed & unmanaged switches', 'Enterprise routers', 'Fibre media converters', 'Rack & cabling accessories'],
  },
  {
    title: 'Wi-Fi Devices',
    items: ['Wi-Fi 6 routers', 'Ceiling & wall access points', 'Mesh systems', 'Outdoor CPE units'],
  },
  {
    title: 'Communication & Safety',
    items: ['EPABX & IP-PBX units', 'Intercom handsets', 'Smoke & heat detectors', 'Fire alarm panels'],
  },
]

export const whyChoose = [
  {
    title: '24x7 NOC & Field Support',
    description: 'Round-the-clock monitoring backed by field technicians who respond, not just log tickets.',
  },
  {
    title: 'Certified Installation Teams',
    description: 'Trained crews follow documented standards for cabling, testing and handover on every site.',
  },
  {
    title: 'Single Vendor, Every System',
    description: 'Internet, CCTV, intercom and fire safety from one accountable partner — fewer handoffs, faster fixes.',
  },
  {
    title: 'Transparent AMC Plans',
    description: 'Maintenance contracts with clear response-time commitments and no hidden call-out charges.',
  },
]

export const projects = [
  { name: 'Riverstone Public School', scope: 'Campus-wide structured LAN + Wi-Fi for 3 buildings', type: 'Campus Networking' },
  { name: 'Greenview Residency', scope: '96-camera CCTV network with video door intercom', type: 'CCTV + Intercom' },
  { name: 'Meridian Business Tower', scope: 'Leased line, fire alarm and access-controlled entry', type: 'Enterprise Solution' },
  { name: 'Sunrise Textile Park', scope: 'Cloud-managed Wi-Fi across 5 warehouse units', type: 'Cloud Networking' },
]
