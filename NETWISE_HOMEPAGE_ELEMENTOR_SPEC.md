# Netwise Website - Homepage - Elementor Implementation Specification

## 🎯 Project Overview

**Technology Stack:**
- WordPress
- Elementor Pro
- CrocoBlock (JetElements, JetTabs, JetBlocks, JetMenu)
- The Plus Addons for Elementor
- Essentials Addons for Elementor

**Figma Design Source:** https://www.figma.com/design/kEMamUNdFneCwqH6AfFtIw/Netwise-Website?node-id=402-2514&m=dev

**Page Type:** Full-width Homepage (no sidebar)

---

## 🎨 Global Design System

### Color Palette
```
Primary Colors:
- Dark Seashore Night: #1926A0
- Nero (Dark Text): #262525
- Pastel Eyeshadow: #DEDEEC
- Thick Green (Accent): #7ED321
- Background: #F6F6FE
- White: #FFFFFF

Gradients:
- Hero Background: Custom gradient with overlay effects
- CTA Sections: Blue gradient (#1926A0)
```

### Typography System
```
Font Family: Montserrat (Google Fonts)
Required Weights: 400 (Regular), 500 (Medium), 700 (Bold)
Required Styles: Normal, Italic

Desktop Heading Sizes:
- H2: 64px / Bold / Line-height: 1.3 / Letter-spacing: -3.2px
- H3: 48px / Bold / Line-height: 1.4 / Letter-spacing: -0.96px
- H4: 32px / Bold / Line-height: 1.5 / Letter-spacing: -0.64px
- H5: 24px / Bold / Line-height: 1.5 / Letter-spacing: -0.48px
- H6: 20px / Bold / Line-height: 1.6 / Letter-spacing: -0.4px

Body Text:
- Paragraph: 20px / Medium / Line-height: 1.6 / Letter-spacing: -0.8px
- Small Text: 18px / Medium / Line-height: 1.1 / Letter-spacing: -0.9px
- Button Text: 24px / Bold / Line-height: 1.5 / Letter-spacing: -0.48px
- Navigation: 16px / Bold / Line-height: normal / Letter-spacing: -0.32px / UPPERCASE

Mobile Adjustments:
- H2: 40px
- H3: 32px
- H4: 24px
- Paragraph: 18px
```

### Spacing System
```
Container Max Width: 1728px
Content Width: 1504px (with 112px side margins)
Section Padding: 80px top/bottom (desktop), 40px (mobile)
Element Gaps:
- Small: 8px
- Medium: 16px
- Large: 24px
- XL: 32px
- XXL: 40px
- XXXL: 64px
```

### Border Radius
```
- Small: 8px (cards, images)
- Medium: 16px (larger cards)
- Large: 40px (buttons)
- Full: 100px (pill buttons)
```

### Shadows
```
Card Shadow (Default):
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25), 0px 4px 4px 0px rgba(0,0,0,0.25)

Button Shadow:
box-shadow: -195px 290px 98px 0px rgba(0,0,0,0),
            -125px 186px 90px 0px rgba(0,0,0,0.01),
            -70px 105px 76px 0px rgba(0,0,0,0.05),
            -31px 46px 56px 0px rgba(0,0,0,0.09),
            -8px 12px 31px 0px rgba(0,0,0,0.1)

Elevated Card Shadow:
box-shadow: 0px 613px 172px 0px rgba(0,0,0,0),
            0px 392px 157px 0px rgba(0,0,0,0.01),
            0px 221px 132px 0px rgba(0,0,0,0.05),
            0px 98px 98px 0px rgba(0,0,0,0.09),
            0px 25px 54px 0px rgba(0,0,0,0.1)
```

---

## 📐 Page Structure & Sections

### SECTION 1: Header / Navigation
**Widget:** Elementor Header (Elementor Pro) or JetMenu (CrocoBlock)

**Structure:**
```
Container (Full Width)
├── Row (1504px max-width, centered)
    ├── Column 1: Logo (auto width)
    │   └── Image Widget
    │       - Image: Netwise logo (149px x 27.721px)
    │       - Link: Home
    ├── Column 2: Navigation (auto width, grow)
    │   └── Nav Menu Widget
    │       - Items: What we do*, Clients, Our Products, Case Studies, About us*, Blog
    │       - Style: Bold, 16px, #262525, uppercase, -0.32px letter-spacing
    │       - Padding: 10px each item
    │       - Gap: 24px between items
    │       - Dropdowns for items with asterisk (*)
    └── Column 3: CTA & Language (auto width)
        ├── Language Selector (Menu with dropdown)
        │   - Text: "EN" + dropdown icon
        │   - Style: Same as nav items
        └── Search Icon (24px)
        └── Contact Button
            - Text: "Contact us"
            - Style: White background, shadow, 24px padding horizontal, 16px vertical
            - Border-radius: 40px
            - Typography: 16px Bold, uppercase

Shadow: box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25), 0px 4px 4px 0px rgba(0,0,0,0.25)
Position: Sticky (optional)
Z-index: 999
```

**Implementation:**
- Use Elementor's Header Template or JetMenu
- Enable sticky header
- Add hover effects on menu items
- Dropdown menus should have smooth animations

---

### SECTION 2: Hero Section
**Widget:** Elementor Section with background effects

