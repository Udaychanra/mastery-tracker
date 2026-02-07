# Mastery Journey Calculator

A pixel-perfect, multi-page web application that calculates your REAL deliberate practice hours and guides you through the mastery journey with interactive stages, pivot scoring, and video CTAs.

**Live Demo**: https://mfrivbbzw56ye.ok.kimi.link

## Features

### 7 Interactive Pages
1. **Hero Calculator** - Glass card design with date input and hours slider
2. **Result Dashboard** - 3-card layout showing Real Hours, Stage Badge, and Warning
3. **Maya Story** - Pivot cycle diagram with Pivot Score widget
4. **Science of Mastery** - Research cards with violin graphic
5. **Reset Danger** - Dark theme with red progress break warning
6. **Solution** - 3 pillars (Mental Model, Stay Power, Proof You're Normal)
7. **Final CTA** - Video call-to-action with share badge and footer

### Core Functionality
- **Real Hours Calculation**: `weeks * hoursPerWeek * 0.47`
- **Stage System**: Explorer → Apprentice → Builder → Professional → Elite → Mastery
- **Pivot Score Tracking**: Monitors field changes and warns about reset danger
- **68% Quit Warning**: Shown at Apprentice phase

### Animations
- Button pulse effect
- Slider glow
- Card fade-in animations
- Page transition slides
- Fire glow on reset warning
- Lightning effects

## Tech Stack

### Frontend
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Zustand (state management)
- Zod (form validation)
- date-fns (date handling)
- Lucide React (icons)

### Backend
- Node.js + Express
- CORS enabled
- Zod validation
- date-fns for date calculations

## Project Structure

```
├── app/                          # Frontend application
│   ├── src/
│   │   ├── pages/               # 7 page components
│   │   │   ├── HeroPage.tsx     # Page 1: Calculator
│   │   │   ├── ResultPage.tsx   # Page 2: Dashboard
│   │   │   ├── MayaPage.tsx     # Page 3: Pivot Story
│   │   │   ├── SciencePage.tsx  # Page 4: Science
│   │   │   ├── ResetPage.tsx    # Page 5: Warning
│   │   │   ├── SolutionPage.tsx # Page 6: Solution
│   │   │   └── FinalPage.tsx    # Page 7: Final CTA
│   │   ├── components/
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── lib/
│   │   │   └── calculator.ts    # Calculation logic
│   │   ├── store/
│   │   │   └── appStore.ts      # Zustand state
│   │   ├── types/
│   │   │   └── index.ts         # TypeScript types
│   │   ├── App.tsx              # Main app
│   │   ├── index.css            # Global styles
│   │   └── main.tsx             # Entry point
│   ├── backend/                 # Backend API
│   │   ├── server.js            # Express server
│   │   └── package.json         # Backend deps
│   ├── package.json             # Frontend deps
│   ├── tailwind.config.js       # Tailwind config
│   └── vite.config.ts           # Vite config
├── package.json                 # Root package.json
└── README.md                    # This file
```

## Calculation Logic

```typescript
// Real hours formula
const realHours = weeksBetween(startDate, today) * hoursPerWeek * 0.47;

// Stage determination
function getStage(hours: number): Stage {
  if (hours < 1000) return "Explorer";
  if (hours < 3000) return "Apprentice";
  if (hours < 6000) return "Builder";
  if (hours < 8000) return "Professional";
  if (hours < 10000) return "Elite";
  return "Mastery";
}

// Pivot score
const pivotScore = pivots.length; // +1 for each field change
```

## API Endpoints

### POST /api/calculate
Calculate real hours and stage.

**Request:**
```json
{
  "startDate": "2023-01-01",
  "hoursPerWeek": 15,
  "pivots": ["marketing", "coding"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "realHours": 2112,
    "stage": "Apprentice",
    "weeks": 104,
    "message": "You're building foundations...",
    "pivotScore": 2
  }
}
```

### POST /api/subscribe
Subscribe with email and stage.

**Request:**
```json
{
  "email": "user@example.com",
  "stage": "Apprentice"
}
```

### GET /api/health
Health check endpoint.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mastery-journey-calculator
```

2. Install all dependencies:
```bash
npm run install:all
```

### Development

Start the frontend development server:
```bash
npm run frontend:dev
```

Start the backend server:
```bash
npm run backend:dev
```

### Production Build

Build the frontend:
```bash
npm run frontend:build
```

The built files will be in `app/dist/`.

## Design System

### Colors
| Name | Value | Usage |
|------|-------|-------|
| Purple Primary | `#7C3AED` | Primary buttons, accents |
| Purple Light | `#A78BFA` | Slider, highlights |
| Purple Dark | `#5B21B6` | Gradients |
| Glass BG | `rgba(255,255,255,0.08)` | Glass cards |
| Glass Border | `rgba(255,255,255,0.15)` | Card borders |
| Cream BG | `#FAF8F5` | Result page background |
| Gold Badge | `#FCD34D` | Stage badges |
| Warning Orange | `#F97316` | Warning cards |
| Dark BG | `#0F0F1A` | Dark theme pages |
| Red Danger | `#EF4444` | Reset warnings |

### Animations
| Animation | Duration | Usage |
|-----------|----------|-------|
| Button Pulse | 2s infinite | Primary CTAs |
| Slider Glow | static | Range input |
| Card Fade In | 0.6s | Page load |
| Page Slide | 0.4s | Navigation |
| Fire Glow | 1.5s infinite | Reset warning |

## Responsive Breakpoints
- **Mobile**: < 640px (stacked cards, full-width buttons)
- **Tablet**: 640px - 1024px (2-column grids)
- **Desktop**: > 1024px (full layout, side elements)

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License
MIT License - feel free to use for personal or commercial projects.

## Credits
Designed and built based on the 7 UI design images provided.
