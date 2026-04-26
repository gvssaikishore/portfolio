---
title: Thinking Like a Product Manager - Strategy Framework
date: 2024-04-05
summary: A practical framework for thinking about product strategy. How I approach market sizing, competitive positioning, and go-to-market planning. Perfect for PMs, founders, and engineers who want to think strategically.
tags: ['product-strategy', 'go-to-market', 'framework', 'business']
draft: false
---

# Thinking Like a Product Manager: My Strategy Framework

Being a product manager (or thinking like one) is fundamentally about **making bets with imperfect information**.

Over the past year, I've developed a repeatable framework for thinking through product strategy. It's helped me structure presentations, make better decisions, and avoid building things nobody wants.

I call it the **SPACED Framework** (yes, I love acronyms).

## The SPACED Framework

### **S**ituation Analysis
Start with market reality, not your vision.

Key questions:
- What's the current market size (TAM)?
- What's growing and what's shrinking?
- Who's winning and why?
- What's changing in the market?

**Example (ShopWise)**:
- TAM: $4.2T global e-commerce market
- Growing: Price comparison tools (+35% YoY)
- Winning: Amazon (brand trust) and Honey (browser extension)
- Changing: Mobile shopping dominance, real-time notifications

### **P**roblem Definition
The most dangerous assumption: that you understand the problem.

Spend time with users. Not surveys - actual conversations.

**Bad Problem Statement**: "People waste time comparing prices"
**Good Problem Statement**: "B2C shoppers on flagship e-commerce sites abandon 40% of carts because they believe better prices exist elsewhere, but the cost of searching (time, friction) exceeds the expected savings."

The specific statement matters because it leads to different solutions:
- First version → build an aggregator
- Second version → integrate into existing checkout experience

### **A**ssumptions & Risks
Every strategy rests on assumptions. Explicitly list them.

For ShopWise:
- 🔴 **Critical Assumption**: Retailers will allow automated price scraping
- 🟡 **High Risk**: Prices change fast; can we keep up?
- 🟢 **Medium Risk**: Users will trust our price data
- 🟢 **Low Risk**: Mobile users want price comparison

Critical and high-risk assumptions need validation *before* you build.

### **C**ompetitive Positioning
You're never alone. How do you fit in the landscape?

I use a simple 2x2 matrix:

```
                Comprehensive
                    ↑
    Full Retailers   |    SuperPlatforms
    (CheapShark)     |    (Amazon)
    ────────────────┼────────────────→ Easy to Use
    Niche Specialists|    Our Space
    (Phone Specs)    |    (Simple Aggregation)
                     |
                  Simple
```

**Key insight**: Don't compete on someone else's strength. If Amazon has comprehensive + easy, compete on specialized + personalized.

ShopWise differentiator: **Simple + Comprehensive for specific verticals**

### **E**xecution Plan
Separate long-term vision from short-term bets.

**Year 1**: Validate problem with MVP (phone comparison)
**Year 2**: Expand to 3 categories, build mobile app
**Year 3**: Explore B2B (price intelligence for retailers)

Each phase has clear success metrics:
- Year 1: 50K users, 10+ retailers, retention >30%
- Year 2: 500K users, expand to fashion
- Year 3: 10K enterprise users, $1M ARR

### **D**ata-Driven Decisions
Everything is a hypothesis. Measure what matters.

**Not vanity metrics** (total users, page views):
```
❌ "We got 100K users" (could be fake traffic)
❌ "Average session is 5 minutes" (could be bots)
```

**Real metrics**:
```
✅ "30% of users completed a comparison and clicked to retailer"
✅ "Users come back 3x in their first week"
✅ "Mobile to desktop ratio is 70:30"
```

For ShopWise:
- Compare completion rate: 65% start, 42% complete (need work on middle funnel)
- Retailer click rate: 87% of completions click through (validation that product works)
- Retention: 15% of users return after 7 days (need better re-engagement)

## How I Use This Framework

### Quarterly Planning
Every quarter, I revisit each component:
- What changed in the **Situation**?
- Is our **Problem Definition** still accurate?
- Which **Assumptions** should we test?
- Are we **Competitive**?
- Is **Execution** on track?
- What do the **Data** tell us?

### Pitch Rehearsal
Before pitching to anyone (investors, stakeholders, team):
1. Run through SPACED mentally
2. Identify gaps in my thinking
3. Prepare for hard questions

### Hiring
I use this framework to assess PMs:
"Walk me through how you'd approach growing this 10x."

Good PMs naturally structure their thinking in problem → market → competition → execution.

## The Framework in Action: Real Example

**Problem**: Investors asked me "Why will ShopWise win?"

**My thought process**:
- **S**ituation: Market is fragmented, no winner yet
- **P**roblem: My solution is targeted (phones first) not horizontal
- **A**ssumptions: Assuming retention >25% by Q2
- **C**ompetition: Competing on UX, not features
- **E**xecution: Plan to expand categories based on retention data
- **D**ata: Phone comparison has 42% completion rate (vs 15-20% for broader product)

**My Answer**: "We're not trying to be Amazon. We're trying to be the best way to compare phones this year, then expand to categories where comparison creates value. Our data shows phone comparison has 3x better conversion than generic products, so we're building deep not wide."

This answer works because it shows:
- Market understanding (not naive)
- Focused strategy (not trying to do everything)
- Data backing (not just intuition)
- Clear next steps (not vague vision)

## Common Mistakes I See

### ❌ Mistake 1: Skipping Situation Analysis
"Our app is amazing, everyone will love it"
→ Without understanding the market, you're building in a vacuum

### ❌ Mistake 2: Solving Problems That Don't Exist
"Users need this feature"
→ Did you ask them? Did they ask you?

### ❌ Mistake 3: Ignoring Competition
"Our competitor is doing it wrong"
→ But they're getting funded and growing. Why?

### ❌ Mistake 4: Hiding from Assumptions
"This will definitely work"
→ Every product has risky assumptions. Better to acknowledge than ignore them.

### ❌ Mistake 5: Decision Paralysis
"We need perfect data before deciding"
→ You'll never have perfect data. Make bets and learn.

## What I'm Still Learning

This framework works, but I'm evolving it:

1. **Network Effects**: How does value change as more users join?
2. **Retention Loops**: What brings users back?
3. **Unit Economics**: Do we make money from each user?
4. **Speed of Learning**: Can we test faster?

I think the best frameworks adapt with experience. If this framework isn't working for me in 6 months, I'll change it.

## Your Exercise

Take a product you use regularly (or want to build):

1. **Situation**: What's the market size? Who's winning?
2. **Problem**: Interview 3 users about their pain points
3. **Assumptions**: What 5 things must be true for this to work?
4. **Competition**: Who else is solving this? How are they different?
5. **Execution**: What's the Year 1 plan?
6. **Data**: What would success look like in 3 months?

You'll either validate that this product has legs, or you'll save yourself 6 months of building the wrong thing.

---

Have thoughts on strategy frameworks? Been through this process? [Let's talk](/about#contact).

---

*Recommended books for PMs*:
- "Inspired" by Marty Cagan
- "Good Strategy, Bad Strategy" by Richard Rumelt
- "The Art of Product Management" by Holly Larocco & Martin Eriksson
- "Lean Analytics" by Alistair Croll & Benjamin Yoskovitz

*Recommended frameworks*:
- Product Strategy Canvas
- OKRs (Objectives & Key Results)
- User Story Mapping
- Product Trio Framework
