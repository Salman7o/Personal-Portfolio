# Salman Hamzo Portfolio Website - replit.md

## Overview

This is a professional full-stack portfolio website built with React and Express.js, showcasing Salman Hamzo's skills as a Junior Software Engineer. The website features a modern, responsive design with dark theme styling, smooth animations, and interactive elements. The application includes sections for About, Education, Skills, Projects, Services, and Contact, with a functional contact form integrated with backend API and database storage capabilities.

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
- **Navigation**: Responsive navigation with smooth scrolling and hover effects
- **Hero Section**: Landing area with animated typing effect, floating particles, and gradient backgrounds
- **About Section**: Personal information and technology toolbox with hover animations
- **Education Section**: Timeline of educational background and professional experience
- **Skills Section**: Animated skill bars with progress indicators and glow effects
- **Projects Section**: Featured projects showcase with gradient overlays and interactive cards
- **Services Section**: Service offerings with professional images and hover effects
- **Contact Section**: Functional contact form with validation and smooth animations
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

## Portfolio Content

### Personal Information
- **Name**: Salman Hamzo
- **Title**: Junior Software Engineer  
- **Education**: Bachelor of Science in Computer Science (SZABIST University, 2022-2026)
- **Location**: Karachi, Pakistan
- **Contact**: salmanhamza2580@gmail.com, +923333656164
- **Languages**: English, Urdu, Sindhi

### Technical Skills
- **Mobile Development**: Swift, SwiftUI, iOS Development
- **Web Development**: React.js, JavaScript, HTML & CSS
- **Programming Languages**: Java, Python, C Language
- **Specializations**: Problem Solving, Software Engineering, Full Stack Development

### Featured Projects
1. **StudyMate Peer Learning Platform** - React.js startup project for peer tutoring
2. **Library Management System** - Java application with MySQL database
3. **Eater and Passer Game** - C language console game
4. **Number Guessing Game** - Java-based educational project

### Professional Experience
- **iOS Developer Intern** at Analog Mutations (July-October 2023)
- **Competition Participant** at ZAB E Fest - SZABIST (2024-2025)
- **Co-founder** of StudyMate platform

## Recent Changes

### July 04, 2025 - Portfolio Customization for Salman Hamzo
- Updated all personal information from Shahzaib Faisal to Salman Hamzo
- Modified hero section with new professional description and contact details
- Updated About section with Salman's background and technology stack
- Redesigned Education section to reflect SZABIST University and DHACSS SKBZ Campus
- Customized Skills section to highlight iOS development and relevant technologies
- Added new Projects section showcasing StudyMate, Library Management System, and games
- Updated Services section to focus on iOS development and software engineering
- Enhanced Contact section with correct email and phone number
- Added advanced CSS animations including floating particles, gradient effects, hover animations
- Implemented glow effects, custom scrollbar, and enhanced card interactions
- Added professional color schemes and improved visual aesthetics

### July 04, 2025 - CS-Themed Red and Black Cyberpunk Design
- Transformed portfolio with CS-inspired red and black cyberpunk aesthetic
- Added binary rain animation falling in the background
- Implemented terminal-style glowing borders and effects throughout
- Added code symbols and CS-themed visual elements
- Enhanced skill bars with neon red glow effects and terminal styling
- Applied monospace font styling for code-like appearance
- Created cyber border animations with spinning gradients
- Added CS-themed particle effects and visual magic
- Updated Services section with appropriate services: UI/UX Design, Web Development, Mobile App Development, Backend Development
- Replaced service images with colorful emoji icons and gradient backgrounds
- Updated LinkedIn link to https://www.linkedin.com/in/salman-h-32101b216
- Removed copied content and created original service descriptions
- Applied consistent code-text styling and terminal aesthetic throughout
- Added clickable LinkedIn link in About section personal information
- Simplified services section design by removing over-designed elements
- Removed projects section completely and updated navigation accordingly
- Added professional cyberpunk-style profile image with glowing border effects
- Moved profile image from About section to hero section on homepage
- Removed "View My Work" button from hero section for cleaner design
- Restored About section to 2-column layout without profile image
- Updated homepage intro text to be unique and different from About section
- Replaced profile image with new JPEG version on homepage

## Changelog

- July 04, 2025: Initial setup and complete customization for Salman Hamzo portfolio