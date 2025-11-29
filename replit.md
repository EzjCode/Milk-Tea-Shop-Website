# Freaky Milk Tea Shop Website

## Overview
This is a static single-page application for "Freaky Milk Tea" - a milk tea shop website. The site features a carousel showcase, menu with shopping cart functionality, about section, and contact information.

**Current State**: Fully functional and ready to use. The website is served using a Python HTTP server on port 5000.

## Recent Changes
- **November 29, 2025**: Initial setup for Replit environment
  - Added missing images folder with stock images for all 6 milk tea variants
  - Created Python HTTP server (server.py) to serve static files on port 5000
  - Configured workflow to run the web server
  - Added .gitignore for Python and project files
  - Server configured with no-cache headers for proper Replit iframe functionality

## Project Architecture

### Structure
```
.
├── index.html          # Main HTML page
├── styles.css          # All CSS styling
├── script.js           # JavaScript for interactivity
├── server.py           # Python HTTP server for Replit
├── images/             # Product images
│   ├── classic.jpg
│   ├── taro.jpg
│   ├── matcha.jpg
│   ├── thai.jpg
│   ├── brownsugar.jpg
│   └── wintermelon.jpg
└── .gitignore
```

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Server**: Python 3.11 built-in HTTP server
- **No frameworks or build tools required**

### Features
1. **Home Page**: Hero section with auto-rotating carousel of milk tea products
2. **About Page**: Information about the shop
3. **Menu Page**: Grid display of all products with "Add to Cart" functionality
4. **Contact Page**: Store location, hours, and contact information
5. **Shopping Cart**: Floating cart icon with modal to view/manage cart items

### Server Configuration
- Port: 5000 (required for Replit webview)
- Host: 0.0.0.0 (allows external access)
- Cache-Control: no-cache (prevents caching issues in Replit's iframe)

### Development Workflow
The "Web Server" workflow runs `python server.py` and serves the site at port 5000. The server automatically includes no-cache headers to ensure changes are immediately visible in the Replit preview.

## Deployment
The site is configured for static deployment. All files in the root directory are served as-is.

## Notes
- All milk tea items currently have $0.00 prices and "NONE" descriptions - these are placeholders
- Images are stock photos and may need to be replaced with actual product photos
- Contact information may need to be updated to reflect actual business details
