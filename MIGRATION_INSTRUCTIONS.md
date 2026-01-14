# Step-by-Step Migration Instructions

## Prerequisites Completed ✅
1. ✅ React Router installed
2. ✅ Routes configured (`/src/routes.tsx`)
3. ✅ RootLayout created (`/src/components/Layout/RootLayout.tsx`)
4. ✅ App.tsx updated to use React Router

## Step 1: Move Shared Components

Execute these file moves:

```bash
# Create shared components directory
mkdir -p /src/components

# Move shared components (preserve exact filenames)
mv /src/app/components/Footer.tsx /src/components/Footer.tsx
mv /src/app/components/MobileNav.tsx /src/components/MobileNav.tsx
mv /src/app/components/SearchModal.tsx /src/components/SearchModal.tsx
mv /src/app/components/ThemeToggle.tsx /src/components/ThemeToggle.tsx
mv /src/app/components/GetStartedModal.tsx /src/components/GetStartedModal.tsx
mv /src/app/components/VideoModal.tsx /src/components/VideoModal.tsx
mv /src/app/components/WhoWeAreDropdown.tsx /src/components/WhoWeAreDropdown.tsx
mv /src/app/components/Logo.tsx /src/components/Logo.tsx
mv /src/app/components/GradientCTAButton.tsx /src/components/GradientCTAButton.tsx
mv /src/app/components/HeroCard.tsx /src/components/HeroCard.tsx
mv /src/app/components/LayoutWrapper.tsx /src/components/LayoutWrapper.tsx
mv /src/app/components/ResponsiveWrapper.tsx /src/components/ResponsiveWrapper.tsx
mv /src/app/components/ThemedSection.tsx /src/components/ThemedSection.tsx
mv /src/app/components/CTASection.tsx /src/components/CTASection.tsx
mv /src/app/components/AwardsSection.tsx /src/components/AwardsSection.tsx
mv /src/app/components/CounterAnimation.tsx /src/components/CounterAnimation.tsx
mv /src/app/components/ProductsSection.tsx /src/components/ProductsSection.tsx
mv /src/app/components/UseCasesSection.tsx /src/components/UseCasesSection.tsx

# Move UI and Figma folders
mv /src/app/components/ui /src/components/ui
mv /src/app/components/figma /src/components/figma
```

### Then update imports in each moved file:

**Pattern to find and replace:**
- Find: `from './` or `from '../`
- Replace with: `from '@/components/`

OR use global find/replace in your editor:
- Find: `from ['"]\.\.?/([^'"]+)['"]`
- Replace: `from '@/components/$1'` (for shared components)
- Replace: `from '@/imports/$1'` (for imports folder)

## Step 2: Create Pages Structure & Move Page Components

