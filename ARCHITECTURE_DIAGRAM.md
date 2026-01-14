# Visual Architecture Diagram

## Current Structure (Before Refactoring)

```
┌─────────────────────────────────────────────────────────────┐
│                        src/                                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  app/                                                 │  │
│  │    ├── App.tsx (event-based navigation)             │  │
│  │    ├── components/                                   │  │
│  │    │   ├── CloudPracticePage.tsx                    │  │
│  │    │   ├── AIPage.tsx                                │  │
│  │    │   ├── Footer.tsx                                │  │
│  │    │   ├── MobileNav.tsx                             │  │
│  │    │   ├── (38 more files...)                        │  │
│  │    │   ├── ui/ (folder)                              │  │
│  │    │   └── figma/ (folder)                           │  │
│  │    ├── contexts/                                      │  │
│  │    └── utils/                                         │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  imports/                                             │  │
│  │    ├── Desktop72.tsx (4500+ lines)                   │  │
│  │    └── svg files                                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

Problems:
❌ All components mixed together
❌ Custom event navigation
❌ No URL routing
❌ Monolithic Desktop72.tsx
```

## New Structure (After Refactoring)

```
┌──────────────────────────────────────────────────────────────────────┐
│                             src/                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  app/                                                          │  │
│  │    ├── App.tsx (React Router)                                │  │
│  │    ├── contexts/                                              │  │
│  │    └── utils/                                                 │  │
│  └───────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  components/ (SHARED - Used by multiple pages)               │  │
│  │    ├── Layout/                                                │  │
│  │    │   └── RootLayout.tsx (wraps all pages)                 │  │
│  │    ├── Footer.tsx                                            │  │
│  │    ├── MobileNav.tsx                                         │  │
│  │    ├── SearchModal.tsx                                       │  │
│  │    ├── GetStartedModal.tsx                                   │  │
│  │    ├── VideoModal.tsx                                        │  │
│  │    ├── (13 more shared components)                          │  │
│  │    ├── ui/ (shadcn components)                               │  │
│  │    └── figma/ (ImageWithFallback)                           │  │
│  └───────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  pages/ (PAGES - One folder per page)                        │  │
│  │    ├── Home/                                                  │  │
│  │    │   └── HomePage.tsx                                      │  │
│  │    ├── CloudPractice/                                         │  │
│  │    │   └── CloudPracticePage.tsx                            │  │
│  │    ├── AI/                                                    │  │
│  │    │   └── AIPage.tsx                                        │  │
│  │    ├── (20 more page folders...)                            │  │
│  │    └── NewsUpdates/                                           │  │
│  │        └── NewsUpdatesPage.tsx                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  routes.tsx (Route configuration)                            │  │
│  └───────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  imports/ (SVGs and assets)                                   │  │
│  │    └── svg files                                              │  │
│  └───────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘

Benefits:
✅ Clear separation of concerns
✅ React Router navigation
✅ 23 distinct URL routes
✅ Each page in its own folder
✅ Scalable structure
```

## Data Flow Diagram

### Before (Custom Events)
```
┌──────────┐     Custom Event      ┌──────────────┐
│  Footer  │ ──────dispatch────────>│ Desktop72.tsx│
└──────────┘                        └──────────────┘
                                           │
┌──────────┐     Custom Event             │ setState
│MobileNav │ ──────dispatch────────>       │
└──────────┘                               ▼
                                    ┌──────────────┐
┌──────────┐     Custom Event      │ Show/Hide    │
│   CTA    │ ──────dispatch────────>│ Pages        │
└──────────┘                        └──────────────┘
```

### After (React Router)
```
┌──────────┐     navigate()        ┌──────────────┐
│  Footer  │ ─────or Link────────>│ React Router │
└──────────┘                        └──────────────┘
                                           │
┌──────────┐     navigate()               │ URL Change
│MobileNav │ ─────or Link────────>        │
└──────────┘                               ▼
                                    ┌──────────────┐
┌──────────┐     navigate()        │ Render Page  │
│   CTA    │ ─────or Link────────>│ via <Outlet> │
└──────────┘                        └──────────────┘
```

## Component Hierarchy

### Before
```
App.tsx
  └── ThemeProvider
      └── Desktop72 (4500+ lines)
          ├── Navigation (embedded)
          ├── Home Content (embedded)
          ├── CloudPracticePage (conditional)
          ├── AIPage (conditional)
          ├── ... (20 more pages conditionally rendered)
          └── Footer
```

### After
```
App.tsx
  └── RouterProvider
      └── RootLayout
          ├── ThemeProvider
          ├── Header (new - extracted from Desktop72)
          ├── <Outlet>
          │   └── CurrentPage (rendered based on URL)
          │       ├── HomePage (at /)
          │       ├── CloudPracticePage (at /services/cloud-practice)
          │       ├── AIPage (at /ai)
          │       └── ... (20 more routes)
          ├── Footer
          └── SearchModal
```

