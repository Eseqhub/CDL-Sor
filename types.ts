
import React from 'react';

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  whatsapp?: string;
  image: string;
  verified: boolean;
  rating: number;
  lat?: number;
  lng?: number;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    features: string[];
    date?: string;
    location?: string;
    type: 'course' | 'event' | 'product';
    formType?: 'standard' | 'women_event' | 'growth_event';
    speakers?: { name: string; role: string; image: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode; 
  iconName?: string; 
  color: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; 
  date: string;
  image: string;
  category: string;
  author?: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  type: 'CLT' | 'Estágio' | 'PJ';
  location: string;
  date: string;
}

export type EventType = 'holiday' | 'business_anniversary' | 'birthday' | 'commemorative';

export interface CalendarEvent {
  id: string;
  date: string;
  fullDate?: string;
  title: string;
  description?: string;
  type: EventType;
  details?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

export interface BoardMember {
    id: string;
    name: string;
    role: string;
    image: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    department: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    date: string;
    image: string;
    count: number;
}

export interface TickerItem {
    id: string;
    source: string;
    headline: string;
    url: string;
    time: string;
}

export interface Partner {
    id: string;
    name: string;
    category: string;
    discount: string;
    image: string;
    phone: string;
    address?: string;
}

export enum FilterType {
  ALL = 'Todos',
  RETAIL = 'Comércio',
  SERVICES = 'Serviços',
  AGRO = 'Agronegócio',
  FOOD = 'Gastronomia',
  HEALTH = 'Saúde'
}

export type AppView = 'public' | 'login' | 'dashboard' | 'news-detail' | 'service-detail' | 'commercial-map' | 'product-detail';
