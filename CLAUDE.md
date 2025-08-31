# Excavating Business Website

## Project Overview
Recreate a simple business website for an excavating company using React/Vite.

## Reference Site
https://www.mandoexcavatingllc.com/

## Tech Stack
- React (with TypeScript)
- Vite
- Tailwind CSS
- React Router DOM
- React Icons (for social media icons)

## Project Images
**Location**: All images are stored in the `public/images/` folder

**Image Structure:**
```
public/
  images/
    gallery/        # 20+ excavating photos for gallery section
    hero/          # Main homepage hero image (1920x1080px, 16:9 ratio)
    services/      # Service page specific images
    logo/          # Company logo, favicon
```

**Image Specifications:**
- **Gallery images**: 800x450px (16:9 ratio), optimized for web
- **Hero image**: 1920x1080px (16:9 ratio)
- **Format**: WebP with JPEG fallback
- **File size**: Under 200KB per gallery image, under 800KB for hero

**Usage**: Use existing local images instead of placeholder images

## Development Approach
**Phase 1 (Current):** Home page only
- Focus on creating a complete, polished home page first
- Match design and content from reference site
- Use images from the local public/images/ folder
- Include hero section and gallery section

**Phase 2 (Next):** Services page
- Will be implemented after home page is complete

**Phase 3 (Final):** Contact page
- Will include contact form
- Will be implemented last

## Requirements for Home Page
- Match the design and layout of the reference site's home page
- Use provided local images from public/images/ folder
- Responsive design (mobile, tablet, desktop)
- Professional, clean appearance
- All content should reflect excavating business
- Gallery section displaying ~20 excavating photos
- Hero section with main company image

## Future Considerations
- Payment integration (Stripe redirects)
- Admin panel for managing content