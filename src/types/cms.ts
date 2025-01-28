export interface CMSEvent {
  id: string;
  title: string;
  image: string;
  fullImage?: string;
  startDate: string;
  endDate: string;
  venue: string;
  description: string;
  type: 'Tournament' | 'Camp' | 'Clinic' | 'Tryout' | 'Special Event' | 'Training';
  ageGroups: string[];
  price: {
    amount: number;
    currency: string;
    note?: string;
  };
  schedule: {
    dates: string[];
    times?: {
      group?: string;
      time: string;
    }[];
  }[];
  features: string[];
  coaches?: {
    name: string;
    role: string;
    image: string;
    bio: string;
  }[];
  maxParticipants: number;
  registrationDeadline: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  contact?: {
    email: string;
    phone: string;
  };
}