# Little Stars Kids Clothing - Style Guide

## 🎨 Color Palette

### Primary Colors (Pastel Theme)
- **Peach**: `#FFB4A2` - Warm, friendly accent color
- **Baby Pink**: `#FFD1DC` - Soft, playful primary
- **Mint Green**: `#B8E5D2` - Fresh, calm accent
- **Sky Blue**: `#A8DADC` - Cool, gentle accent
- **Lavender**: `#E0BBE4` - Dreamy, soft accent
- **Soft Yellow**: `#FCF4A3` - Cheerful highlight

### Neutral Colors
- **Background**: `#fdfbf8` - Warm off-white
- **White**: `#ffffff` - Cards and surfaces
- **Text Primary**: `#1a1a1a` - Dark gray for text
- **Text Secondary**: `#717182` - Medium gray for secondary text
- **Border**: `rgba(0, 0, 0, 0.1)` - Subtle borders

---

## 📐 Typography

**Font Family**: Nunito (Google Fonts)
- Rounded, friendly, modern sans-serif

**Font Weights**:
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

**Usage**:
- Headings: Medium to Bold weights
- Body text: Regular weight
- Buttons & Labels: Medium weight

---

## 🎭 Component Patterns

### Buttons
- **Primary**: Gradient (Peach → Baby Pink), rounded-full
- **Secondary**: Outline, rounded-full, hover with pastel background
- **WhatsApp**: `#25D366` solid green, rounded-full

### Cards
- Rounded corners: `rounded-3xl` (24px)
- Soft shadow: `shadow-md` on default, `shadow-xl` on hover
- Hover effect: `-translate-y-2` (lift on hover)

### Forms
- Input fields: `rounded-full` (fully rounded)
- Textarea: `rounded-2xl` (16px)
- Focus ring: Peach color `#FFB4A2`

### Badges
- Small tags: `rounded-full`, pastel backgrounds
- Tag types: "New", "Best Seller", "Sale"

---

## 📱 Responsive Breakpoints

### Mobile First Design
- **Mobile**: Base styles (< 640px)
- **Tablet**: `md:` prefix (≥ 768px)
- **Desktop**: `lg:` prefix (≥ 1024px)

### Grid Layouts
- **Product Grid**:
  - Mobile: 2 columns
  - Desktop: 3-4 columns
- **Category Cards**:
  - Mobile: 2 columns
  - Desktop: 3 columns

---

## 🧩 Component Structure

### Core Components
1. **Header** (`/components/Header.tsx`)
   - Sticky navigation with mobile hamburger menu
   - Logo with gradient background
   - Desktop: Horizontal nav + action buttons
   - Mobile: Collapsible menu

2. **Footer** (`/components/Footer.tsx`)
   - Three-column layout (mobile stacks)
   - Social media icons
   - Contact information
   - Quick links

3. **ProductCard** (`/components/ProductCard.tsx`)
   - Image with hover overlay
   - Quick view button on hover
   - Color swatches preview
   - Price and category info
   - Tag badge (New/Best Seller)

4. **FilterPanel** (`/components/FilterPanel.tsx`)
   - Desktop: Sidebar panel
   - Mobile: Sheet drawer
   - Filters: Category, Age, Price, Color, Search

5. **ProductDetails** (`/components/ProductDetails.tsx`)
   - Full-screen modal
   - Image gallery with thumbnails
   - Size & color selectors
   - Quantity selector
   - WhatsApp & Email CTAs

6. **EnquiryModal** (`/components/EnquiryModal.tsx`)
   - Form with customer details
   - Auto-filled product info
   - Success state after submission

7. **WhatsAppButton** (`/components/WhatsAppButton.tsx`)
   - Floating button (bottom-right)
   - WhatsApp green `#25D366`
   - Bounce animation

### Pages
1. **Home** (`/pages/Home.tsx`)
   - Hero section with CTA
   - Category cards
   - Best sellers grid
   - New arrivals grid
   - CTA banner

2. **ProductListing** (`/pages/ProductListing.tsx`)
   - Filter sidebar
   - Sort dropdown
   - Product grid
   - Empty state

---

## 🎯 Design Principles

### 1. Kid-Friendly
- Soft pastel colors
- Rounded shapes everywhere
- Playful but not cluttered
- Large, clear CTAs

### 2. Warm & Welcoming
- Generous white space
- Soft shadows, no harsh edges
- Gradient backgrounds for depth
- Friendly typography

### 3. Mobile-First
- Touch-friendly button sizes (min 44px)
- Easy thumb navigation
- Collapsible filters on mobile
- Sticky header for quick access

### 4. Performance
- Lazy-loaded images
- Component-based architecture
- Minimal re-renders
- Optimized assets

---

## 🔧 Developer Notes

### Image Handling
- Use `ImageWithFallback` component for all new images
- Figma imports use direct image paths
- Unsplash images for placeholders

### State Management
- Local React state (useState)
- Props drilling for simple app
- Easy to migrate to Context/Redux if needed

### Styling
- Tailwind CSS v4.0
- Custom CSS variables in globals.css
- No inline styles except dynamic colors
- Consistent spacing scale (4px base)

### WhatsApp Integration
Format: `https://wa.me/PHONE?text=MESSAGE`
- Pre-fill product details
- Customer info optional
- Opens in new tab

### Email Enquiry
- Form validation required fields
- Success state animation
- Static implementation (no backend)
- Ready for API integration

---

## 📦 File Structure

```
/
├── App.tsx                    # Main app with routing
├── styles/
│   └── globals.css           # Global styles + theme
├── components/
│   ├── Header.tsx            # Navigation
│   ├── Footer.tsx            # Footer with links
│   ├── Hero.tsx              # Homepage hero
│   ├── ProductCard.tsx       # Product grid item
│   ├── ProductDetails.tsx    # Product modal
│   ├── FilterPanel.tsx       # Filter sidebar
│   ├── EnquiryModal.tsx      # Email form
│   ├── WhatsAppButton.tsx    # Floating button
│   └── ui/                   # Shadcn components
├── pages/
│   ├── Home.tsx              # Landing page
│   └── ProductListing.tsx    # Shop page
└── data/
    └── products.ts           # Mock product data
```

---

## ✅ Checklist for Handoff

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Component-based React architecture
- [x] Pastel color theme implemented
- [x] Rounded, kid-friendly UI elements
- [x] WhatsApp integration with pre-filled messages
- [x] Email enquiry form with validation
- [x] Filter & sort functionality
- [x] Image gallery with thumbnails
- [x] Size & color selectors
- [x] Hover effects & animations
- [x] Empty states & loading states
- [x] Accessibility considerations
- [x] Clean, developer-friendly code

---

## 🚀 Future Enhancements

- Add shopping cart functionality
- Integrate with payment gateway
- Connect to real backend/CMS
- Add user authentication
- Implement wishlist feature
- Add product reviews & ratings
- Include size guide modal
- Add live chat support
- Implement inventory tracking
- Add multi-language support
