export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'What is Paws for Change India and what do you do?',
    answer: `
      <p>Paws for Change India is a registered non-profit organisation dedicated to the rescue, rehabilitation, and rehoming of abandoned and injured animals across India. Founded in Mumbai, we now operate across five cities — Mumbai, Pune, Delhi, Bangalore, and Chennai. Our programmes include emergency rescue operations, veterinary medical care, sterilisation drives, adoption services, community education, and disaster response.</p>
      <p>We are registered under Section 8 of the Companies Act, 2013, and are recognised by the Animal Welfare Board of India. All donations to Paws for Change India are eligible for tax exemption under Section 80G of the Income Tax Act.</p>
    `.trim(),
  },
  {
    question: 'How can I adopt an animal from your organisation?',
    answer: `
      <p>Adopting from Paws for Change India is a straightforward but thorough process designed to ensure the best match for both you and the animal. Here is how it works:</p>
      <ol>
        <li><strong>Browse available animals:</strong> Visit our adoption page or attend one of our monthly adoption events to meet animals looking for homes.</li>
        <li><strong>Submit an application:</strong> Fill out our adoption application form with details about your home, lifestyle, and experience with pets.</li>
        <li><strong>Home visit and counselling:</strong> One of our adoption counsellors will schedule a home visit to ensure your space is safe and suitable. This is also an opportunity for you to ask any questions.</li>
        <li><strong>Meet and greet:</strong> We arrange a meeting between you and the animal you are interested in. This can take multiple sessions to ensure compatibility.</li>
        <li><strong>Adoption fee and paperwork:</strong> Once approved, you pay a nominal adoption fee that covers the cost of sterilisation, vaccinations, and microchipping. You sign an adoption agreement committing to the lifelong care of the animal.</li>
        <li><strong>Post-adoption support:</strong> We stay in touch! Our team is available for behavioural counselling, veterinary referrals, and any support you need.</li>
      </ol>
      <p>The entire process typically takes 1–2 weeks. We prioritise the well-being of the animal above all else, so please be patient if we ask detailed questions.</p>
    `.trim(),
  },
  {
    question: 'How can I donate to Paws for Change India?',
    answer: `
      <p>Your support makes every rescue possible. You can donate to us in several ways:</p>
      <ul>
        <li><strong>Online:</strong> Use the donation form on our website to make a one-time or monthly contribution via UPI, net banking, credit/debit card, or international payment methods.</li>
        <li><strong>Bank transfer:</strong> Direct transfers to our current account can be made using the bank details provided on our Donate page.</li>
        <li><strong>Cheque or demand draft:</strong> Make payable to "Paws for Change India" and mail it to our registered office address.</li>
        <li><strong>Payroll giving:</strong> Many companies in India offer payroll giving programmes where your donation is deducted directly from your salary. Check with your HR department if this option is available.</li>
      </ul>
      <p>All donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961. You will receive a receipt and a 80G certificate for your records.</p>
    `.trim(),
  },
  {
    question: 'Can I volunteer with your organisation?',
    answer: `
      <p>Absolutely! Volunteers are the backbone of our organisation. We welcome volunteers in various capacities:</p>
      <ul>
        <li><strong>Shelter volunteering:</strong> Help with feeding, cleaning enclosures, walking dogs, socialising animals, and assisting our veterinary team.</li>
        <li><strong>Foster care:</strong> Open your home temporarily to animals recovering from surgery, orphaned puppies and kittens, or animals needing a break from shelter life.</li>
        <li><strong>Event volunteering:</strong> Help organise and staff our adoption drives, fundraising events, and community education workshops.</li>
        <li><strong>Professional skills:</strong> We need photographers, videographers, graphic designers, content writers, and legal professionals who can contribute their expertise.</li>
        <li><strong>Corporate volunteering:</strong> We organise group volunteering days for corporate teams. Contact us to schedule a session.</li>
      </ul>
      <p>To get started, fill out our volunteer registration form on the Get Involved page. We will invite you for an orientation session and match you with opportunities that suit your interests and availability.</p>
    `.trim(),
  },
  {
    question: 'What is CNVR and why is it important?',
    answer: `
      <p>CNVR stands for <strong>Catch-Neuter-Vaccinate-Release</strong>. It is the internationally accepted, scientifically proven method for humane stray dog population management, endorsed by the World Health Organization, World Organisation for Animal Health, and the Animal Welfare Board of India.</p>
      <p>Here is how it works: Stray dogs are humanely trapped by trained handlers, brought to a sterilisation camp where they are neutered/spayed by a qualified veterinarian, vaccinated against rabies, and then released back into their original territory — usually within 24 to 48 hours.</p>
      <p>CNVR is effective because sterilised dogs continue to guard their territory, preventing unsterilised dogs from moving in. Over time, the population stabilises and naturally declines. It also creates herd immunity against rabies when vaccination coverage is high enough.</p>
      <p>This is the only method that balances animal welfare with community health. Culling (mass killing of stray dogs) is illegal in India under the Prevention of Cruelty to Animals Act, 1960, and has been proven ineffective — killed animals are simply replaced by others from surrounding areas.</p>
    `.trim(),
  },
  {
    question: 'How are my donations used?',
    answer: `
      <p>Transparency is a core value at Paws for Change India. Here is a breakdown of how every rupee is used:</p>
      <ul>
        <li><strong>60% — Direct animal care:</strong> Veterinary treatment, medicines, surgeries, food, shelter maintenance, and sterilisation camps.</li>
        <li><strong>20% — Rescue operations:</strong> Emergency hotline operations, rescue vehicle maintenance, fuel, equipment, and responder training.</li>
        <li><strong>10% — Community education:</strong> School programmes, community workshops, and awareness materials.</li>
        <li><strong>10% — Administration:</strong> Office rent, utilities, salaries for core staff, legal compliance, and fundraising costs.</li>
      </ul>
      <p>We publish an annual impact report with audited financial statements on our website. You can also subscribe to our newsletter to receive quarterly updates on how your contributions are making a difference.</p>
    `.trim(),
  },
  {
    question: 'What should I do if I find an injured animal on the street?',
    answer: `
      <p>If you find an injured or distressed animal on the street, here is what to do:</p>
      <ol>
        <li><strong>Stay calm and assess safety.</strong> Ensure the scene is safe for you to approach. If the animal is on a busy road, try to alert oncoming traffic. Do not put yourself in danger.</li>
        <li><strong>Call our emergency hotline.</strong> Reach us at the number listed on our website. Provide your exact location, describe the animal's condition, and stay on the line until our team arrives if possible.</li>
        <li><strong>Do not feed or water the animal</strong> if it is severely injured — it may need emergency surgery and an empty stomach is safer for anaesthesia.</li>
        <li><strong>If the animal is approachable and safe to handle,</strong> you can cover it gently with a cloth or towel to keep it warm and calm. Speak in a soothing voice. Do not make sudden movements.</li>
        <li><strong>If you cannot wait for our team,</strong> transport the animal to the nearest veterinary clinic. Be extremely careful — injured animals may bite out of fear even if normally friendly. Use a rigid surface (like a cardboard sheet or board) as a stretcher.</li>
      </ol>
      <p>If you cannot reach us immediately, contact your local municipal animal control or a nearby veterinary clinic. Every minute counts when an animal is injured.</p>
    `.trim(),
  },
  {
    question: 'Can I sponsor a specific animal at your shelter?',
    answer: `
      <p>Yes, absolutely! Our Animal Sponsorship Programme allows you to directly support the care of a specific animal at our shelter. Here is how it works:</p>
      <p>Browse the animals available for sponsorship on our website. Each animal profile includes their story, medical needs, and monthly care cost. Sponsorship amounts range from ₹500 to ₹5,000 per month depending on the animal's needs — animals requiring ongoing medication or special diet cost more to care for.</p>
      <p>As a sponsor, you will receive:</p>
      <ul>
        <li>Monthly photo and health updates of your sponsored animal</li>
        <li>A personalised digital certificate of sponsorship</li>
        <li>Invitation to exclusive shelter visit days</li>
        <li>Your name featured on our website's sponsor wall</li>
      </ul>
      <p>Sponsorship is month-to-month with no long-term commitment. You can cancel anytime. Your sponsorship directly covers food, veterinary care, and enrichment for that individual animal.</p>
    `.trim(),
  },
  {
    question: 'Do you accept international donations?',
    answer: `
      <p>Yes, we welcome international donations! While we primarily operate in India, we have animal lovers from around the world who support our work. International donations can be made via:</p>
      <ul>
        <li><strong>International bank transfer:</strong> We have a dedicated foreign currency account for international wire transfers. Contact us for the SWIFT/IFSC details.</li>
        <li><strong>Online payment gateways:</strong> Our website's donation form accepts international credit cards and PayPal.</li>
        <li><strong>Third-party platforms:</strong> We are listed on GlobalGiving and GiveIndia, both of which accept international donations.</li>
      </ul>
      <p>Please note that international donors are not eligible for Section 80G tax benefits under Indian tax law, as these apply only to Indian taxpayers. However, your donation may be tax-deductible in your home country if the platform you use provides that facility. We recommend checking with your tax advisor.</p>
    `.trim(),
  },
  {
    question: 'How can my company partner with Paws for Change India?',
    answer: `
      <p>Corporate partnerships are vital to scaling our impact. We work with businesses of all sizes through several partnership models:</p>
      <ul>
        <li><strong>Cause marketing:</strong> A percentage of your product sales is donated to our organisation. We co-brand marketing materials and promote the partnership across our channels.</li>
        <li><strong>Employee engagement:</strong> We organise volunteering days, payroll giving programmes, and在公司内部 awareness sessions for your employees.</li>
        <li><strong>Pro bono services:</strong> Businesses in veterinary, pet care, logistics, printing, photography, and legal services can contribute their expertise at no cost.</li>
        <li><strong>Event sponsorship:</strong> Sponsor one of our adoption events, sterilisation camps, or fundraising galas in exchange for prominent brand visibility.</li>
        <li><strong>Annual CSR partnership:</strong> We design custom programmes that align with your company's Corporate Social Responsibility (CSR) objectives under the Companies Act, 2013.</li>
      </ul>
      <p>To explore partnership opportunities, please reach out to our partnerships team through the Contact page. We will schedule a call to understand your goals and design a partnership that creates meaningful impact for animals.</p>
    `.trim(),
  },
];
