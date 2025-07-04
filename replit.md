# Portfolio Website - replit.md

## Overview

This is a full-stack portfolio website built with React and Express.js, featuring a modern, responsive design with dark theme styling. The application showcases a developer's profile with sections for About, Education, Skills, Services, and Contact. It includes a functional contact form with backend API integration and database storage capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas for runtime type checking
- **Storage**: In-memory storage implementation with interface for easy database switching
- **Session Management**: Express sessions with connect-pg-simple

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Landing area with animated typing effect
- **About Section**: Personal information and toolbox showcase
- **Education Section**: Timeline of educational background and experience
- **Skills Section**: Animated skill bars with progress indicators
- **Services Section**: Service offerings with image cards
- **Contact Section**: Functional contact form with validation
- **Footer**: Site footer with copyright information

### Backend Components
- **Route Handler**: RESTful API endpoints for contact form submission
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations
- **Schema Validation**: Shared Zod schemas for type safety across frontend and backend
- **Error Handling**: Global error handling middleware

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - React Hook Form validates data using Zod schema
   - Form data is sent to `/api/contacts` endpoint via POST request
   - Backend validates data and stores in database/memory
   - Success/error response is returned to frontend
   - Toast notification displays result to user

2. **Contact Data Retrieval**:
   - Admin can access `/api/contacts` to view all submissions
   - Data is retrieved from storage layer and returned as JSON

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation resolvers
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Backend Dependencies
- **express**: Web framework
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Schema validation
- **drizzle-zod**: Integration between Drizzle and Zod

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Fast bundler for production

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution with hot reload
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production
- **Build Process**: 
  - Frontend: Vite builds optimized static assets
  - Backend: esbuild bundles server code for Node.js
- **Deployment**: Single server deployment with static file serving
- **Database**: PostgreSQL with Drizzle migrations

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 04, 2025. Initial setup