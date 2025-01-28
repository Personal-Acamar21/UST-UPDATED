export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  maxParticipants: number;
  price: number;
  registrationLink: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Sponsor {
  title: string;
  logo: string;
  website: string;
  role: string;
  active: boolean;
  order: number;
}

export interface CampClinic {
  id: string;
  title: string;
  dates: string[];
  ageGroups: string[];
  price: number;
  location: string;
}

export interface Tryout {
  id: string;
  title: string;
  dates: Array<{ date: string; time: string }>;
  ageGroups: string[];
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}