# Ali's Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing software engineering expertise and projects.

## Features

- **Responsive Design**: Mobile-first approach with clean, professional layout
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Sections

- **Hero**: Professional introduction with call-to-action buttons
- **Projects**: Detailed showcase of ClientLane and Minimal Chat App
- **Experience**: Professional experience with key contributions
- **Skills**: Categorized technical skills with interactive badges
- **Certifications**: Professional certifications display
- **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono fonts

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd ali-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Colors
The color scheme is defined in `app/globals.css` with CSS custom properties:
- Primary: Blue (#2563EB)
- Secondary: Purple (#9333EA)
- Background: White/Dark slate
- Text: Near-black/Light gray

### Content
Update the following files to customize content:
- `components/hero-section.tsx` - Personal introduction
- `components/projects-section.tsx` - Project details
- `components/experience-section.tsx` - Professional experience
- `components/skills-section.tsx` - Technical skills
- `components/certifications-section.tsx` - Certifications

### Deployment

Deploy to Vercel (recommended):
\`\`\`bash
npm run build
\`\`\`

The site is optimized for deployment on Vercel with automatic builds and deployments.

## Performance

- Optimized images with Next.js Image component
- Lazy loading for sections below the fold
- Minimal bundle size with tree shaking
- Fast loading with static generation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
