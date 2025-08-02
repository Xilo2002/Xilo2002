import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

// Categories collection schema
const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    colorClass: z.string().default('bg-blue-100 text-blue-800'),
    featured: z.boolean().default(false),
    productCount: z.number().default(0),
  }),
});

// Reviews collection schema
const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.string(),
    rating: z.number().min(1).max(5),
    price: z.string(),
    amazonUrl: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    bestFor: z.string(),
    author: z.string(),
    publishDate: z.date(),
  }),
});

// Site settings collection schema
const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    email: z.string(),
    social: z.object({
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
    }),
  }),
});

// Navigation collection schema
const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    header: z.array(z.object({
      name: z.string(),
      url: z.string(),
      order: z.number(),
    })),
    footer: z.object({
      quickLinks: z.array(z.object({
        name: z.string(),
        url: z.string(),
      })),
      legal: z.array(z.object({
        name: z.string(),
        url: z.string(),
      })),
    }),
  }),
});

// Homepage sections collection schema
const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      primaryCta: z.object({
        text: z.string(),
        url: z.string(),
      }),
      secondaryCta: z.object({
        text: z.string(),
        url: z.string(),
      }),
    }),
    featuredProduct: z.object({
      badge: z.string(),
      badgeIcon: z.string(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      ctaText: z.string(),
      ctaUrl: z.string(),
      price: z.string(),
    }),
    categories: z.array(z.object({
      name: z.string(),
      icon: z.string(),
      count: z.number(),
      colorClass: z.string(),
      description: z.string(),
    })),
    whyChooseUs: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      colorClass: z.string(),
    })),
    stats: z.array(z.object({
      number: z.string(),
      label: z.string(),
      icon: z.string(),
    })),
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  type: 'data',
  schema: z.object({
    email: z.string(),
    phone: z.string().optional(),
    address: z.string().optional(),
    socialMedia: z.object({
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
    }),
    contactForm: z.object({
      enabled: z.boolean(),
      emailTo: z.string(),
      subjects: z.array(z.string()),
    }),
  }),
});

export const collections = {
  'blog': blogCollection,
  'categories': categoriesCollection,
  'reviews': reviewsCollection,
  'settings': settingsCollection,
  'navigation': navigationCollection,
  'homepage': homepageCollection,
  'contact': contactCollection,
};