# Mastery Journey Calculator

A pixel-perfect, multi-page web application that calculates your REAL deliberate practice hours and guides you through the mastery journey with interactive stages, pivot scoring, and video CTAs.

## Features

- **7 Interactive Pages**: Hero Calculator, Result Dashboard, Maya Story, Science of Mastery, Reset Danger, Solution, and Final CTA
- **Real Hours Calculation**: `weeks * hoursPerWeek * 0.47` formula
- **Stage System**: Explorer → Apprentice → Builder → Professional → Elite → Mastery
- **Pivot Score Tracking**: Monitors field changes and warns about reset danger
- **Smooth Animations**: Page transitions, button pulses, slider glows, card fades
- **Responsive Design**: Mobile-first approach with stacked cards and touch-friendly sliders

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
├── src/
│   ├── pages/
│   │   ├── HeroPage.tsx      # Page 1: Calculator with glass card
│   │   ├── ResultPage.tsx    # Page 2: 3-card dashboard
│   │   ├── MayaPage.tsx      # Page 3: Pivot cycle diagram
│   │   ├── SciencePage.tsx   # Page 4: Research cards + violin
│   │   ├── ResetPage.tsx     # Page 5: Dark theme warning
│   │   ├── SolutionPage.tsx  # Page 6: 3 pillars + video
│   │   └── FinalPage.tsx     # Page 7: CTA + share badge
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   │   └── calculator.ts     # Calculation logic
│   ├── store/
│   │   └── appStore.ts       # Zustand state management
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   ├── App.tsx               # Main app with navigation
│   ├── index.css             # Global styles + animations
│   └── main.tsx              # Entry point
├── backend/
│   ├── server.js             # Express server
│   └── package.json          # Backend dependencies
├── package.json              # Frontend dependencies
├── tailwind.config.js        # Tailwind configuration
└── vite.config.ts            # Vite configuration
```

## Calculation Logic

```typescript
const realHours = weeksBetween(startDate, today) * hoursPerWeek * 0.47;

function getStage(hours) {
  if (hours < 1000) return "Explorer";
  if (hours < 3000) return "Apprentice";
  if (hours < 6000) return "Builder";
  if (hours < 8000) return "Professional";
  if (hours < 10000) return "Elite";
  return "Mastery";
}
```

## API Endpoints

### POST /api/calculate
Request:
```json
{
  "startDate": "2023-01-01",
  "hoursPerWeek": 15,
  "pivots": ["marketing", "coding"]
}
```

Response:
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
Request:
```json
{
  "email": "user@example.com",
  "stage": "Apprentice"
}
```

## Getting Started

### Frontend
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend
```bash
cd backend

# Install dependencies
npm install

# Start server
npm start

# Development mode with hot reload
npm run dev
```

## Design System

### Colors
- Purple Primary: `#7C3AED`
- Purple Light: `#A78BFA`
- Purple Dark: `#5B21B6`
- Glass Background: `rgba(255, 255, 255, 0.08)`
- Glass Border: `rgba(255, 255, 255, 0.15)`
- Cream Background: `#FAF8F5`
- Gold Badge: `#FCD34D`
- Warning Orange: `#F97316`
- Warning Coral: `#FB7185`
- Dark Background: `#0F0F1A`
- Red Danger: `#EF4444`

### Animations
- Button Pulse: 2s ease-in-out infinite
- Slider Glow: box-shadow glow effect
- Card Fade In: 0.6s ease-out
- Page Slide: 0.4s ease-out
- Fire Glow: 1.5s ease-in-out infinite (red text shadow)

## Responsive Breakpoints
- Mobile: < 640px (stacked layout)
- Tablet: 640px - 1024px (2-column grid)
- Desktop: > 1024px (full layout)

## License
MIT