## Import Resolution Flow

### Before
```
Component File: /src/app/components/CloudPracticePage.tsx

import { Logo } from './Logo'
import { Footer } from './Footer'
import svgPaths from '../../imports/svg-file'
                    ↑↑
            Relative paths - brittle!
```

### After
```
Component File: /src/pages/CloudPractice/CloudPracticePage.tsx

import { Logo } from '@/components/Logo'
import { Footer } from '@/components/Footer'
import svgPaths from '@/imports/svg-file'
                    ↑↑
            Absolute paths - robust!
```

## URL to Component Mapping

```
Browser URL                         React Router                    Component
─────────────────────────────────────────────────────────────────────────────────
/                                   Route: "/"                  →   HomePage
/services/cloud-practice            Route: "/services/..."      →   CloudPracticePage
/ai/bfsi-agents                     Route: "/ai/bfsi-agents"    →   BFSIAgentsPage
/products/agent-studio              Route: "/products/..."      →   AgentStudioPage
/company/careers                    Route: "/company/careers"   →   CareersPage
```

## Navigation Methods Comparison

### OLD WAY (Custom Events)
```typescript
// In Footer.tsx
const handleClick = () => {
  window.dispatchEvent(
    new CustomEvent('navigate-service', {
      detail: 'Cloud Practice'
    })
  );
};

// In Desktop72.tsx
useEffect(() => {
  const handler = (e: any) => {
    setShowCloudPractice(true);
    // Hide all other pages
  };
  window.addEventListener('navigate-service', handler);
  return () => window.removeEventListener('navigate-service', handler);
}, []);
```

### NEW WAY (React Router)
```typescript
// In Footer.tsx
import { Link } from 'react-router-dom';

<Link to="/services/cloud-practice">
  Cloud Practice
</Link>

// Or using useNavigate
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
const handleClick = () => {
  navigate('/services/cloud-practice');
};

// React Router handles everything automatically!
```

## File Organization Comparison

### Before
```
/src/app/components/
├── CloudPracticePage.tsx          } Pages mixed
├── AIPage.tsx                     } with shared
├── Footer.tsx                     } components
├── MobileNav.tsx                  } 
├── SecurityPage.tsx               } No clear
├── ThemeToggle.tsx                } separation
├── ... (36 more files)            }
```

### After
```
/src/components/                   Shared across multiple pages
├── Footer.tsx                     
├── MobileNav.tsx
├── ThemeToggle.tsx
└── ... (15 more shared)

/src/pages/                        One folder per page
├── CloudPractice/
│   └── CloudPracticePage.tsx      Clear page organization
├── AI/
│   └── AIPage.tsx                 Easy to find
├── Security/
│   └── SecurityPage.tsx           Scalable structure
└── ... (20 more pages)
```

## Routing State Machine

```
┌─────────────┐
│  App Start  │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ RouterProvider  │ Reads current URL
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ Match Route     │ ← routes.tsx
└──────┬──────────┘
       │
       ├─ / ────────────────────→ HomePage
       ├─ /services/* ──────────→ Service Pages
       ├─ /ai/* ────────────────→ AI Pages
       ├─ /products/* ──────────→ Product Pages
       └─ /company/* ───────────→ Company Pages
                                    │
                                    ▼
                              ┌──────────────┐
                              │ RootLayout   │
                              │   └─ <Outlet>│ ← Page renders here
                              └──────────────┘
```

## Scalability Comparison

### Adding a New Page

#### Before (Complex)
```
1. Create PageComponent.tsx in /src/app/components/
2. Import in Desktop72.tsx (line 10-ish)
3. Add useState for showPage (line 3850-ish)
4. Add event listener (line 4500-ish)
5. Add click handler (line 3900-ish)
6. Add conditional render (line 4600-ish)
7. Update navigation components
8. Update footer
9. Hope you didn't break anything!

Total: ~10 file changes, lots of state management
```

#### After (Simple)
```
1. Create /src/pages/NewPage/NewPagePage.tsx
2. Add route to /src/routes.tsx (1 line)
3. Add link in navigation component (1 line)

Total: 2 file changes, automatic routing
```

---

## Summary

### Current State (Before)
- **Structure**: Flat, all mixed together
- **Navigation**: Custom events (non-standard)
- **URLs**: No real routing
- **Files**: 40+ in one folder
- **Maintenance**: Difficult to scale

### Target State (After)
- **Structure**: Organized, clear separation
- **Navigation**: React Router (industry standard)
- **URLs**: 23 distinct routes
- **Files**: Organized in logical folders
- **Maintenance**: Easy to scale and maintain

**The refactoring transforms the codebase from a custom solution to an industry-standard React application architecture.**
