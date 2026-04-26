---
title: The Art of Building Prototypes - Learning Through Making
date: 2024-04-10
summary: Why prototyping is essential for product thinking. I share how building quick prototypes has shaped my approach to problem-solving and product design.
tags: ['product-design', 'prototyping', 'learning', 'frameworks']
draft: false
---

# The Art of Building Prototypes: Learning Through Making

Over the past year, I've built dozens of prototypes - from quick phone comparison tools to interactive strategy presentations. Each one taught me something different about product design, user behavior, and what actually matters when building software.

This post is about why I believe **prototyping is the best way to learn product thinking**.

## What is a Prototype (to me)?

A prototype isn't necessarily pretty or production-ready. It's a **working hypothesis about how users might interact with a solution**.

My prototypes range from:
- **Explorations**: "What if comparison worked like this?"
- **Validations**: "Do users actually want this feature?"
- **Showcases**: "Here's how this could work"

The key: they're all *functional* enough to learn from.

## Why Prototypes Beat Wireframes

I used to spend weeks in Figma making beautiful wireframes. Then I'd show them to users and... nothing really changed. Users would nod politely, but the insights were surface-level.

Prototypes are different because:

1. **Users interact differently with live interfaces**
   - A wireframe tells you what to do. A prototype reveals how people actually behave.
   - I've seen users click where I never expected.

2. **You discover edge cases faster**
   - What happens when there are 100 results vs 3?
   - What's the experience on mobile vs desktop?
   - Prototypes force you to think through these details.

3. **You can iterate quickly**
   - Changing a Figma design takes 20 minutes and feels permanent
   - Changing code takes 2 minutes and feels temporary
   - This psychological difference matters for iteration

## My Prototyping Philosophy

### 1. Speed Over Polish
I spend maybe 4-8 hours per prototype. The goal isn't perfection - it's learning.

```typescript
// Example: I don't optimize, I validate
// This prototype code is intentionally simple
const phones = [
  { name: 'iPhone 15', price: 999, retailer: 'Apple' },
  { name: 'iPhone 15', price: 929, retailer: 'Amazon' },
  // ... instead of fetching from an API
];
```

### 2. Feature Over Fidelity
I care about interaction patterns, not pixel-perfect design. If I can get the user behavior right, design is easy to improve.

### 3. Breadth Over Depth
I'd rather build 5 different prototypes (each exploring a different idea) than 1 ultra-polished prototype.

## Three Prototypes That Changed My Thinking

### Prototype 1: Phone Comparison (The Layout Experiment)

**What I wanted to test**: How do users compare complex products?

I built 3 different layouts:
- **Layout A**: Traditional side-by-side table
- **Layout B**: Card-based with scrollable specs
- **Layout C**: Interactive toggle between phones

**What I learned**:
- Users overwhelmingly preferred Layout C (toggle)
- The table layout felt too corporate
- Card layout had too much scrolling

This taught me: **comparison isn't about showing everything, it's about showing what matters right now**.

### Prototype 2: Business Model Canvas (Interactive vs Static)

**What I wanted to test**: Should a BMC be interactive or static?

I built it interactive (hover to reveal, click to expand) vs the traditional printed canvas.

**What I learned**:
- Interactive BMC kept users engaged 3x longer
- Users wanted to understand *relationships between components*
- The traditional layout didn't surface these relationships well

This taught me: **interactivity isn't just pretty, it can make understanding easier**.

### Prototype 3: Campaign Generator (Testing AI)

**What I wanted to test**: How do users react to AI-generated content?

I built a wizard that generated marketing campaigns using Google Genkit.

**What I learned**:
- Users trusted the output more when they *understood the input*
- They wanted to see the process (thinking animation) not just the result
- They wanted minor edits, not complete regeneration

This taught me: **users want to collaborate with AI, not just consume from it**.

## The Biggest Lesson: Assumptions Are Wrong

Before each prototype, I write down my assumptions:

**Prototype 1 Assumptions:**
- ❌ Users want to see all specs at once (wrong - too much info)
- ✅ Comparison should be fast (correct)
- ✅ Price is the #1 factor (correct)

**Prototype 2 Assumptions:**
- ❌ BMC is too complex to be interactive (wrong - users loved it)
- ✅ Visual layout matters (correct)
- ❌ Users understand all 9 components equally (wrong - some were confusing)

**Prototype 3 Assumptions:**
- ✅ AI-generated content is useful (correct)
- ❌ Generating multiple options is valuable (wrong - one good option > many mediocre ones)
- ❌ Users trust AI output by default (wrong - they want transparency)

**Pattern**: I'm right about 40-50% of the time. This is why prototyping is essential.

## How I've Made Prototyping My Superpower

### 1. Built a Toolkit
I've standardized on:
- **Next.js** for quick development
- **Radix UI components** for consistency
- **TailwindCSS** for rapid styling
- **TypeScript** for confidence

This means I can build a prototype in 4-6 hours instead of 2-3 days.

### 2. Separated Thinking from Building
I spend 30 min thinking about the hypothesis, then 4-6 hours building, then 2 hours testing.
The building phase is just *translation*, not thinking.

### 3. Built for Reusability
My phone comparison component, for example, has been reused 4 different ways:
- Price comparison
- Specs comparison
- Feature comparison
- Retailer rating comparison

### 4. Documented Insights
I keep a simple spreadsheet of every prototype:
- What I tested
- What I learned
- What I'd do differently

This prevents me from testing the same things twice.

## Prototype Metrics That Matter

For each prototype, I track:

```
✅ Completion Rate: % of users who finish the flow
✅ Time to Key Action: How fast can users accomplish the main goal?
✅ Confusion Points: Where do users hesitate?
✅ Delight Moments: What surprised them in a good way?
❌ Bounce Rate: Did they leave?
```

I don't track things like "page views" or "time on page" - those are vanity metrics.

## What I'm Learning Now

Currently exploring:
- **Collaborative prototyping**: Building with users, not for them
- **Rapid A/B testing**: Testing multiple hypotheses simultaneously
- **Low-code prototyping**: Can I build faster with Framer or similar?
- **ML-powered prototypes**: Using AI to generate prototypes from descriptions

## The Brutal Truth

Not every prototype succeeds. I've built:
- A prototype that users hated (and I learned why)
- A prototype that was technically cool but solved no real problem
- A prototype that was perfect for the wrong audience

**And that's the point**. Better to fail with a prototype (4 hours) than fail with a product (3 months).

## Your Challenge

If you're a designer, PM, or engineer: **build a prototype this week**.

Not a wireframe. Not a presentation. An actual, clickable, functional prototype that tests one specific hypothesis.

Then show it to 3 people you don't know and watch how they interact with it.

You'll learn more in 2 hours of observation than in 2 weeks of planning.

---

Questions about prototyping or product thinking? [Let's chat](/about#contact).

---

*Recommended reading*:
- "Lean UX" by Jeff Gothelf
- "Inspired" by Marty Cagan
- "The Design of Everyday Things" by Don Norman
