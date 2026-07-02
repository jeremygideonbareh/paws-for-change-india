export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'monsoon-rescue-operation-mumbai-2026',
    title: 'How We Rescued 47 Animals During the Mumbai Monsoon',
    date: '2026-06-15',
    excerpt:
      'When heavy rains flooded low-lying areas of Mumbai, our rapid response team sprang into action. Here is the story of the largest single rescue operation in our history.',
    content: `
      <p>June brought the heaviest rainfall Mumbai has seen in a decade. For the stray animals of the city, the monsoon season is always a time of heightened vulnerability — but this year was unprecedented.</p>
      <p>Our 24/7 emergency hotline received over 200 distress calls in a single weekend. Within hours, we had deployed four rescue teams across the worst-affected wards of Kurla, Andheri, Dharavi, and Chembur.</p>
      <p>Using inflatable boats borrowed from the local fire brigade, our team waded through chest-deep water to reach stranded animals. Many were clinging to debris, shivering and terrified. Dogs, cats, and even a family of goats were brought to safety over the course of 72 hours.</p>
      <p>"I have never seen anything like it," said Dr. Meera Patel, our head veterinarian. "We set up a temporary triage centre at a local school. Every animal was checked for hypothermia, injuries, and water inhalation."</p>
      <p>Of the 47 animals rescued, 42 have made full recoveries. Four are still under observation, and sadly one kitten could not be saved despite our best efforts.</p>
      <p>This operation was made possible by the generosity of our donors who fund our emergency response programme. As climate change leads to more extreme weather events in India, the need for a well-equipped rapid response team has never been more urgent.</p>
      <p>We are now working with the Brihanmumbai Municipal Corporation to establish pre-positioned rescue supplies in flood-prone wards before next monsoon season.</p>
    `.trim(),
    imageUrl: '1544568100-847a948585b9',
    author: 'Dr. Meera Patel',
    category: 'Rescue Operations',
  },
  {
    slug: 'adoption-tips-first-time-pet-parents-india',
    title: 'A Complete Guide to Adopting a Pet in India — What Every First-Time Parent Should Know',
    date: '2026-05-28',
    excerpt:
      'Thinking of adopting a stray or rescuing a pet? From legal paperwork to home preparation, here is everything you need to know about pet adoption in India.',
    content: `
      <p>Bringing a rescued animal into your home is one of the most rewarding decisions you can make. But it also comes with responsibilities that many first-time adopters in India are not fully prepared for.</p>
      <p>At Paws for Change India, we conduct thorough screening for every adoption. This is not about being difficult — it is about ensuring a match that lasts a lifetime. Here are our top tips for anyone considering adoption.</p>
      <p><strong>1. Understand the commitment.</strong> A dog can live 12–15 years, cats even longer. Consider your lifestyle, work schedule, and future plans. Can you commit to daily walks, vet visits, and the financial cost of food and medical care?</p>
      <p><strong>2. Choose the right breed for your home.</strong> India has wonderful Indie (desi) dogs that are hardy, intelligent, and make fantastic family pets. They are often healthier than purebreds and adapt well to Indian climates. Do not overlook them for imported breeds.</p>
      <p><strong>3. Pet-proof your home.</strong> Before bringing your new family member home, secure electrical wires, remove toxic plants, and designate a quiet corner with a bed, water bowl, and toys. A calm introduction space helps reduce anxiety.</p>
      <p><strong>4. Find a good veterinarian.</strong> Build a relationship with a vet before you need one. Ask your rescue organisation for recommendations. Early vaccinations, deworming, and sterilisation are essential.</p>
      <p><strong>5. Be patient with the transition.</strong> Rescued animals often carry trauma. The "two-week shutdown" period is real — give your pet time to decompress. Do not force interaction. Let them come to you.</p>
      <p><strong>6. Register your pet.</strong> Many municipal corporations in India now require pet registration. Check the rules in your city and ensure your pet's microchip or collar tag has up-to-date contact information.</p>
      <p>Adopting a rescued animal is not just an act of kindness — it is a statement that every life matters. When you adopt from Paws for Change India, you are not just gaining a companion; you are making space for us to rescue another animal in need.</p>
    `.trim(),
    imageUrl: '1583511655857-d19b40a7a54e',
    author: 'Ananya Sharma',
    category: 'Adoption Tips',
  },
  {
    slug: 'sterilization-camp-pune-community-impact',
    title: '8,500 Sterilisations and Counting — How Our Camps Are Controlling Stray Populations Humanely',
    date: '2026-04-10',
    excerpt:
      'Our mass sterilisation drives are the most effective tool in our mission. Behind the numbers is a carefully coordinated operation that changes lives — both animal and human.',
    content: `
      <p>India has an estimated 6.2 crore stray dogs, and the numbers grow every year if left unchecked. At Paws for Change India, we believe in humane population management through Catch-Neuter-Vaccinate-Release (CNVR) programmes.</p>
      <p>Our sterilisation drives are held in partnership with municipal bodies across Maharashtra, Karnataka, and Tamil Nadu. Each camp is a massive logistical undertaking that requires coordination with local animal control, veterinarians, and community volunteers.</p>
      <p>A typical Saturday camp in Pune processes 40–60 animals. The process begins at dawn with humane trapping by trained handlers. Each animal is brought to the camp, assessed by a veterinarian, sterilised under anaesthesia, vaccinated against rabies, and monitored during recovery. Within 24 hours, they are released back into their original territory.</p>
      <p>"Returning animals to their original territory is crucial," explains Dr. Rajesh Khanna, our senior veterinarian. "It prevents territorial vacuums that would otherwise be filled by unsterilised animals from neighbouring areas. This is why CNVR works."</p>
      <p>Over 8,500 procedures have been completed since we started, and the results are visible. In the areas where we have run repeated campaigns, the municipal corporation reports a measurable decline in stray dog population and, most importantly, a reduction in rabies cases.</p>
      <p>Community engagement is a vital part of these drives. We work with resident welfare associations and local feeding volunteers to identify priority areas and ensure post-operative care. Each animal's ear is tipped during surgery — a universal marker that indicates a sterilised, vaccinated animal — preventing repeat trapping.</p>
      <p>Every sterilisation costs approximately ₹1,200. That is a one-time investment that prevents dozens of unwanted litters over an animal's lifetime. It is the most cost-effective, humane intervention available.</p>
    `.trim(),
    imageUrl: '1601758228041-f3b2795255f1',
    author: 'Rajesh Khanna',
    category: 'Community Programmes',
  },
  {
    slug: 'community-education-school-programme',
    title: 'Teaching Compassion: How We Are Reaching 15,000 Students with Animal Welfare Education',
    date: '2026-03-22',
    excerpt:
      'Our school education programme is planting the seeds of empathy in the next generation. From classroom talks to hands-on shelter visits, here is how we are building a kinder India.',
    content: `
      <p>Children who learn compassion for animals grow into adults who build humane communities. This simple belief drives our Community Education programme, which has reached over 15,000 students in schools across Maharashtra since 2022.</p>
      <p>The programme was born from a simple observation: many of the issues we see — animal neglect, casual cruelty, fear-based reactions to stray dogs — stem from a lack of awareness and understanding. If we could change attitudes early, we could prevent suffering before it begins.</p>
      <p>Our school workshops are designed to be interactive and age-appropriate. For primary school children, we use stories, puppet shows, and colouring activities that teach kindness to animals. For older students, we dive deeper into animal behaviour, street safety around dogs, and the science of rabies prevention.</p>
      <p>"The most powerful moment is always the shelter visit," says Priya Iyer, our education coordinator. "When children meet the animals, hear their stories, and see the recovery process firsthand, something clicks. They go home and tell their parents, their neighbours, their friends."</p>
      <p>One of our proudest achievements is seeing former workshop participants return as teen volunteers. Aakash, now 16, attended a session in Class V. Today, he brings his classmates every Sunday to walk the shelter dogs. "I used to be scared of street dogs," he says. "Now I know they are just like us — they want to be loved."</p>
      <p>The programme is available free of charge to municipal and government schools. We also provide training for teachers to continue animal welfare education throughout the year. Our long-term goal is to see animal welfare included in the school curriculum at the state board level.</p>
      <p>If you are a teacher or school administrator interested in hosting a session, please reach out to us. Change begins in the classroom.</p>
    `.trim(),
    imageUrl: '1587402092301-725e37c70fd8',
    author: 'Priya Iyer',
    category: 'Community Education',
  },
  {
    slug: 'senior-dog-care-adoption-older-pets',
    title: 'Why Senior Dogs Make the Best Companions — And Why They Are Often Overlooked',
    date: '2026-02-14',
    excerpt:
      'Puppies get all the attention, but older dogs have a quiet wisdom that is easy to miss. This Valentine\'s Day, we celebrate the overlooked senior animals waiting for a second chance.',
    content: `
      <p>Walk into any shelter in India and you will see the same scene: the puppy corner is crowded with visitors, while the senior dogs lie quietly in their enclosures, watching with patient eyes. They have been waiting for months — sometimes years.</p>
      <p>At Paws for Change India, we have made it our mission to change this. Our "Silver Hearts" programme highlights senior dogs available for adoption, offering discounted adoption fees and lifetime medical support for adopters who open their homes to an older animal.</p>
      <p>So why should you consider adopting a senior dog? Let us count the ways. Senior dogs are typically already house-trained. They have outgrown the chewing, jumping, and boundless energy of puppyhood. They know how to behave indoors, they understand basic commands, and they are past the destructive phase that tests so many new pet parents.</p>
      <p>But more than that, senior dogs have an incredible capacity for gratitude. There is something profoundly moving about earning the trust of an older animal who has known hardship. The bond formed with a rescued senior dog is unlike any other.</p>
      <p>Consider the story of Buddy, a 10-year-old Indie who spent four years in our shelter. Everyone wanted the puppies and the young dogs. Buddy waited. And waited. Then the Kapoor family walked in — a retired couple who wanted a calm companion for their quiet home. The adoption was a perfect match. "He does not need five-kilometre walks," says Mrs. Kapoor. "He just wants to sit beside us while we read our newspapers. He is our shadow, and we would not have it any other way."</p>
      <p>Senior dogs do have higher medical needs, which is why our programme includes subsidised geriatric care. But the cost is small compared to the joy they bring. If you are thinking about adoption, please do not overlook the quiet ones in the back. They have so much love left to give.</p>
    `.trim(),
    imageUrl: '1537151625747-768eb6cf92b2',
    author: 'Ananya Sharma',
    category: 'Adoption Stories',
  },
];