```bash
# Create all page directories
mkdir -p /src/pages/Home
mkdir -p /src/pages/CloudPractice
mkdir -p /src/pages/DigitalEngineering
mkdir -p /src/pages/BigData
mkdir -p /src/pages/AppModernization
mkdir -p /src/pages/Security
mkdir -p /src/pages/DatabaseManagement
mkdir -p /src/pages/ERPTesting
mkdir -p /src/pages/AI
mkdir -p /src/pages/BFSIAgents
mkdir -p /src/pages/BrandManagement
mkdir -p /src/pages/AgentStudio
mkdir -p /src/pages/AtlasAPIManager
mkdir -p /src/pages/OttohmVideo
mkdir -p /src/pages/ITSMTicketing
mkdir -p /src/pages/AIOps
mkdir -p /src/pages/SmartContracts
mkdir -p /src/pages/CaseStudies
mkdir -p /src/pages/OurTeam
mkdir -p /src/pages/AboutUs
mkdir -p /src/pages/Partners
mkdir -p /src/pages/Careers
mkdir -p /src/pages/NewsUpdates

# Move page files
mv /src/app/components/CloudPracticePage.tsx /src/pages/CloudPractice/CloudPracticePage.tsx
mv /src/app/components/DigitalEngineeringPage.tsx /src/pages/DigitalEngineering/DigitalEngineeringPage.tsx
mv /src/app/components/BigDataPage.tsx /src/pages/BigData/BigDataPage.tsx
mv /src/app/components/AppModernizationPage.tsx /src/pages/AppModernization/AppModernizationPage.tsx
mv /src/app/components/SecurityPage.tsx /src/pages/Security/SecurityPage.tsx
mv /src/app/components/DatabaseManagementPage.tsx /src/pages/DatabaseManagement/DatabaseManagementPage.tsx
mv /src/app/components/ERPTestingPage.tsx /src/pages/ERPTesting/ERPTestingPage.tsx
mv /src/app/components/AIPage.tsx /src/pages/AI/AIPage.tsx
mv /src/app/components/BFSIAgentsPage.tsx /src/pages/BFSIAgents/BFSIAgentsPage.tsx
mv /src/app/components/BrandManagementPage.tsx /src/pages/BrandManagement/BrandManagementPage.tsx
mv /src/app/components/AgentStudioPage.tsx /src/pages/AgentStudio/AgentStudioPage.tsx
mv /src/app/components/AtlasAPIManagerPage.tsx /src/pages/AtlasAPIManager/AtlasAPIManagerPage.tsx
mv /src/app/components/OttohmVideoPage.tsx /src/pages/OttohmVideo/OttohmVideoPage.tsx
mv /src/app/components/ITSMTicketingPage.tsx /src/pages/ITSMTicketing/ITSMTicketingPage.tsx
mv /src/app/components/AIOpsPage.tsx /src/pages/AIOps/AIOpsPage.tsx
mv /src/app/components/SmartContractsPage.tsx /src/pages/SmartContracts/SmartContractsPage.tsx
mv /src/app/components/CaseStudiesPage.tsx /src/pages/CaseStudies/CaseStudiesPage.tsx
mv /src/app/components/OurTeamPage.tsx /src/pages/OurTeam/OurTeamPage.tsx
mv /src/app/components/AboutUsPage.tsx /src/pages/AboutUs/AboutUsPage.tsx
mv /src/app/components/PartnersPage.tsx /src/pages/Partners/PartnersPage.tsx
mv /src/app/components/CareersPage.tsx /src/pages/Careers/CareersPage.tsx
mv /src/app/components/NewsUpdatesPage.tsx /src/pages/NewsUpdates/NewsUpdatesPage.tsx
```

### Update imports in each page file:

For each page file in `/src/pages/{PageName}/{PageName}Page.tsx`:

1. Update imports to use `@/components/` for shared components
2. Add default export at the end:

```typescript
// At the end of each page file, change:
// export function CloudPracticePage() { ... }
// To:
export default function CloudPracticePage() { ... }
```

**Example for CloudPracticePage.tsx:**
```typescript
// OLD IMPORTS:
import { Component } from '../Component';
import { AnotherComponent } from './AnotherComponent';

// NEW IMPORTS:
import { Component } from '@/components/Component';
import { AnotherComponent } from '@/components/AnotherComponent';
```

## Step 3: Extract Home Page from Desktop72.tsx

The Home page content is currently embedded in `/src/imports/Desktop72.tsx`. 

You need to:
1. Copy the main home page JSX from Desktop72.tsx
2. Create `/src/pages/Home/HomePage.tsx`
3. Paste and adapt the code
4. Update all imports to use `@/components/`
5. Remove navigation state logic (will use React Router instead)

**Template for HomePage.tsx:**
```typescript
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import all necessary components
import { HeroCard } from '@/components/HeroCard';
// ... other imports

export default function HomePage() {
  const navigate = useNavigate();

  // Add your home page JSX here
  // Replace onClick handlers with navigate() calls

  return (
    <div>
      {/* Home page content */}
    </div>
  );
}
```

## Step 4: Update Navigation to Use React Router

### In Footer.tsx:
Replace custom event handlers with React Router Links:

```typescript
// OLD:
import { motion } from 'motion/react';

const services = [
  { name: "Cloud Practice", handler: () => onServiceClick?.("Cloud Practice") },
  // ...
];

<motion.button onClick={service.handler}>
  {service.name}
</motion.button>

// NEW:
import { Link } from 'react-router-dom';

const services = [
  { name: "Cloud Practice", path: "/services/cloud-practice" },
  { name: "Digitalization", path: "/services/digital-engineering" },
  // ...
];

<Link to={service.path} className="...">
  {service.name}
</Link>
```

### In MobileNav.tsx:
Use `useNavigate()` hook:

