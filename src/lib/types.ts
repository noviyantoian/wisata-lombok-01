export type TripType = "open_trip" | "private_trip";
export type TripCategory = "snorkeling" | "trekking" | "city_tour" | "custom";

export interface ItineraryStep {
  title: string;
  detail: string;
}

export interface TourPackage {
  id: string;
  name: string;
  type: TripType;
  category: TripCategory;
  duration: string; // "3 Hari 2 Malam"
  pricePerPerson: number; // 899000
  image: string; // /images/...
  description: string; // paragraf detail
  highlights: string[]; // max 4 items
  includes: string[];
  excludes: string[];
  itinerary: ItineraryStep[];
  meetingPoint: string;
  coverEmoji: string;
  isFeatured: boolean;
  badge?: string; // e.g. "Terpopuler"
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  span?: "tall" | "wide"; // bento hint
  description: string;
  activities: string[];
  bestTime: string;
  travelTime: string; // dari pusat kota/bandara
  relatedPackageIds: string[];
}

export interface Testimonial {
  name: string;
  origin: string;
  trip: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface BookingData {
  packageId: string;
  packageName: string;
  packagePrice: number | "custom";
  duration: string;
  pax: string;
  departureDate: string;
  name: string;
  whatsapp: string;
  email?: string;
  city: string;
  notes?: string;
  referralSource?: string;
  estimatedTotal?: number; // pricePerPerson × representative pax
}
