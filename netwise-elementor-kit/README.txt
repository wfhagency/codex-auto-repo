========================================
NETWISE ELEMENTOR KIT - INSTALLATION
========================================

Version: 1.0.0
Author: Netwise
Date: November 3, 2025

========================================
WHAT'S INCLUDED
========================================

This kit contains:
- manifest.json: Kit metadata and configuration
- site-settings.json: Global Colors, Typography, and Design System settings

========================================
INSTALLATION INSTRUCTIONS
========================================

METHOD 1: IMPORT VIA ELEMENTOR (RECOMMENDED)
-------------------------------------------

1. Log in to WordPress Admin
2. Go to: Elementor → Tools
3. Click on the "Import Kit" tab
4. Click "Choose File" and select: netwise-elementor-kit.zip
5. Click "Import"
6. Wait for the import process to complete
7. Done! All global colors and typography are now configured.

METHOD 2: MANUAL IMPORT (ALTERNATIVE)
-------------------------------------

If automatic import doesn't work:

1. Go to: Elementor → Site Settings → Global Colors
2. Open site-settings.json in a text editor
3. Manually add each color from "system_colors" and "custom_colors"
4. Go to: Elementor → Site Settings → Global Fonts
5. Manually configure each typography preset from "system_typography" and "custom_typography"

========================================
WHAT GETS IMPORTED
========================================

✓ 6 Global Colors:
  - Primary (Dark Seashore Night): #1926A0
  - Secondary (Thick Green Accent): #7ED321
  - Text (Nero): #262525
  - Accent (Background Light Purple): #F6F6FE
  - Pastel Eyeshadow: #DEDEEC
  - White: #FFFFFF

✓ 10 Custom Typography Styles:
  - Hero Heading (H1): 80px/700/-4px
  - H2 Desktop: 64px/700/-3.2px
  - H3 Desktop: 48px/700/-0.96px
  - H4 Desktop: 32px/700/-0.64px
  - H5: 24px/700/-0.48px
  - H6: 20px/700/-0.4px
  - Paragraph: 20px/500/-0.8px
  - Small Text: 18px/500/-0.9px
  - Button Text: 24px/700/-0.48px
  - Navigation: 16px/700/-0.32px

✓ 4 System Typography Styles:
  - Primary: 20px/500/-0.8px
  - Secondary: 20px/700/-0.8px
  - Text: 20px/500/-0.8px
  - Accent: 32px/700/-0.64px

✓ Body & Link Settings:
  - Body Color: #262525
  - Body Font: Montserrat 20px/500
  - Link Color: #262525
  - Link Hover: #7ED321

✓ Container Settings:
  - Default Width: 1728px
  - Content Width: 1504px

✓ Custom CSS:
  - Gradient text effects
  - Shadow utilities
  - Hover effects
  - Card styles

========================================
AFTER IMPORT
========================================

1. Verify Global Colors:
   Elementor → Site Settings → Global Colors

2. Verify Global Fonts:
   Elementor → Site Settings → Global Fonts

3. Check Typography:
   Elementor → Site Settings → Theme Style → Typography

4. Clear Cache:
   Elementor → Tools → Regenerate CSS

========================================
USING THE DESIGN SYSTEM
========================================

Global Colors:
--------------
When adding any color in Elementor widgets, click the color picker
and you'll see a "Global" tab with all 6 preset colors.

Global Typography:
------------------
When styling text in Elementor widgets:
1. Click on Typography
2. At the top, you'll see "Typography" dropdown
3. Select any of the custom typography presets

Custom CSS Classes:
-------------------
Add these classes to widgets in Advanced → CSS Classes:

- .gradient-text: Apply green-to-blue gradient to text
- .card-elevated: Apply elevated shadow
- .btn-shadow: Apply button shadow
- .card-hover: Add hover lift effect
- .link-hover: Add animated underline on hover

========================================
REQUIREMENTS
========================================

- WordPress 6.0+
- Elementor Pro 3.16.0+
- PHP 7.4+

========================================
SUPPORT
========================================

Documentation: See ELEMENTOR-SETUP-GUIDE.md
Figma Design: https://www.figma.com/design/kEMamUNdFneCwqH6AfFtIw/Netwise-Website?node-id=402-2514

========================================