```typescript
import { useNavigate } from 'react-router-dom';

function MobileNav() {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
    // Close mobile menu if needed
  };

  // Update all navigation handlers to use navigate(path)
}
```

### In GetStartedModal.tsx and other CTAs:
Replace navigation events with `useNavigate()`:

```typescript
import { useNavigate } from 'react-router-dom';

function GetStartedModal() {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contact'); // or appropriate path
  };
}
```

## Step 5: Update RootLayout to Include Header/Nav

Currently, the RootLayout only has Footer. You need to add the header/navigation that was in Desktop72.tsx:

```typescript
// /src/components/Layout/RootLayout.tsx
import { Header } from '@/components/Header'; // Create this from Desktop72 header

export function RootLayout() {
  return (
    <ThemeProvider>
      <div className="...">
        <Header /> {/* Add header */}
        <Outlet /> {/* Pages render here */}
        <Footer />
        <SearchModal ... />
      </div>
    </ThemeProvider>
  );
}
```

## Step 6: Clean Up

Once everything is working:

```bash
# Remove old structure
rm -rf /src/app/components
rm /src/imports/Desktop72.tsx

# Keep these:
# - /src/app/contexts/
# - /src/app/utils/
# - /src/app/App.tsx (already updated)
```

## Step 7: Final Verification

Test checklist:
- [ ] Navigate to http://localhost:5173/ - Home page loads
- [ ] Click any service link - navigates to correct page
- [ ] Click browser back button - returns to previous page
- [ ] Navigate to http://localhost:5173/services/cloud-practice directly - page loads
- [ ] Mobile menu works
- [ ] Footer links work
- [ ] Theme toggle persists
- [ ] Search modal opens
- [ ] No console errors
- [ ] All 23 pages are accessible

## Common Issues & Solutions

### Issue: Import errors after moving files
**Solution:** Make sure all imports use `@` alias:
- `@/components/...` for shared components
- `@/pages/...` for pages
- `@/imports/...` for asset imports
- `@/app/contexts/...` for contexts
- `@/app/utils/...` for utilities

### Issue: "Module not found" for page components
**Solution:** Check that:
1. Page file exists in correct location
2. Page has default export
3. Routes.tsx imports match actual file paths
4. Lazy imports are correctly formatted

### Issue: Navigation doesn't work
**Solution:** Make sure:
1. All navigation uses React Router (Link component or useNavigate hook)
2. No more custom events (window.dispatchEvent)
3. Routes are correctly defined in routes.tsx

### Issue: Styles broken
**Solution:**
1. Check that CSS imports are still in place
2. Verify Tailwind classes are correct
3. Check that theme CSS variables are loaded

## Quick Reference: Import Patterns

```typescript
// Shared Components
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Pages (in routes.tsx)
const HomePage = React.lazy(() => import('@/pages/Home/HomePage'));

// Context
import { ThemeProvider } from '@/app/contexts/ThemeContext';

// Utils
import { someUtil } from '@/app/utils/navigationHelper';

// Assets
import svgPaths from '@/imports/svg-bngkqqxd9l';
import imgSomething from 'figma:asset/hash.png'; // Keep as-is
```

## Navigation Paths Quick Reference

- Home: `/`
- Services: `/services/{service-name}`
- AI: `/ai` or `/ai/{ai-feature}`
- Products: `/products/{product-name}`
- Company: `/company/{section}`

See `/REFACTORING_PLAN.md` for complete URL mapping.

---

## Execution Order

1. ✅ Prerequisites (already done)
2. **Step 1** - Move shared components (use bash commands above)
3. **Step 2** - Move pages (use bash commands above)
4. **Step 3** - Extract Home page (manual - copy from Desktop72.tsx)
5. **Step 4** - Update navigation (manual - update each navigation component)
6. **Step 5** - Update RootLayout (manual - add header)
7. **Step 6** - Clean up (use bash commands above)
8. **Step 7** - Test everything

**Estimated time:** 2-4 hours for complete migration

---

After completing all steps, your codebase will have:
- ✅ Proper routing with React Router
- ✅ Clean page-first folder structure
- ✅ Separated shared vs page-specific components
- ✅ No custom event navigation
- ✅ Direct URL access to all pages
- ✅ Browser history working correctly
- ✅ GitHub-ready structure
