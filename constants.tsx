
import React from 'react';
import { 
  Scissors, 
  UserCircle, 
  Clock, 
  Sparkles, 
  MapPin, 
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';
import { Service, Review, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: "Elite Barbers NYC",
  address: "782 Lexington Ave, New York, NY 10065",
  phone: "+1 212-308-6660",
  rating: 4.9,
  reviewCount: 2462,
  hours: "9:30 AM - Late",
  location: "Lexington Ave",
};

export const SERVICES: Service[] = [
  {
    id: 'haircut',
    name: "Classic Elite Haircut",
    price: "$80 - $90",
    duration: "45 min",
    description: "Precision cutting tailored to your head shape and style preference. Includes wash and style.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 'shave',
    name: "Luxury Hot Shave",
    price: "$70+",
    duration: "30 min",
    description: "Traditional straight razor shave with hot towels, essential oils, and post-shave balm.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 'grooming',
    name: "Full Grooming Session",
    price: "$150+",
    duration: "90 min",
    description: "The works: Haircut, hot shave, ear & nose wax, and scalp massage.",
    icon: <UserCircle className="w-6 h-6" />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need an appointment?",
    answer: "While we welcome walk-ins, we highly recommend booking in advance to ensure your preferred time and barber, especially on weekends."
  },
  {
    question: "How long should I expect my visit to take?",
    answer: "Most haircuts take 45 minutes. A full grooming session can take up to 90 minutes of dedicated precision work."
  },
  {
    question: "Where exactly are you located?",
    answer: "Find us at 782 Lexington Ave, situated within Baronness, in the heart of Manhattan."
  },
  {
    question: "Are you LGBTQ+ friendly?",
    answer: "Absolutely. We pride ourselves on being an inclusive space for everyone in the NYC community."
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: "Mohit Kumar",
    rating: 5,
    content: "Visited Elite Barbers for a full grooming session. The place is clean, premium, and Danny handled my session with steady precision. Best detail-oriented service in the city.",
    date: "1 month ago"
  },
  {
    id: '2',
    author: "Mohammad Talha",
    rating: 5,
    content: "Found the best barber I was looking for. Not only the best haircut but the behavior was amazing. Highly worth it!",
    date: "2 weeks ago"
  }
];
