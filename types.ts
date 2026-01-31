
export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