**Layout:**
```
Full Width Section
├── Background Layer 1: Masked Image
│   - Image: Hero background (DSC_5299_hires)
│   - Mask: Rounded corners (8px)
│   - Height: 1724px
│   - Position: Absolute
├── Background Layer 2: Gradient Overlay (30% opacity)
│   - Multiple colored rectangles with color-dodge blend mode
│   - Colors: Various gradient effects
├── Content Container (1504px max-width)
    ├── Column (single, left-aligned)
        ├── Subtitle (Top)
        │   - Text: "Business solutions implementation, done right first time."
        │   - Typography: 20px Bold, White, uppercase, -0.4px letter-spacing
        │   - Position: Top of section
        ├── Main Heading
        │   - Line 1: "We fix" (Green #7ED321) + "problems" (White)
        │   - Line 2: "slowing your business." (White)
        │   - Typography: 80px Bold, -4px letter-spacing, 1.1 line-height
        │   - Max-width: 1242px
        ├── Subheading
        │   - Text: "When your team struggles with outdated tools and manual work, growth and customer happiness suffer. We take care of that."
        │   - Typography: 24px Bold, White, -0.96px letter-spacing, 1.6 line-height
        │   - Max-width: 814px
        │   - Margin-top: 120px
        └── CTA Buttons Row
            ├── Button 1: "Get to know more"
            │   - Background: White
            │   - Text: 24px Bold, #262525, -0.48px letter-spacing
            │   - Padding: 16px 40px
            │   - Border-radius: 40px
            │   - Shadow: Button shadow (see Global Styles)
            └── Button 2: "Download ebook"
                - Background: Transparent
                - Border: 2px solid White
                - Text: 24px Bold, White, -0.48px letter-spacing
                - Padding: 16px 40px
                - Border-radius: 40px
```

**Heights & Spacing:**
- Total section height: ~1900px
- Content padding: 178px top, 100px bottom
- Gap between buttons: 24px

**Background Implementation:**
1. Use Elementor's background overlay
2. Add custom CSS for mask effects
3. Use absolute positioning for layered backgrounds
4. Apply blend modes via custom CSS

---

### SECTION 3: Problem Statement Cards
**Widget:** Elementor Grid (5 columns) or The Plus: Post Grid

**Layout:**
```
Container (Full Width, Background: White)
├── Content Container (1504px max-width, centered)
    ├── Row (5 equal columns, 32px gap)
        ├── Card 1
        │   - Background: White
        │   - Padding: 24px
        │   - Border-radius: 8px
        │   - Content: "Too much guessing, not enough selling? Missing one source of truth about your clients?"
        │   - Bold text: First sentence
        │   - Regular text: Second sentence
        │   - Icon: 40px at bottom
        ├── Card 2
        │   - Content: "Want your customers to be happier and your team to be proud of what they deliver?"
        ├── Card 3
        │   - Content: "Disconnected data, disconnected customer journeys? Too many tools, not enough insights?"
        ├── Card 4
        │   - Content: "Manual tasks take up too much time and energy, slowing business growth and draining your team's focus?"
        └── Card 5
            - Content: "No real-time insight into performance or customer needs, leaving your team reactive and missing opportunities?"
```

**Card Styling:**
- Typography: 20px Medium, #262525, -0.8px letter-spacing, 1.6 line-height
- Bold portions: 20px Bold
- Icon size: 40px x 40px
- Vertical alignment: Space-between (text top, icon bottom)

**Responsive:**
- Desktop: 5 columns
- Tablet: 3 columns
- Mobile: 1 column

---

### SECTION 4: Solutions Section
**Widget:** Custom Elementor Section with background gradient

**Background:**
- Color: Gradient from hero (continue visual flow)
- Opacity: Full

**Layout:**
```
Full Width Section (Background: Gradient)
├── Content Container
    ├── Heading Area
    │   └── Heading: "We deliver better systems. You get happier people."
    │       - Typography: 64px Bold, -3.2px letter-spacing, 1.3 line-height
    │       - Color: #262525
    │       - Green highlight: "better systems" and "happier people" (#7ED321)
    ├── Description
    │   - Text: "We'll take care of your technology so you can focus on your customers..."
    │   - Typography: 24px Medium, #262525, -0.96px letter-spacing, 1.6 line-height
    │   - Max-width: 1120px
    │   - Margin-top: 40px
    ├── Tab Navigation (Pill Style)
    │   - Widget: JetTabs or The Plus: Tabs
    │   - Background: #DEDEEC
    │   - Border-radius: 100px
    │   - Padding: 8px
    │   - Items: "Dynamics 365", "Power Platform", "Copilot"
    │   - Active tab: Green background (#7ED321)
    │   - Tab style: 24px Bold, #262525, padding 16px 64px
    │   - Gap: 16px
    ├── Tab Content: Product Cards Grid
    │   └── Row (5 columns + 1 "Next Tab" card, 32px gap)
        ├── Product Card 1: Dynamics 365 Sales
        │   ├── Icon (40px x 40px at top)
        │   ├── Product Name: "Dynamics 365 Sales"
        │   │   - Typography: 20px Bold, #262525, -0.4px letter-spacing
        │   └── "More" Link
        │       - Border-bottom: 2px solid #262525
        │       - Text: "MORE" (18px Bold, uppercase)
        │       - Icon: Arrow right (24px)
        ├── Product Card 2-5: [Similar structure]
        │   - Dynamics 365 Customer Insights
        │   - Dynamics 365 Customer Service
        │   - Dynamics 365 Contact Center
        │   - Dynamics 365 Field Service
        └── "Next Tab" Card
            - Background: #7ED321 (highlight)
            - Icon: Large illustration (40px)
            - Link: "NEXT TAB"
```

