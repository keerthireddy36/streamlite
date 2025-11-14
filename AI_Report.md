1. AI Tools Used

During the development of this Streaming Dashboard Clone, multiple AI tools were used to speed up the workflow, generate boilerplate code, and assist with debugging:

a. ChatGPT (GPT-5.1)

Used for generating TypeScript interfaces

Helped with API integration logic

Produced optimized Tailwind CSS layout structures

Guided through Next.js App Router architecture

Provided bug fixes for Vercel deployment and build issues

b. GitHub Copilot

Used for auto-completing repetitive JSX code

Suggested Tailwind utility classes while styling components

Assisted in writing reusable React components quickly

Helped generate placeholder code for movie card, hero section, and dynamic route

c. Vercel AI / DevTools Suggestions (if used)

Guided environment variable configuration

Helped optimize build settings

2. Components/Sections Heavily Supported by AI
a. Project Setup

Initializing the Next.js 14 project with TypeScript & Tailwind

Creating folder structure inside /app

Configuring .env.local and ensuring server-side access to API keys

b. API Integration

Fetching movie lists using the TMDB API

Creating utility functions for fetching movie list & movie details

Handling TypeScript typings for movie objects:

Movie

MovieDetails

ApiResponse

c. Homepage Layout (app/page.tsx)

AI helped generate:

Server Component structure

Hero Banner using <Image /> with priority + fill

Filtering movies for rows

Passing props to MovieRow

d. MovieRow Component

Horizontal scroll logic

Creating reusable poster card UI

Ensuring <Image /> and <Link /> are used properly

Optimizing poster loading

e. Dynamic Route: app/movie/[id]/page.tsx

Fetching details using the movie ID

Designing responsive movie details layout

Implementing error handling for missing IDs

Responsive Tailwind grid structure

f. Styling & Responsive Layout

AI provided large portions of:

Tailwind class combinations

Flex/grid layouts

Mobile-first responsive components

g. Deployment Help

How to add TMDB API key in Vercel Environment Variables

Fixing build errors related to fetch and server components

Optimizing for production


3. Summary

AI tools significantly accelerated development by:

Reducing time spent writing boilerplate code

Quickly generating UI components

Fixing common TypeScript and deployment issues

Providing reusable patterns for server components, Next.js routing, and API fetching

This allowed the project to be completed efficiently within the given time frame.
