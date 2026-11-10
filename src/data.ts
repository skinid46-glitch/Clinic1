export const CLINIC = {
  name: 'The Clinic',
  phone: '+919000000000',
  whatsapp: '919000000000',
  email: 'care@theclinic.example',
  address: 'Level 4, Atrium Tower, Marine Drive, Mumbai 400020',
  hours: '9:00 AM – 8:00 PM',
  mapsQuery: 'Marine+Drive+Mumbai',
};

export type Concern = {
  id: string;
  label: string;
  desc: string;
  base: number;
  icon: 'recur' | 'patchy' | 'fall' | 'crown';
};

export const CONCERNS: Concern[] = [
  { id: 'recur', label: 'Receding Hairline', desc: 'Temple & frontal thinning', base: 38000, icon: 'recur' },
  { id: 'patchy', label: 'Patchy Baldness', desc: 'Spot bald areas on scalp', base: 56000, icon: 'patchy' },
  { id: 'fall', label: 'Severe Hair Fall', desc: 'Diffuse shedding & density loss', base: 24000, icon: 'fall' },
  { id: 'crown', label: 'Crown Thinning', desc: 'Vertex region density loss', base: 42000, icon: 'crown' },
];

export type Treatment = {
  id: string;
  label: string;
  desc: string;
  multiplier: number;
  sessions: string;
  icon: 'prp' | 'meso' | 'transplant' | 'laser';
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'prp',
    label: 'PRP Therapy',
    desc: 'Platelet-Rich Plasma restoration',
    multiplier: 1,
    sessions: '3 sessions / month',
    icon: 'prp',
  },
  {
    id: 'meso',
    label: 'Advanced Mesotherapy',
    desc: 'Vitamin-rich follicle stimulation',
    multiplier: 1.4,
    sessions: '6 sessions over 8 weeks',
    icon: 'meso',
  },
  {
    id: 'transplant',
    label: 'Hair Transplant Consultation',
    desc: 'FUE/DHI surgical evaluation plan',
    multiplier: 2.8,
    sessions: 'Single procedure',
    icon: 'transplant',
  },
  {
    id: 'laser',
    label: 'Low-Level Laser Therapy',
    desc: 'FDA-cleared clinical laser cap',
    multiplier: 1.2,
    sessions: '12 sessions over 3 months',
    icon: 'laser',
  },
];

export type Testimonial = {
  name: string;
  treatment: string;
  rating: number;
  text: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rahul M.',
    treatment: 'PRP Therapy',
    rating: 5,
    text: 'After three months my hairline looked fuller than it had in years. The trichologist explained every step — genuinely the most professional clinic I have visited.',
    initials: 'RM',
  },
  {
    name: 'Priya S.',
    treatment: 'Advanced Mesotherapy',
    rating: 5,
    text: 'I was losing handfuls of hair post-pregnancy. The mesotherapy sessions completely stopped the shedding and new growth is clearly visible now.',
    initials: 'PS',
  },
  {
    name: 'Arjun K.',
    treatment: 'Hair Transplant (FUE)',
    rating: 5,
    text: 'The FUE procedure was painless and the results are incredible. Eight months in and nobody can tell I ever had a transplant. Worth every rupee.',
    initials: 'AK',
  },
  {
    name: 'Sneha R.',
    treatment: 'LLLT + Mesotherapy',
    rating: 5,
    text: 'Combined laser and meso protocol worked wonders for my crown thinning. The clinic is spotless, premium, and the staff are incredibly caring.',
    initials: 'SR',
  },
  {
    name: 'Vikram D.',
    treatment: 'PRP Therapy',
    rating: 5,
    text: 'Transparent pricing, no hard selling, and real results. The before/after photos speak for themselves. Highly recommend The Clinic.',
    initials: 'VD',
  },
  {
    name: 'Anita J.',
    treatment: 'Hair Transplant Consultation',
    rating: 5,
    text: 'They actually advised me NOT to do a transplant yet and started with PRP instead. Honest, ethical advice — exactly what you want from a medical clinic.',
    initials: 'AJ',
  },
  {
    name: 'Karan T.',
    treatment: 'Advanced Mesotherapy',
    rating: 4,
    text: 'Six sessions in and the density improvement is remarkable. The scheduling app and reminders make the whole process effortless.',
    initials: 'KT',
  },
  {
    name: 'Meera N.',
    treatment: 'LLLT',
    rating: 5,
    text: 'Non-invasive and zero downtime. The laser therapy room is state of the art. My hair fall reduced by 80% within the first month.',
    initials: 'MN',
  },
];

export const STATS = [
  { value: '12,000+', label: 'Patients Treated' },
  { value: '94%', label: 'Visible Regrowth Rate' },
  { value: '15+', label: 'Years of Expertise' },
  { value: '4.9★', label: 'Average Patient Rating' },
];

export const IMAGES = {
  heroBg: 'https://images.pexels.com/photos/7108324/pexels-photo-7108324.jpeg?auto=compress&cs=tinysrgb&w=1920',
  reception:
    'https://images.pexels.com/photos/6809658/pexels-photo-6809658.jpeg?auto=compress&cs=tinysrgb&w=1600',
  laser: 'https://images.pexels.com/photos/7108168/pexels-photo-7108168.jpeg?auto=compress&cs=tinysrgb&w=1600',
  laser2: 'https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg?auto=compress&cs=tinysrgb&w=1600',
  consult:
    'https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&w=1600',
  consult2:
    'https://images.pexels.com/photos/39192333/pexels-photo-39192333.jpeg?auto=compress&cs=tinysrgb&w=1600',
  follicle:
    'https://images.pexels.com/photos/28994388/pexels-photo-28994388.jpeg?auto=compress&cs=tinysrgb&w=1600',
  follicle2:
    'https://images.pexels.com/photos/28994390/pexels-photo-28994390.jpeg?auto=compress&cs=tinysrgb&w=1600',
  before:
    'https://images.pexels.com/photos/7298880/pexels-photo-7298880.jpeg?auto=compress&cs=tinysrgb&w=1200',
  after:
    'https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1200',
  staff: 'https://images.pexels.com/photos/4269274/pexels-photo-4269274.jpeg?auto=compress&cs=tinysrgb&w=1600',
};