**Card Styling:**
- Background: White
- Padding: 32px
- Border-radius: 16px
- Height: Equal heights in row
- Vertical layout: Space-between (icon/text at top, link at bottom)

**Responsive:**
- Desktop: 6 cards per row (5 products + 1 next tab)
- Tablet: 3 cards per row
- Mobile: 1 card per row

---

### SECTION 5: Solutions Detail Cards
**Widget:** Elementor Grid with Icon Boxes or The Plus: Info Box

**Layout:**
```
Full Width Section (Background: Gradient continues)
├── Content Container
    └── Row (5 equal columns, 32px gap)
        ├── Solution Card 1: Sales
        │   ├── Icon (40px, top)
        │   ├── Title: "Sales"
        │   │   - Typography: 32px Bold, White, -0.64px letter-spacing, 1.5 line-height
        │   ├── Description
        │   │   - Bold green text: "Streamline your sales process:"
        │   │   - Regular white text: "centralizing customer data, automating follow-ups, and shortening sales cycles."
        │   │   - Typography: 20px, -0.8px letter-spacing, 1.6 line-height
        │   └── "More" Link (bottom)
        │       - Border-bottom: 2px solid White
        │       - Text: "MORE" (18px Bold, uppercase, White)
        │       - Icon: Arrow right (24px, White)
        ├── Solution Card 2: Customer Service [Similar structure]
        ├── Solution Card 3: Marketing [Highlighted with shadow]
        ├── Solution Card 4: Intelligent Automation [Similar]
        └── Solution Card 5: AI [Similar]
```

**Card Styling:**
- Background: Transparent (gradient shows through)
- Padding: 24px
- Gap between elements: 24px
- Vertical alignment: Start
- Highlighted card (Marketing): Add elevated shadow

**Responsive:**
- Desktop: 5 columns
- Tablet: 2 columns
- Mobile: 1 column

---

### SECTION 6: Trusted Partners Logo Carousel
**Widget:** The Plus: Logo Carousel or JetElements: Carousel

**Layout:**
```
Full Width Section
├── Background: White (#FFFFFF)
├── Content Container
    ├── Heading
    │   - Text: "Trusted by leaders around the world"
    │   - Typography: 64px Bold, centered, #262525
    │   - Green highlight: "Trusted" (#7ED321)
    └── Logo Carousel
        ├── Settings:
        │   - Autoplay: Yes
        │   - Speed: Slow (5s per scroll)
        │   - Loop: Infinite
        │   - Items visible: 7
        │   - Gap: 10px
        ├── Logos:
        │   1. Volvo (94px height)
        │   2. Plus Logo (42px height)
        │   3. Crédit Agricole (84px height)
        │   4. Randstad (68px height)
        │   5. Sanofi (30px height)
        │   6. Itaka (34px height)
        │   7. Tikkurila (88px height)
        │   [Duplicate set for seamless loop]
        └── Styling:
            - Background per logo: White box (190px height)
            - Padding: Equal to center logos vertically
            - Logo filter: Grayscale 100% (optional)
            - Hover: Grayscale 0%, scale 1.05
```

**Implementation Notes:**
- Create two identical sets of logos for seamless infinite loop
- All logos should be SVG format for scalability
- Background boxes maintain consistent height
- Logos are vertically centered within boxes

---

### SECTION 7: Value Delivery / Stats Section
**Widget:** Elementor Counter Widget or The Plus: Counter

**Layout:**
```
Container (Full Width, Background: White)
├── Content Container
    ├── Heading
    │   - Text: "We deliver value with pride"
    │   - Typography: 64px Bold, #262525, -3.2px letter-spacing, 1.3 line-height
    └── Stats Row (5 equal columns, 32px gap)
        ├── Stat 1
        │   ├── Number: "300+"
        │   │   - Typography: 48px Bold, Gradient (see below), -0.96px letter-spacing, 1.4 line-height
        │   └── Description: "Completed CRM projects"
        │       - Typography: 20px Medium, #262525, -0.8px letter-spacing, 1.6 line-height
        │       - Gap: 24px from number
        ├── Stat 2: "2008" - "The year we began offering a cloud CRM"
        ├── Stat 3: "47" - "Countries received our CRM systems"
        ├── Stat 4: "413" - "Microsoft certifications (In the last 12 months)"
        └── Stat 5: "7x" - "Microsoft Partner of the Year"
```

**Number Gradient:**
```css
background: linear-gradient(to right, #7ED321, #1926A0);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Additional Content:**
```
Below Stats:
├── Image: Microsoft Partner badge (224px x 204px)
│   - Position: Left side
└── Text Block: "Something worth to mention about the successful partnership with Microsoft"
    - Typography: 24px Bold, #262525, -0.48px letter-spacing, 1.6 line-height
    - Italic: "successful partnership"
    - Max-width: 425px
    - Position: Right of image
