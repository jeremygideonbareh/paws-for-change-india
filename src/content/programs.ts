import {
  Heartbeat,
  PawPrint,
  House,
  Syringe,
  BookOpen,
  Siren,
} from '@phosphor-icons/react';

export interface Program {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  stat: string;
  statLabel: string;
  imageUrl: string;
  icon: string;
  impact: string[];
}

export const programs: Program[] = [
  {
    slug: 'medical-care',
    title: 'Medical Care',
    description:
      'Veterinary treatment and rehabilitation for injured and sick stray animals across Mumbai.',
    fullDescription: `
      <p>Every day, our veterinary team treats dozens of animals that arrive at our facilities in critical condition. From road accident victims with fractures to animals suffering from infections, parasites, and preventable diseases, our medical programme is the frontline of our work.</p>
      <p>We operate two full-service veterinary clinics — one in Mumbai and one in Pune — equipped with digital X-ray, ultrasound, in-house lab diagnostics, and a dedicated surgical suite. Our team of five veterinarians and twelve veterinary assistants work round the clock, especially during monsoon season when injury rates spike.</p>
      <p>Each animal receives a complete health assessment upon arrival, followed by a customised treatment plan. We treat everything from minor wounds and skin conditions to complex orthopaedic surgeries and life-saving emergency procedures. Post-operative care includes physiotherapy, nutritional support, and a monitored recovery period.</p>
      <p>Beyond emergency care, we run preventive health camps in low-income communities, offering free vaccinations, deworming, and basic health checks for street animals. Our mobile clinic van reaches areas that have no access to veterinary services.</p>
    `.trim(),
    stat: '12,450+',
    statLabel: 'Animals Treated',
    imageUrl: '1530281700549-e82e7bf110d6',
    icon: 'Heartbeat',
    impact: [
      '5,800+ emergency surgeries performed',
      '8 full-service veterinary camps held every month',
      'Rabies vaccination coverage across 40 municipal wards',
      'Partnership with 15 private veterinary clinics for referrals',
    ],
  },
  {
    slug: 'rescue-operations',
    title: 'Rescue Operations',
    description:
      '24/7 emergency rescue team responding to animals in distress across the city.',
    fullDescription: `
      <p>Our rescue hotline operates 24 hours a day, 365 days a year. When an animal is in distress — trapped in a storm drain, injured on a busy road, abandoned in an empty building — our trained rescue team deploys within minutes.</p>
      <p>We operate two dedicated rescue vehicles equipped with capture equipment, first-aid supplies, and transport kennels. Our team of ten trained rescuers has expertise in handling all types of animals, from dogs and cats to cows, goats, and even wildlife like monkeys and birds.</p>
      <p>Each rescue is carefully documented. We assess the situation, plan a safe approach that minimises stress to the animal, execute the rescue, and transport the animal to our treatment facility or a partner clinic. If the animal can be released safely at the rescue site after treatment, we ensure it is returned to its familiar territory.</p>
      <p>During natural disasters — floods, cyclones, or building collapses — our team coordinates with the National Disaster Response Force and local municipal authorities to rescue stranded animals. In 2025 alone, we rescued 47 animals during the Mumbai monsoon floods.</p>
    `.trim(),
    stat: '3,200+',
    statLabel: 'Rescues This Year',
    imageUrl: '1544568100-847a948585b9',
    icon: 'Siren',
    impact: [
      '24/7 emergency hotline with average 12-minute response time',
      'Dedicated rescue vehicles stationed in 3 city zones',
      '450+ animals rescued during natural disasters in 2025',
      'Specialised training in high-angle rescue and water rescue',
    ],
  },
  {
    slug: 'adoption-program',
    title: 'Adoption Program',
    description:
      'Finding loving forever homes through careful screening and post-adoption support.',
    fullDescription: `
      <p>Our adoption programme is the bridge between rescue and a forever home. We believe in responsible, informed adoptions that create lasting bonds between animals and their human families.</p>
      <p>The process begins with an adoption application, followed by a thorough screening that includes a home visit, family interaction assessment, and financial capability review. We are not looking for perfection — we are looking for commitment. Our adoption counsellors work closely with each family to find the right match based on lifestyle, living space, and experience level.</p>
      <p>Every adopted animal goes home sterilised, fully vaccinated, microchipped, and with a starter kit of food and supplies. We provide post-adoption support for the entire life of the animal — behavioural counselling, discounted veterinary care at our clinics, and access to our community of adopters.</p>
      <p>Our adoption events are held every month in partnership with pet-friendly cafes, community centres, and pet stores across Mumbai, Pune, Delhi, Bangalore, and Chennai. Each event features 20–30 animals available for adoption, and our adoption counsellors are present to guide families through the process.</p>
    `.trim(),
    stat: '2,800+',
    statLabel: 'Forever Homes',
    imageUrl: '1583511655857-d19b40a7a54e',
    icon: 'House',
    impact: [
      '2,800+ successful adoptions since inception',
      'Less than 2% return rate due to rigorous screening',
      'Monthly adoption events across 5 cities',
      'Lifetime post-adoption support for every family',
    ],
  },
  {
    slug: 'sterilization-drives',
    title: 'Sterilization Drives',
    description:
      'Humane population management through mass sterilisation and vaccination camps.',
    fullDescription: `
      <p>India has an estimated 6.2 crore stray dogs. Without intervention, the population grows exponentially, leading to increased conflict, disease transmission, and suffering. Our sterilisation drives are the most effective, humane solution to this challenge.</p>
      <p>Using the Catch-Neuter-Vaccinate-Release (CNVR) methodology endorsed by the World Health Organization and Animal Welfare Board of India, our teams set up large-scale sterilisation camps in partnership with municipal corporations. Animals are humanely trapped, sterilised, vaccinated against rabies, and released back into their original territory within 48 hours.</p>
      <p>Each camp processes 40–60 animals per day. Our mobile surgical units enable us to reach remote and underserved areas. We prioritise female animals because sterilising one female prevents dozens of unwanted litters over her lifetime. Every animal receives a permanent ear-tip marking for easy identification, preventing repeat trapping.</p>
      <p>We also provide anti-rabies vaccinations as part of every drive, contributing to India's goal of rabies elimination by 2030. Our data shows that in areas where we have conducted repeated drives, the stray dog population stabilises and rabies cases decline measurably within two years.</p>
    `.trim(),
    stat: '8,500+',
    statLabel: 'Procedures Done',
    imageUrl: '1601758228041-f3b2795255f1',
    icon: 'Syringe',
    impact: [
      '8,500+ sterilisation procedures completed',
      '15,000+ anti-rabies vaccinations administered',
      'Collaboration with 12 municipal corporations',
      'Measurable population stabilisation in 8 target zones',
    ],
  },
  {
    slug: 'community-education',
    title: 'Community Education',
    description:
      'Teaching compassion and animal welfare awareness to school children and communities.',
    fullDescription: `
      <p>Lasting change begins with understanding. Our Community Education programme reaches students, resident welfare associations, and local communities with age-appropriate animal welfare education that fosters empathy and responsible coexistence.</p>
      <p>Our school programme is designed for Classes I through XII, with curricula tailored to each age group. Younger children learn through stories, art, and interactive games that teach kindness to animals. Older students explore animal behaviour, rabies prevention, and the legal framework for animal protection in India. Every session is free for government and municipal schools.</p>
      <p>For residential communities, we conduct awareness workshops on peaceful coexistence with street animals. We address common fears and misconceptions, teach safe behaviour around dogs, and provide guidance on humane feeding practices. Our "Welfare Ambassador" programme trains community volunteers to be local advocates for animal welfare.</p>
      <p>The programme also includes vocational training for animal handling, first aid, and shelter management — creating employment opportunities for youth from underserved communities. Several of our current staff members first encountered animal welfare through our education programme as school students.</p>
    `.trim(),
    stat: '15,000+',
    statLabel: 'Students Reached',
    imageUrl: '1587402092301-725e37c70fd8',
    icon: 'BookOpen',
    impact: [
      '15,000+ students reached across 80+ schools',
      '200+ community workshops conducted annually',
      '50 active Welfare Ambassadors in local communities',
      'Curriculum recognised by the Maharashtra State Education Board',
    ],
  },
  {
    slug: 'emergency-response',
    title: 'Emergency Response',
    description:
      'Disaster relief and emergency aid for animals affected by natural calamities.',
    fullDescription: `
      <p>When disaster strikes — a flood, cyclone, earthquake, or building collapse — animals are the most vulnerable victims. Our Emergency Response team is trained to deploy at a moment's notice, providing rescue, medical triage, and temporary shelter for animals affected by calamities.</p>
      <p>We maintain pre-positioned emergency supplies at strategic locations across Maharashtra and Karnataka: inflatable boats, life jackets, transport crates, emergency veterinary kits, and satellite communication equipment. Our team of 25 trained responders includes veterinarians, rescue specialists, and logistics coordinators.</p>
      <p>During the 2025 Mumbai floods, our team operated round the clock for 72 hours, rescuing 47 animals from flooded neighbourhoods. We set up a temporary animal shelter at a local school, providing food, medical care, and a safe haven until waters receded. Of the 47 animals rescued, 42 were reunited with their communities or placed in foster care — a 90% survival rate.</p>
      <p>Beyond immediate rescue, our emergency programme includes longer-term recovery support. We distribute emergency feed, provide veterinary care for injured animals, and help rebuild community animal shelters damaged by disasters. We also train local volunteers in disaster preparedness so communities can respond effectively in the critical first hours before organised relief arrives.</p>
    `.trim(),
    stat: '24/7',
    statLabel: 'Rapid Response',
    imageUrl: '1600804340584-c7db2eacf0bf',
    icon: 'Siren',
    impact: [
      'Rapid deployment team on standby 24/7',
      'Pre-positioned supplies at 4 strategic locations',
      '47 animals rescued during 2025 Mumbai floods',
      'Training programme for community disaster volunteers',
    ],
  },
];
