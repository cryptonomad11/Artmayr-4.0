# Fleischerei 4.0 - Digital Transformation Platform

## Overview

This is a modern full-stack web application built as a comprehensive presentation for the "Fleischerei 4.0" digitalization project for Artmayr GmbH, a traditional Austrian butcher shop in Schlierbach. The application presents an enterprise-level digital transformation solution featuring Sage X3 ERP, IoT monitoring, HACCP compliance, and guaranteed 236% ROI. It's designed as an interactive pitch for a specific client implementation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for interactive animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Database Provider**: Neon Database (serverless PostgreSQL)

### UI Components
- **Design System**: shadcn/ui components based on Radix UI primitives
- **Theme**: Dark theme optimized for professional presentation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Typography**: Inter and Source Sans Pro font families

## Key Components

### Landing Page Sections
1. **Hero Section**: Main value proposition with animated counters and CTAs
2. **Overview Section**: Problem/solution presentation with icons and statistics
3. **Phases Section**: 3-phase implementation roadmap with visual timeline
4. **ROI Section**: Interactive ROI calculator with sliders and real-time calculations
5. **Technology Section**: Open-source technology stack presentation
6. **Pricing Section**: Tiered pricing packages for each phase
7. **Team Section**: Company strengths and partnership approach
8. **CTA Section**: Final conversion section with guarantees
9. **Footer**: Contact information and additional links

### Interactive Features
- **ROI Calculator**: Real-time calculation based on user input sliders
- **Contact Form**: Lead capture with validation and API integration
- **Smooth Scrolling**: Navigation between sections
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Animation System**: Scroll-triggered animations using Framer Motion

## Data Flow

### Client-Side Data Flow
1. React components manage local state for interactive elements
2. TanStack Query handles API calls and caching
3. Form submissions use React Hook Form with Zod validation
4. User interactions trigger smooth scrolling and animations

### Server-Side Data Flow
1. Express.js handles API routes for contact forms and ROI calculations
2. Database operations use Drizzle ORM with PostgreSQL
3. Session management for user interactions
4. Error handling middleware for robust API responses

### Database Schema
- **Users Table**: Basic user authentication schema (currently minimal)
- **Schema Location**: `shared/schema.ts` using Drizzle ORM
- **Migration Strategy**: Drizzle Kit for database migrations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **framer-motion**: Animation library
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### Replit Integration
- **Runtime Error Overlay**: Development debugging
- **Cartographer Plugin**: Replit-specific development features

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configurable)
- **Hot Reload**: Vite HMR with Express middleware mode
- **Database**: Neon Database with environment variable configuration

### Production Build
- **Build Process**: 
  1. Vite builds frontend to `dist/public`
  2. ESBuild bundles server code to `dist/index.js`
- **Start Command**: `npm run start`
- **Environment**: NODE_ENV=production

### Replit Deployment
- **Target**: Autoscale deployment
- **Build Command**: `npm run build`
- **Run Command**: `npm run start`
- **Port Mapping**: Internal 5000 → External 80

### Database Configuration
- **Provider**: Neon Database (serverless PostgreSQL)
- **Connection**: Environment variable `DATABASE_URL`
- **Schemas**: Managed through Drizzle migrations
- **Push Command**: `npm run db:push`

## User Preferences

Preferred communication style: Simple, everyday language.
Project focus: Internal process optimization first - time tracking, accounting integration, employee support systems
Budget model: Monthly flexible budget based on fair time effort, determined collaboratively
No booking/contact functionality needed - this is a presentation/pitch deck website
Remove ROI guarantees and pricing packages - focus on efficiency improvements instead
Team structure: User + friend's company for billing + cybersecurity expert for final phase
Business model: Monthly budget + licensing with profit sharing per partner brought in + planned Web3/blockchain transparency for fraud prevention

## Recent Changes

- June 25, 2025: Initial setup of presentation website
- June 25, 2025: Updated focus to internal optimization (time tracking, accounting, employee support)
- June 25, 2025: Removed ROI guarantees, pricing packages, and booking functionality
- June 25, 2025: Changed from ROI calculator to efficiency estimator
- June 25, 2025: Updated 3-phase plan to prioritize internal processes first
- June 25, 2025: Replaced meat industry stock photos with more relevant business process images
- June 25, 2025: Added pricing section with development costs and licensing model
- June 25, 2025: Updated team section to reflect actual project structure (3-person partnership)
- June 25, 2025: Enhanced visual design with improved glass effects and animations
- June 25, 2025: Fixed ROI calculator to show efficiency metrics instead of financial ROI
- June 25, 2025: Updated pricing model to monthly budget approach with partner profit sharing
- June 25, 2025: Added Web3/blockchain transparency vision for future fraud prevention
- June 25, 2025: Replaced stock photos with appropriate butcher shop imagery
- June 25, 2025: Added price expectations to budget cards (€500-1.500/month, 5-15% revenue share)
- June 25, 2025: Fixed all Factory icons to ChefHat throughout application (navigation, footer)
- June 25, 2025: Corrected hero image from pancakes to professional butcher facility
- June 25, 2025: Major update: Discovered real Artmayr GmbH project details from executive summary
- June 25, 2025: Updated entire presentation to reflect authentic business case with Sage X3 ERP
- June 25, 2025: Replaced generic digitalization with enterprise-specific solution (236% ROI guarantee)
- June 25, 2025: Updated phases to match real implementation plan (Compliance→Growth→AI-Optimization)
- June 25, 2025: Changed pricing from generic budget to authentic enterprise costs (4.500€/month)
- June 25, 2025: Added pricing disclaimer explaining costs are sample data for orientation
- June 25, 2025: Updated hero image to show meat processing with digital transformation theme
- June 25, 2025: Fixed remaining hero section content to match Artmayr GmbH branding