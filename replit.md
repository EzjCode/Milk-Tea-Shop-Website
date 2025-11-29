# Freaky Milk Tea Shop Website

## Overview
This is a professional single-page application for "Freaky Milk Tea" - a milk tea shop website built as a school project. The site features a modern design with carousel showcase, menu with shopping cart functionality, about section with company values, testimonials, and contact information.

**Current State**: Fully functional and ready to use. The website is served using a Python HTTP server on port 5000.

## Recent Changes
- **November 29, 2025**: Major UI/UX enhancement
  - Redesigned entire website with professional business look
  - Added Google Fonts (Playfair Display & Poppins) for elegant typography
  - Expanded menu to 15 milk tea variants with realistic PHP prices
  - Added menu filtering by category (Classic, Specialty, Fruit Tea)
  - Implemented improved cart with quantity controls
  - Added "Featured Drinks" carousel with popular items
  - Added "Why Choose Us" features section
  - Added customer testimonials section
  - Added professional footer with quick links
  - Added notification system for cart actions
  - Mobile-responsive design with hamburger menu
  - Added all product images from stock photos

- **November 29, 2025**: Initial setup for Replit environment
  - Created Python HTTP server (server.py) to serve static files on port 5000
  - Configured workflow to run the web server
  - Added .gitignore for Python and project files

## Project Architecture

### Structure
```
.
├── index.html          # Main HTML page with all sections
├── styles.css          # Professional CSS styling with CSS variables
├── script.js           # JavaScript for interactivity and cart
├── server.py           # Python HTTP server for Replit
├── images/             # Product images (15 milk tea variants)
│   ├── classic.jpg
│   ├── taro.jpg
│   ├── matcha.jpg
│   ├── thai.jpg
│   ├── brownsugar.jpg
│   ├── wintermelon.jpg
│   ├── okinawa.jpg
│   ├── honeydew.jpg
│   ├── strawberry.jpg
│   ├── mango.jpg
│   ├── oolong.jpg
│   ├── jasmine.jpg
│   ├── cookies.jpg
│   ├── peach.jpg
│   └── lychee.jpg
├── replit.md           # This documentation file
└── .gitignore
```

### Technology Stack
- **Frontend**: Pure HTML5, CSS3 (with CSS variables), and vanilla JavaScript
- **Fonts**: Google Fonts (Playfair Display for headings, Poppins for body)
- **Server**: Python 3.11 built-in HTTP server
- **No frameworks or build tools required**

### Features
1. **Home Page**:
   - Hero section with call-to-action buttons
   - Statistics display (15+ Flavors, 10K+ Customers, 5 Years)
   - Featured drinks carousel with auto-rotation
   - "Why Choose Us" features grid
   - Customer testimonials

2. **About Page**:
   - Company story and journey
   - Core values (Quality, Customer Focus, Sustainability, Innovation)

3. **Menu Page**:
   - Category filter buttons (All, Classic, Specialty, Fruit Tea)
   - Grid display of 15 products with images, prices, descriptions
   - "Popular" badges on featured items
   - Add to Cart functionality

4. **Contact Page**:
   - Contact cards (Address, Phone, Email, Hours)

5. **Developers Page** (accessible via mobile menu):
   - Team member cards with roles
   - Ej (Main Developer)
   - Jam, Miko, Padang, Tapungan (Ideas & Design)

6. **Shopping Cart**:
   - Floating cart icon with item count badge
   - Slide-in cart panel
   - Quantity controls (+/-)
   - Order total calculation
   - Checkout button with notification

### Menu Categories
- **Classic**: Classic Milk Tea, Thai Milk Tea, Wintermelon, Oolong, Jasmine
- **Specialty**: Taro, Matcha, Brown Sugar, Okinawa, Cookies & Cream
- **Fruit Tea**: Honeydew, Strawberry, Mango, Peach Oolong, Lychee Green Tea

### Price Range
- Prices range from ₱89.00 to ₱119.00 (Philippine Peso)

### Server Configuration
- Port: 5000 (required for Replit webview)
- Host: 0.0.0.0 (allows external access)
- Cache-Control: no-cache (prevents caching issues in Replit's iframe)

### Development Workflow
The "Web Server" workflow runs `python server.py` and serves the site at port 5000. The server automatically includes no-cache headers to ensure changes are immediately visible in the Replit preview.

## Deployment
The site is configured for static deployment. All files in the root directory are served as-is.

## User Preferences
- This is a school project - no database needed
- Keep the same structure (Home, About, Menu, Contact, Cart)
- Professional business website design preferred

## Notes
- All images are stock photos
- Contact information uses placeholder data for the school project
- Social media links are placeholder (#) and can be updated with real links
