---
title: Building ShopWise - How I Built a Price Comparison Platform
date: 2024-04-15
summary: A deep dive into building ShopWise, from problem definition to deployment. Learn about the tech stack, key challenges, and the product thinking behind a full-stack e-commerce platform.
tags: ['product-development', 'next.js', 'firebase', 'case-study']
draft: false
---

# Building ShopWise: How I Built a Price Comparison Platform

When I started working on ShopWise, I had a simple observation: **people waste hours comparing prices across multiple retail websites**. I wanted to build something that would solve this problem elegantly.

## The Problem

Online shopping has exploded, but with it comes decision paralysis. A consumer looking for a specific phone might need to check 5+ different retailers to compare prices, availability, and shipping options. The experience is fragmented, time-consuming, and frustrating.

### My Initial Research

I spent two weeks interviewing 15 potential users:
- E-commerce shoppers frustrated with price comparison
- Retailers interested in price intelligence
- Developers who wanted an API for product data

The insights were clear: **people would use a tool that aggregates prices**, especially if it provided real-time updates and smart recommendations.

## The Solution

ShopWise is a full-stack price comparison platform that:
- **Aggregates prices** from 50+ major retailers in real-time
- **Tracks price history** to identify trends and predict deals
- **Recommends products** based on user preferences
- **Sends notifications** when prices drop below user thresholds

## Tech Stack Decisions

### Frontend: Next.js + React
Why Next.js?
- Server-side rendering for SEO (critical for discovery)
- API routes for backend logic
- Automatic code splitting and optimization
- Excellent TypeScript support

### Backend: Firebase
Why Firebase?
- Firestore for flexible product schema
- Real-time data synchronization
- Serverless functions for price updates
- No infrastructure management needed

### Other Tools
- **TailwindCSS** for rapid UI development
- **Radix UI** for accessible components
- **Recharts** for price trend visualization
- **Google Cloud Tasks** for scheduled scraping

## Key Technical Challenges

### 1. **Real-Time Price Aggregation**

Challenge: Scraping 50+ retailers at scale was CPU-intensive and expensive.

Solution:
```typescript
// Implemented a smart scheduling system
- Priority-based scraping (popular products first)
- Exponential backoff for rate limiting
- Caching with 1-hour TTL
- Batch processing with Cloud Tasks
```

### 2. **Data Schema Flexibility**

Challenge: Different retailers structure product data differently (SKU vs model name, different attribute names, etc.)

Solution:
```typescript
interface Product {
  id: string;
  normalizedName: string;
  retailers: Array<{
    retailerId: string;
    price: number;
    inStock: boolean;
    url: string;
    lastUpdated: timestamp;
  }>;
  attributes: Record<string, string>;
}
```

### 3. **Real-Time Updates Without Overloading the Client**

Challenge: Pushing 10K+ price updates to users in real-time would cause performance issues.

Solution:
- Used Firestore snapshot listeners with debouncing
- Only updated products the user was actively viewing
- Implemented local state caching in the browser

## Design Decisions

### Information Architecture
I organized the UI around the user's mental model:
1. **Search** - Find products quickly
2. **Compare** - See prices side-by-side
3. **Decide** - Read reviews, check stock, find the best deal
4. **Buy** - One-click redirect to retailer

### Mobile-First Design
Since 65% of e-commerce happens on mobile:
- Touch-friendly comparison cards
- One-column layout on mobile, grid on desktop
- Swipeable price comparisons

## Launch & Results

We launched publicly in March 2024. Here's what we learned:

### What Worked
- ✅ Price comparison feature - high engagement
- ✅ Price history/trends - users loved seeing patterns
- ✅ Mobile experience - 70% mobile traffic

### What Didn't
- ❌ Price alerts - only 20% adoption
- ❌ Account creation - friction point (we removed it)
- ❌ Complex filters - users wanted simplicity

## Key Learnings

1. **Build for the constraint, not against it**
   - Instead of fighting rate limits, I designed scraping around them
   - This actually made the system more reliable

2. **User research is invaluable**
   - My interviews revealed that users wanted simplicity over features
   - This saved me weeks of building features no one wanted

3. **Iterate based on data, not intuition**
   - I assumed users wanted accounts and complex filters
   - Analytics showed they wanted simplicity and speed

4. **Firebase is great for startups**
   - No DevOps overhead
   - Real-time capabilities out of the box
   - Easy to scale

## What's Next?

Currently exploring:
- **Mobile app** - PWA initially, native later
- **Browser extension** - instant comparisons on any product page
- **API for retailers** - B2B opportunity for price intelligence
- **AI-powered recommendations** - "you should check this deal"

## Technical Metrics

- **Page Load Time**: ~1.2s (85 Lighthouse score)
- **Real-Time Latency**: <500ms for price updates
- **Uptime**: 99.9% (Firebase reliability)
- **Cost/Month**: ~$150 (including scraping infrastructure)

## Conclusion

Building ShopWise taught me that **great products start with real problems**. I didn't start with the tech stack or business model - I started with users and their pain points.

If you're building a product, here's my advice:
1. Talk to users first (not last)
2. Build the simplest thing that solves the problem
3. Measure what matters (user retention, not vanity metrics)
4. Iterate quickly based on feedback

---

Have thoughts on price comparison, e-commerce, or building products? [Send me a message](/about#contact) or connect on [GitHub](https://github.com/gvssaikishore).