```

**Responsive:**
- Desktop: 5 columns
- Tablet: 3 columns
- Mobile: 1 column

---

### SECTION 8: Testimonials / Real Results Section
**Widget:** The Plus: Testimonial Carousel or JetElements: Testimonials

**Layout:**
```
Full Width Section (Background: White)
├── Content Container
    ├── Heading
    │   - Text: "Real results, real voices"
    │   - Typography: 64px Bold, #262525, -3.2px letter-spacing, 1.3 line-height
    │   - Green highlight: "real voices" (#7ED321)
    ├── Subheading
    │   - Text: "We could tell you how well it works..."
    │   - Typography: 24px Medium, #262525, -0.96px letter-spacing, 1.6 line-height
    │   - Max-width: 608px
    └── Testimonial Carousel
        ├── Settings:
        │   - Items visible: 2 (desktop), 1 (mobile)
        │   - Gap: 32px
        │   - Navigation: Arrow buttons (white, shadow)
        │   - Autoplay: Optional
        ├── Testimonial Card 1: PKO Leasing
        │   ├── Company Logo (150px x 74px, top)
        │   ├── Quote
        │   │   - Text: "Most important, however, was a sense of confidence..."
        │   │   - Typography: 20px Medium Italic, #262525, -0.8px letter-spacing, 1.6 line-height
        │   ├── Author
        │   │   - Name: "Dorota Klocek"
        │   │   - Title: "Director of the Operational Center at PKO Leasing"
        │   │   - Typography: 18px Bold Italic, #262525, -0.36px letter-spacing, 1.2 line-height
        │   │   - Gap: 40px from quote
        │   └── CTA Link: "Full Case Study"
        │       - Border-bottom: 2px solid #262525
        │       - Typography: 18px Bold, uppercase
        │       - Icon: Arrow right (24px)
        ├── Testimonial Card 2: Colonnade [Similar structure, with shadow]
        ├── Testimonial Card 3: [Additional testimonial]
        └── Testimonial Card 4: Randstad [Similar structure]
```

**Card Styling:**
- Background: White
- Padding: 64px 40px
- Border-radius: 16px
- Shadow: None (default), Elevated shadow (highlighted card)
- Vertical layout: Space-between (logo/quote at top, CTA at bottom)
- Min-height: Equal for all cards in view

**Navigation Buttons:**
- Position: Bottom right of section
- Size: 56px x 56px
- Background: White
- Border-radius: 40px
- Shadow: Button shadow
- Icon: Arrow (24px, #262525)
- Gap: 8px between buttons

**Responsive:**
- Desktop: 2 cards visible
- Tablet: 1 card visible
- Mobile: 1 card, stack vertically

---

### SECTION 9: Custom Solution (Octopus) Section
**Widget:** Custom Elementor Section with shaped divider

**Background:**
- Color: #1926A0 (Dark Blue)
- Shape Divider: Optional curve at top

**Layout:**
```
Full Width Section (Background: #1926A0)
├── Content Container
    ├── Column 1: Text Content (50% width, left)
    │   ├── Heading
    │   │   - Line 1: "We don't just ship systems."
    │   │   - Line 2: "We build things that fit –" + "for you" (Green) + ", with pride."
    │   │   - Typography: 64px Bold, White, -3.2px letter-spacing, 1.3 line-height
    │   │   - Max-width: 1376px
    │   └── Description
    │       - Text about octopus and three hearts
    │       - Typography: 20px Medium, White, -0.8px letter-spacing, 1.6 line-height
    │       - Bold green highlights: "Our People. Our Clients. End Users."
    │       - Max-width: 480px
    └── Column 2: Illustration (50% width, right)
        └── Octopus Illustration
            - Custom SVG or image
            - Animated elements (optional)
            - Size: Responsive, fill column
```

**Visual Details:**
- Padding: 120px top/bottom
- Content max-width: 1504px
- Column gap: 80px
- Green accent (#7ED321) used for key phrases

**Responsive:**
- Desktop: 2 columns (50/50)
- Tablet: 2 columns (40/60)
- Mobile: 1 column, stack vertically

---

### SECTION 10: Top Article Feature
**Widget:** Custom post showcase or Featured Content block

**Layout:**
```
Container (Background: White, elevated above section)
├── Featured Article Card
    ├── Structure: Horizontal layout
    │   ├── Column 1: Featured Image (295px x 295px)
    │   │   - Border-radius: 8px
    │   │   - Object-fit: Cover
    │   ├── Column 2: Content (flex-grow)
    │       ├── Badge: "Top Article"
    │       │   - Background: #262525
    │       │   - Dot indicator: Red (#FF0000, 8px)
    │       │   - Text: 16px Bold, White, uppercase
    │       │   - Padding: 4px 12px
    │       │   - Border-radius: 8px
    │       │   - Gap: 10px (dot + text)
    │       ├── Article Content (2 columns)
    │       │   ├── Column A: Title & Meta
    │       │   │   ├── Title: "CRM in the age of Autonomous Agents"
    │       │   │   │   - Typography: 32px Bold, #262525, -0.64px letter-spacing, 1.5 line-height
    │       │   │   ├── Read Time: "9 minutes read"
    │       │   │   │   - Typography: 18px Medium Italic, #262525, -0.9px letter-spacing
    │       │   │   └── CTA Link: "Read the Article"
    │       │   │       - Border-bottom: 2px solid #262525
    │       │   │       - Typography: 18px Bold, uppercase
    │       │   │       - Icon: Arrow right (24px)
    │       │   └── Column B: Excerpt
    │       │       - Text: "At the end of Q2 2025, Microsoft introduced..."
    │       │       - Typography: 20px Medium, #262525, -0.8px letter-spacing, 1.6 line-height
    │       │       - Max-width: 671px
    └── Styling
        - Background: White
        - Padding: 64px
        - Border-radius: 16px
        - Shadow: Elevated shadow
        - Position: Overlapping sections (negative margin or absolute positioning)
```

**Positioning:**
- Margin-top: -150px (overlaps previous section)
- Z-index: 10
- Max-width: 1504px
- Centered

**Responsive:**
- Desktop: Horizontal layout (image left, content right)
- Tablet: Horizontal layout (smaller gaps)
- Mobile: Vertical layout (image top, content bottom)

---

### SECTION 11: Blog Articles Grid
**Widget:** Elementor Posts Widget or The Plus: Post Grid

**Layout:**
```
Full Width Section (Background: #F6F6FE)
├── Content Container
    ├── Heading
    │   - Line 1: "Insights, no buzzwords"
    │   - Line 2: "– straight from" + "our team" (Green)
    │   - Typography: 64px Bold, #262525, -3.2px letter-spacing, 1.3 line-height
    └── Articles Grid (3 columns, 32px gap)
        ├── Article Card 1
        │   ├── Featured Image (1:1 ratio, 440px)
        │   │   - Border-radius: 8px
        │   │   - Object-fit: Cover
        │   ├── Category Badge
        │   │   - Background: #DEDEEC
        │   │   - Text: "Customer Service" (color varies by category)
        │   │   - Typography: 20px Bold, -0.4px letter-spacing
        │   │   - Padding: 4px 12px
        │   │   - Border-radius: 8px
        │   ├── Title
        │   │   - Typography: 24px Bold, #262525, -0.48px letter-spacing, 1.5 line-height
        │   │   - Max-height: 3 lines (line-clamp)
        │   ├── Excerpt
        │   │   - Typography: 20px Medium, #262525, -0.8px letter-spacing, 1.6 line-height
        │   │   - Max-height: 3 lines
        │   ├── Read Time: "9 minutes read"
        │   │   - Typography: 18px Medium Italic, #262525, -0.9px letter-spacing
        │   └── CTA Link: "Read the Article"
        │       - Border-bottom: 2px solid #262525
        │       - Typography: 18px Bold, uppercase
        │       - Icon: Arrow right (24px)
        ├── Article Card 2 [Similar structure]
        └── Article Card 3 [Similar structure]
```

**Category Colors:**
- Customer Service: #262525
- Dynamics 365: #7ED321
- Artificial Intelligence: #1926A0

**Card Styling:**
- Background: White
- Padding: 40px
- Border-radius: 16px
- Vertical layout: Space-between
- Gap between elements: 40px (image to content), 24px (within content)

**Responsive:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

---

### SECTION 12: Microsoft Partnership Section
**Widget:** Custom content block with background

**Background:**
- Full-width background image (masked, rounded corners)
- Gradient overlay (30% opacity)
- Color: Dark blue tones

**Layout:**
```
Full Width Section
├── Background: Masked image with gradient overlay
├── Content Container
    ├── Column 1: Logo & Icon
    │   ├── Netwise Logo (220px width)
    │   └── Microsoft Partner Icon (24px, link)
    ├── Column 2: Text Content
    │   ├── Heading: "Microsoft Partner of the Year. 7 times."
    │   │   - Typography: 32px Bold, White, -1.6px letter-spacing, 1.25 line-height
    │   │   - Italic: "7 times"
    │   └── Additional info or CTA
    └── Column 3: Newsletter Signup
        ├── Heading: "Stay close to what matters"
        │   - Typography: 32px Bold, White, -0.64px letter-spacing, 1.2 line-height
        ├── Email Input
        │   - Placeholder: "Your E-mail"
        │   - Background: White
        │   - Border-radius: 50px
        │   - Padding: 16px 40px
        │   - Typography: 16px Bold, #D2D2D2
        │   - Width: 479px
        ├── Subscribe Button
        │   - Text: "Subscribe"
        │   - Background: Transparent
        │   - Border: 2px solid White
        │   - Text: 16px Bold, White
        │   - Padding: 16px 40px
        │   - Border-radius: 40px
        ├── Checkboxes (2)
        │   - Custom styled checkboxes (15px)
        │   - Label text: 14px Medium, White, -0.28px letter-spacing
        │   - Text about T&C and data processing
        │   - Links underlined
        └── Gap: 40px between elements
```

**Section Height:** ~1500px
**Responsive:** Stack columns vertically on mobile

---

### SECTION 13: Footer
**Widget:** Elementor Footer or JetBlocks Footer

**Background:** Dark blue (#1926A0) with gradient overlay

**Layout:**
```
Full Width Section (Background: #1926A0)
├── Top Border Line (1px, White/Gray)
├── Content Container (4 columns + newsletter)
    ├── Column 1: Company Info (Career)
    │   ├── Heading: "Career"
    │   │   - Typography: 18px Bold Italic, White, -0.36px letter-spacing
    │   └── Links
    │       - News, Contact, Blog, Careers
    │       - Typography: 16px Medium, White, -0.32px letter-spacing, 1.8 line-height
    │       - Hover: Green underline
    ├── Column 2: Company Addresses
    │   ├── Heading: "Netwise S.A."
    │   │   - Typography: 18px Bold Italic, White
    │   ├── Address Block 1: Warsaw, Poland
    │   │   - Address: "8 Szamocka St., 01-748, Warsaw, POLAND"
    │   │   - Phone: "+48 (22) 3797170"
    │   │   - Email: "sales@netwise.pl"
    │   └── Address Block 2: Boca Raton, USA
    │       - Heading: "Netwise USA, Inc."
    │       - Address: "301 Yamato Rd., STE 1240, Boca Raton, FL 33431, USA"
    │       - Phone: "+1 (800) 994-8224"
    │       - Email: "sales@netwiseglobal.com"
    ├── Column 3: Services
    │   ├── Heading: "Services"
    │   │   - Typography: 18px Bold Italic, White
    │   └── Links
    │       - Implementing CRM platforms
    │       - Customer and Partner Portals Implementation (underlined, green)
    │       - Customer Data Platform (CDP) implementation
    │       - Implementing low-code solutions
    │       - Digital Readiness and Digital Strategy
    │       - Customer Analytics
    │   └── Sub-section: About us
    │       - Why Netwise?, Awards, Customer Success Stories
    ├── Column 4: Solutions & Products
    │   ├── Heading: "Solutions"
    │   │   - Typography: 18px Bold Italic, White
    │   ├── Microsoft Products List
    │   │   - Long list of all Dynamics 365 products
    │   │   - Typography: 16px Medium, White, 1.8 line-height
    │   └── Sub-section: Our products
    │       - Partner Relationship Management (PRM)
    │       - Netwise GDPR
    │       - Location Attractiveness Finder
    │       - Netwise Cloud Document Generator
    │       - Power ESRS
    └── Spacing
        - Padding: 80px top, 40px bottom
        - Column gap: 80px
        - Link gap: 12px (1.8 line-height creates natural spacing)
├── Separator Line (1px, White/Gray)
└── Copyright Section
    ├── Text: "All rights reserved © Netwise S.A. (2025)"
    ├── Links: "Terms and Conditions", "Privacy Policy"
    └── Typography: 16px Medium, White, -0.32px letter-spacing, 1.8 line-height
```

**Typography Details:**
- Headings: 18px Bold Italic, White, -0.36px letter-spacing
- Body text: 16px Medium, White, -0.32px letter-spacing, 1.8 line-height
- Links: Underline on hover, Green (#7ED321)

**Responsive:**
- Desktop: 4 columns
- Tablet: 2 columns (2x2 grid)
- Mobile: 1 column, stack vertically

---

## 🎯 Implementation Checklist

### Phase 1: Setup
- [ ] Install Elementor Pro
- [ ] Install CrocoBlock Suite (JetElements, JetTabs, JetBlocks, JetMenu)
- [ ] Install The Plus Addons for Elementor
- [ ] Install Essentials Addons for Elementor
- [ ] Import Montserrat font from Google Fonts
- [ ] Set up global colors in Elementor Theme Styles
- [ ] Set up global typography in Elementor Theme Styles

### Phase 2: Header
- [ ] Create Header template
- [ ] Add logo with link
- [ ] Configure navigation menu with dropdowns
- [ ] Add language selector
- [ ] Add search icon
- [ ] Add Contact CTA button
- [ ] Style header with shadows
- [ ] Enable sticky header
- [ ] Test responsiveness

### Phase 3: Hero Section
- [ ] Create full-width section
- [ ] Add background image with mask
- [ ] Add gradient overlay effects
- [ ] Add subtitle text
- [ ] Add main heading with colored text
- [ ] Add subheading
- [ ] Add CTA buttons with styling
- [ ] Test responsiveness

### Phase 4: Problem Cards
- [ ] Create 5-column grid section
- [ ] Add 5 problem statement cards
- [ ] Style cards with shadows and spacing
- [ ] Add icons to each card
- [ ] Test responsive breakpoints

### Phase 5: Solutions Section
- [ ] Create gradient background section
- [ ] Add heading with green highlights
- [ ] Add description text
- [ ] Create tab navigation (pills)
- [ ] Add product cards grid (6 cards)
- [ ] Style active tab
- [ ] Add product icons
- [ ] Add "More" links
- [ ] Create "Next Tab" highlight card
- [ ] Test tab functionality

### Phase 6: Solutions Detail Cards
- [ ] Create 5-column grid
- [ ] Add solution cards with icons
- [ ] Add titles and descriptions
- [ ] Style green bold text
- [ ] Add "More" links
- [ ] Apply elevated shadow to highlighted card
- [ ] Test responsiveness

### Phase 7: Logo Carousel
- [ ] Create carousel section
- [ ] Add heading with green highlight
- [ ] Configure carousel settings (autoplay, infinite loop)
- [ ] Add 7 partner logos (x2 for seamless loop)
- [ ] Style logo containers
- [ ] Add grayscale filter
- [ ] Add hover effects
- [ ] Test carousel functionality

### Phase 8: Stats Section
- [ ] Create stats grid (5 columns)
- [ ] Add heading
- [ ] Add counter widgets
- [ ] Apply gradient to numbers
- [ ] Add descriptions
- [ ] Add Microsoft badge image
- [ ] Add partnership text
- [ ] Test counter animations

### Phase 9: Testimonials
- [ ] Create testimonials section
- [ ] Add heading with green highlight
- [ ] Configure testimonial carousel
- [ ] Add 4 testimonial cards
- [ ] Add company logos
- [ ] Add quotes with italic styling
- [ ] Add author info
- [ ] Add "Full Case Study" CTAs
- [ ] Style navigation arrows
- [ ] Apply elevated shadow to highlighted card
- [ ] Test carousel functionality

### Phase 10: Octopus Section
- [ ] Create dark blue background section
- [ ] Add 2-column layout
- [ ] Add heading with green highlights
- [ ] Add description text
- [ ] Add octopus illustration
- [ ] Test responsiveness

### Phase 11: Featured Article
- [ ] Create white card with shadow
- [ ] Add horizontal layout
- [ ] Add featured image
- [ ] Add "Top Article" badge with dot
- [ ] Add article title
- [ ] Add excerpt text
- [ ] Add read time
- [ ] Add "Read the Article" CTA
- [ ] Position card overlapping sections
- [ ] Test responsiveness

### Phase 12: Blog Grid
- [ ] Create blog section
- [ ] Add heading with green highlight
- [ ] Configure post grid (3 columns)
- [ ] Add article cards
- [ ] Add category badges with colors
- [ ] Add titles and excerpts
- [ ] Add read time
- [ ] Add CTAs
- [ ] Connect to WordPress posts
- [ ] Test post query
- [ ] Test responsiveness

### Phase 13: Partnership Section
- [ ] Create section with background image
- [ ] Add gradient overlay
- [ ] Add Netwise logo
- [ ] Add Microsoft icon link
- [ ] Add heading with italic
- [ ] Create newsletter signup form
- [ ] Add email input
- [ ] Add subscribe button
- [ ] Add checkboxes with labels
- [ ] Add privacy text with links
- [ ] Test form functionality

### Phase 14: Footer
- [ ] Create footer section with dark background
- [ ] Add separator lines
- [ ] Create 4-column layout
- [ ] Add "Career" column with links
- [ ] Add company addresses (2 locations)
- [ ] Add "Services" column with links
- [ ] Highlight featured service link
- [ ] Add "About us" sub-section
- [ ] Add "Solutions" column with products list
- [ ] Add "Our products" sub-section
- [ ] Add copyright section
- [ ] Add Terms & Privacy links
- [ ] Style all links with hover effects
- [ ] Test responsiveness

### Phase 15: Global Refinements
- [ ] Review all spacing and gaps
- [ ] Check all typography is consistent
- [ ] Verify all colors match design system
- [ ] Test all hover states
- [ ] Test all link functionality
- [ ] Review all shadows
- [ ] Check border radius consistency
- [ ] Optimize images
- [ ] Test page load speed

### Phase 16: Responsive Testing
- [ ] Test on desktop (1920px, 1440px, 1366px)
- [ ] Test on tablet (1024px, 768px)
- [ ] Test on mobile (414px, 375px, 360px)
- [ ] Fix any layout issues
- [ ] Adjust typography for mobile
- [ ] Test touch interactions
- [ ] Test carousel navigation on mobile

### Phase 17: Animations & Interactions
- [ ] Add scroll animations (optional)
- [ ] Add hover animations on cards
- [ ] Add transition effects
- [ ] Test navigation dropdown animations
- [ ] Test carousel transitions
- [ ] Test tab switching animations

### Phase 18: SEO & Performance
- [ ] Add meta title and description
- [ ] Optimize all images (WebP format)
- [ ] Lazy load below-fold images
- [ ] Add structured data
- [ ] Test page speed
- [ ] Minify CSS and JS
- [ ] Enable caching
- [ ] Test mobile page speed

### Phase 19: Cross-browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Fix any browser-specific issues

### Phase 20: Final QA
- [ ] Full page review against Figma design
- [ ] Test all forms
- [ ] Test all links
- [ ] Check for console errors
- [ ] Test on real devices
- [ ] Get stakeholder approval
- [ ] Deploy to production

---

## 🔧 Custom CSS Requirements

### Gradient Text Effect
```css
.gradient-text {
    background: linear-gradient(90deg, #7ED321 0%, #1926A0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Button Shadow
```css
.btn-shadow {
    box-shadow: -195px 290px 98px 0px rgba(0,0,0,0),
                -125px 186px 90px 0px rgba(0,0,0,0.01),
                -70px 105px 76px 0px rgba(0,0,0,0.05),
                -31px 46px 56px 0px rgba(0,0,0,0.09),
                -8px 12px 31px 0px rgba(0,0,0,0.1);
}
```

### Elevated Card Shadow
```css
.card-elevated {
    box-shadow: 0px 613px 172px 0px rgba(0,0,0,0),
                0px 392px 157px 0px rgba(0,0,0,0.01),
                0px 221px 132px 0px rgba(0,0,0,0.05),
                0px 98px 98px 0px rgba(0,0,0,0.09),
                0px 25px 54px 0px rgba(0,0,0,0.1);
}
```

### Blend Mode for Background Effects
```css
.blend-color-dodge {
    mix-blend-mode: color-dodge;
    opacity: 0.3;
}
```

### Hover Effects
```css
.card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0px 20px 60px rgba(0,0,0,0.15);
}

.link-hover {
    position: relative;
    transition: color 0.3s ease;
}

.link-hover:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7ED321;
    transition: width 0.3s ease;
}

.link-hover:hover:after {
    width: 100%;
}
```

---

## 📱 Responsive Breakpoints

```
Desktop Large: 1920px+
Desktop: 1440px - 1919px
Laptop: 1024px - 1439px
Tablet: 768px - 1023px
Mobile Large: 480px - 767px
Mobile: 320px - 479px
```

### Responsive Adjustments

**Typography Scale (Mobile):**
- H2: 40px (from 64px)
- H3: 32px (from 48px)
- H4: 24px (from 32px)
- H5: 20px (from 24px)
- Paragraph: 18px (from 20px)

**Spacing Scale (Mobile):**
- Section padding: 40px (from 80px)
- Card padding: 24px (from 40px)
- Element gaps: Reduce by ~30%

**Grid Changes:**
- 5-column grids → 2 columns (tablet) → 1 column (mobile)
- 3-column grids → 2 columns (tablet) → 1 column (mobile)
- 2-column layouts → 1 column (mobile)

---

## 🎨 Widget Recommendations by Section

### Recommended Plugins/Widgets:

**Header:**
- Primary: JetMenu (CrocoBlock)
- Alternative: Elementor Header Builder

**Hero:**
- Elementor Section with Advanced Tab
- Custom CSS for masks and overlays

**Cards/Grids:**
- Primary: The Plus: Grid Builder
- Alternative: JetElements: Grid Widget

**Tabs:**
- Primary: JetTabs (CrocoBlock)
- Alternative: The Plus: Tabs/Tours

**Carousel:**
- Primary: The Plus: Carousel Anything
- Alternative: JetElements: Carousel

**Testimonials:**
- Primary: The Plus: Testimonial
- Alternative: JetElements: Testimonials

**Counters:**
- Primary: The Plus: Number Counter
- Alternative: Essentials: Counter

**Forms:**
- Primary: Elementor Form Widget
- Alternative: JetForm (CrocoBlock)

**Footer:**
- Primary: JetBlocks Footer Builder
- Alternative: Elementor Footer Builder

---

## ⚠️ Common Pitfalls to Avoid

1. **Image Quality**
   - Don't use low-resolution logos
   - Compress images properly
   - Use appropriate image formats (WebP for photos, SVG for logos)

2. **Typography**
   - Don't forget letter-spacing
   - Maintain consistent line-heights
   - Use correct font weights

3. **Spacing**
   - Don't use random padding values
   - Follow the spacing system
   - Maintain consistent gaps

4. **Colors**
   - Don't use approximate colors
   - Use exact hex values from design system
   - Maintain color consistency

5. **Responsive Design**
   - Don't forget mobile testing
   - Test all breakpoints
   - Adjust typography for smaller screens

6. **Performance**
   - Don't load all images eagerly
   - Use lazy loading
   - Optimize carousel images

7. **Accessibility**
   - Don't forget alt text
   - Maintain color contrast
   - Add keyboard navigation

---

## 📚 Additional Resources

### Figma Design
- Homepage: https://www.figma.com/design/kEMamUNdFneCwqH6AfFtIw/Netwise-Website?node-id=402-2514&m=dev

### Other Pages (Reference)
- Solutions: node-id=852-44
- Case Study: node-id=892-114
- Blog Post: node-id=213-1825
- Blog Archive: node-id=936-852
- Why Us: https://www.figma.com/design/qtNyA7pOrQ3bCGEZqOMpDz/Netwise?node-id=1132-3149&m=dev

### Fonts
- Montserrat: https://fonts.google.com/specimen/Montserrat

### Plugin Documentation
- Elementor Pro: https://elementor.com/help/
- CrocoBlock: https://crocoblock.com/knowledge-base/
- The Plus: https://theplusaddons.com/docs/
- Essentials: https://essential-addons.com/elementor/docs/

---

## 🎯 Success Criteria

Your implementation is complete when:

✅ **Visual Accuracy:** 95%+ match to Figma design
✅ **Responsive:** Works perfectly on all devices
✅ **Performance:** Page load < 3s on 3G
✅ **Accessibility:** Passes WCAG AA standards
✅ **Browser Support:** Works in all modern browsers
✅ **SEO:** All meta tags and structured data present
✅ **Functionality:** All interactions work smoothly
✅ **Code Quality:** Clean, maintainable, well-commented

---

**Document Version:** 1.0
**Last Updated:** November 3, 2025
**Created for:** Claude Code Implementation
**Design Source:** Figma (Node ID: 402:2514)
