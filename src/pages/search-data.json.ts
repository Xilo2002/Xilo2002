import type { APIRoute } from 'astro';

// Sample search data - in a real app, this would come from your CMS or markdown files
const searchData = [
  {
    title: "Top 10 Smart Home Devices for 2024",
    description: "Discover the latest smart home innovations that will transform your living space. From voice assistants to automated lighting systems.",
    url: "/blog/top-10-smart-home-devices-2024",
    category: "Smart Home",
    tags: ["smart home", "automation", "IoT", "technology"]
  },
  {
    title: "Best Budget Laptops Under $500",
    description: "Find the perfect affordable laptop without compromising on performance. Our comprehensive review of budget-friendly options.",
    url: "/blog/best-budget-laptops-under-500",
    category: "Electronics",
    tags: ["laptops", "budget", "computers", "electronics"]
  },
  {
    title: "Kitchen Gadgets That Actually Work",
    description: "Cut through the marketing hype and discover kitchen tools that genuinely make cooking easier and more enjoyable.",
    url: "/blog/kitchen-gadgets-that-work",
    category: "Kitchen",
    tags: ["kitchen", "gadgets", "cooking", "appliances"]
  },
  {
    title: "Fitness Tracker Comparison 2024",
    description: "Compare the latest fitness trackers from Apple, Fitbit, and Samsung. Find the perfect device for your health goals.",
    url: "/blog/fitness-tracker-comparison-2024",
    category: "Health & Fitness",
    tags: ["fitness", "health", "wearables", "tracking"]
  }
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};