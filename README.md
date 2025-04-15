# AIminds Website

A modern, responsive website for AIminds, a company that provides personalized AI assistants for local businesses.

## Features

- **Home Page**: Showcases the company's value proposition, industry solutions, and testimonials
- **Industry Pages**: Detailed pages for different industries (Real Estate, Education, Coaching, Healthcare, Food, Other)
- **Technology Page**: Highlights the AI technology and features
- **Pricing Page**: Displays pricing plans and includes an ROI calculator
- **About Page**: Information about the company and team
- **Resources Page**: Blog articles and helpful resources
- **Contact Page**: Contact form and information
- **Interactive Elements**: AI chatbot widget, ROI calculator, Build Assistant Wizard

## Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Common components used across pages
│   │   ├── home/         # Home page components
│   │   ├── industry/     # Industry page components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── pricing/      # Pricing page components
│   │   ├── technology/   # Technology page components
│   │   └── contact/      # Contact page components
│   ├── pages/            # Page components
│   │   ├── home/         # Home page
│   │   ├── industries/   # Industry pages
│   │   ├── technology/   # Technology page
│   │   ├── pricing/      # Pricing page
│   │   ├── about/        # About page
│   │   ├── resources/    # Resources page
│   │   └── contact/      # Contact page
│   ├── App.jsx           # Main application component with routes
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
│   └── assets/           # Images and other assets
└── index.html            # HTML template
```

## Available Scripts

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- React 18
- React Router
- Framer Motion for animations
- Tailwind CSS for styling
- React Icons
- Vite for build tooling

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser and navigate to the URL shown in the terminal
