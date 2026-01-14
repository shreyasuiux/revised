# Code Refactoring Implementation Plan

## Current Status
✅ React Router installed
✅ Routes configuration created (`/src/routes.tsx`)
✅ RootLayout component created (`/src/components/Layout/RootLayout.tsx`)
✅ App.tsx updated to use React Router

## Directory Structure (Target)

```
/src
├── app
│   ├── App.tsx (✅ Updated - now uses React Router)
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   └── utils/
│       ├── navigationHelper.ts
│       └── themeUtils.ts
├── pages/
│   ├── Home/
│   │   └── HomePage.tsx
│   ├── CloudPractice/
│   │   └── CloudPracticePage.tsx
│   ├── DigitalEngineering/
│   │   └── DigitalEngineeringPage.tsx
│   ├── BigData/
│   │   └── BigDataPage.tsx
│   ├── AppModernization/
│   │   └── AppModernizationPage.tsx
│   ├── Security/
│   │   └── SecurityPage.tsx
│   ├── DatabaseManagement/
│   │   └── DatabaseManagementPage.tsx
│   ├── ERPTesting/
│   │   └── ERPTestingPage.tsx
│   ├── AI/
│   │   └── AIPage.tsx
│   ├── BFSIAgents/
│   │   └── BFSIAgentsPage.tsx
│   ├── BrandManagement/
│   │   └── BrandManagementPage.tsx
│   ├── AgentStudio/
│   │   └── AgentStudioPage.tsx
│   ├── AtlasAPIManager/
│   │   └── AtlasAPIManagerPage.tsx
│   ├── OttohmVideo/
│   │   └── OttohmVideoPage.tsx
│   ├── ITSMTicketing/
│   │   └── ITSMTicketingPage.tsx
│   ├── AIOps/
│   │   └── AIOpsPage.tsx
│   ├── SmartContracts/
│   │   └── SmartContractsPage.tsx
│   ├── CaseStudies/
│   │   └── CaseStudiesPage.tsx
│   ├── OurTeam/
│   │   └── OurTeamPage.tsx
│   ├── AboutUs/
│   │   └── AboutUsPage.tsx
│   ├── Partners/
│   │   └── PartnersPage.tsx
│   ├── Careers/
│   │   └── CareersPage.tsx
│   └── NewsUpdates/
│       └── NewsUpdatesPage.tsx
├── components/ (Shared components)
│   ├── Layout/
│   │   └── RootLayout.tsx (✅ Created)
│   ├── Footer.tsx
│   ├── MobileNav.tsx
│   ├── SearchModal.tsx
│   ├── ThemeToggle.tsx
│   ├── GetStartedModal.tsx
│   ├── VideoModal.tsx
│   ├── WhoWeAreDropdown.tsx
│   ├── Logo.tsx
│   ├── GradientCTAButton.tsx
│   ├── HeroCard.tsx
│   ├── LayoutWrapper.tsx
│   ├── ResponsiveWrapper.tsx
│   ├── ThemedSection.tsx
│   ├── CTASection.tsx
│   ├── AwardsSection.tsx
│   ├── CounterAnimation.tsx
│   ├── ProductsSection.tsx
│   ├── UseCasesSection.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       └── (all UI components)
├── imports/
│   ├── Desktop72.tsx (⚠️ TO BE DEPRECATED - replaced by router)
│   └── (SVG imports)
├── styles/
│   └── (all CSS files)
├── routes.tsx (✅ Created)
└── main.tsx

```

## Migration Steps

### Phase 1: Setup (✅ COMPLETED)
1. ✅ Install react-router-dom
2. ✅ Create routes configuration
3. ✅ Create RootLayout component
4. ✅ Update App.tsx to use React Router

### Phase 2: Move Shared Components (IN PROGRESS)
**Shared components to move to `/src/components/`:**
- Footer.tsx
- MobileNav.tsx
- SearchModal.tsx
- ThemeToggle.tsx
- GetStartedModal.tsx
- VideoModal.tsx
- WhoWeAreDropdown.tsx
- Logo.tsx
- GradientCTAButton.tsx
- HeroCard.tsx
- LayoutWrapper.tsx
- ResponsiveWrapper.tsx
- ThemedSection.tsx
- CTASection.tsx
- AwardsSection.tsx
- CounterAnimation.tsx
- ProductsSection.tsx
- UseCasesSection.tsx
- figma/ folder
- ui/ folder

**Actions:**
- Create `/src/components/` directory
- Move each shared component
- Update all import statements

### Phase 3: Create Pages Structure
**For each page (23 total):**

1. Create page directory under `/src/pages/{PageName}/`
2. Move `{PageName}Page.tsx` from `/src/app/components/` to `/src/pages/{PageName}/`
3. Update imports in the moved file
4. If page has local components, create `components/` subfolder

**Example for CloudPracticePage:**
```
/src/pages/CloudPractice/
├── CloudPracticePage.tsx
└── components/ (if needed)
```

### Phase 4: Extract Home Page Content
Currently, the home page content is embedded in `Desktop72.tsx`. This needs to be:
1. Extracted into `/src/pages/Home/HomePage.tsx`
2. Preserve all UI elements, animations, and styling
3. Update navigation to use React Router's `useNavigate()` and `Link` components

### Phase 5: Update Navigation
**Update components to use React Router navigation:**

1. **Footer.tsx**: Replace custom event handlers with `<Link>` components or `useNavigate()`
2. **MobileNav.tsx**: Update navigation to use `useNavigate()`
3. **WhoWeAreDropdown.tsx**: Update dropdown links to use React Router
4. **All CTAs**: Replace custom navigation with `useNavigate()`

**Example pattern:**
```typescript
// Old way (custom events)
onClick={() => window.dispatchEvent(new CustomEvent('navigate-service', { detail: 'Cloud Practice' }))}

// New way (React Router)
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
onClick={() => navigate('/services/cloud-practice')}

// Or using Link
import { Link } from 'react-router-dom';
<Link to="/services/cloud-practice">Cloud Practice</Link>
```

### Phase 6: Clean Up Asset Paths
**Current:** `import imgBackground from "figma:asset/..."`
**Target:** Keep figma:asset imports as-is (they're virtual modules)

No changes needed for asset imports - `figma:asset` is a special scheme that should be preserved.

### Phase 7: Deprecate Desktop72.tsx
Once all pages are moved and routing is working:
1. Remove `Desktop72.tsx`
2. Remove custom event system
3. Clean up unused imports in App.tsx

### Phase 8: Testing Checklist
- [ ] All 23 pages load correctly
- [ ] Navigation between pages works
- [ ] Browser back/forward buttons work
- [ ] Direct URL access works for all routes
- [ ] Mobile navigation works
- [ ] Footer links work
- [ ] Search modal works
- [ ] Theme toggle persists across navigation
- [ ] All modals (GetStarted, Video) work
- [ ] No broken imports
- [ ] No console errors
- [ ] UI looks identical to original

## URL Mapping

### Services
- `/services/cloud-practice` → CloudPracticePage
- `/services/digital-engineering` → DigitalEngineeringPage
- `/services/big-data` → BigDataPage
- `/services/app-modernization` → AppModernizationPage
- `/services/security` → SecurityPage
- `/services/database-management` → DatabaseManagementPage
- `/services/erp-testing` → ERPTestingPage

### AI
- `/ai` → AIPage
- `/ai/bfsi-agents` → BFSIAgentsPage
- `/ai/brand-management` → BrandManagementPage

### Products
- `/products/agent-studio` → AgentStudioPage
- `/products/atlas-api-manager` → AtlasAPIManagerPage
- `/products/ottohm-video` → OttohmVideoPage
- `/products/itsm-ticketing` → ITSMTicketingPage
- `/products/aiops` → AIOpsPage
- `/products/smart-contracts` → SmartContractsPage

### Company
- `/company/case-studies` → CaseStudiesPage
- `/company/our-team` → OurTeamPage
- `/company/about-us` → AboutUsPage
- `/company/partners` → PartnersPage
- `/company/careers` → CareersPage
- `/company/news` → NewsUpdatesPage

## Implementation Order

1. ✅ Phase 1: Setup
2. **Next: Phase 2** - Move shared components
3. **Then: Phase 3** - Create page structure
4. **Then: Phase 4** - Extract Home page
5. **Then: Phase 5** - Update navigation
6. **Then: Phase 6** - Verify asset paths
7. **Then: Phase 7** - Deprecate old system
8. **Finally: Phase 8** - Test everything

## Notes for Manual Completion

Since this is a large refactoring task, here's how to complete it:

### Moving Each Page (Template)
```bash
# 1. Create page directory
mkdir -p /src/pages/{PageName}

# 2. Move the page file
mv /src/app/components/{PageName}Page.tsx /src/pages/{PageName}/{PageName}Page.tsx

# 3. Update imports in the file
# Change: import { Component } from '../Component'
# To: import { Component } from '@/components/Component'

# 4. Export the component
# Add at the end: export default {PageName}Page;
```

### Moving Shared Components (Template)
```bash
# 1. Create components directory if not exists
mkdir -p /src/components

# 2. Move the component
mv /src/app/components/{ComponentName}.tsx /src/components/{ComponentName}.tsx

# 3. Update all imports across the codebase
# Find all files that import this component and update paths
```

### Critical Files That Need Updates
1. All page files - update imports to use `/src/components/`
2. Footer.tsx - update to use React Router Links
3. MobileNav.tsx - update to use useNavigate()
4. Desktop72.tsx content needs to be split into HomePage

## Completion Status

- [x] React Router setup
- [x] Routes configuration
- [x] Layout component
- [x] App.tsx update
- [ ] Move shared components (0/25)
- [ ] Create page structure (0/23)
- [ ] Extract Home page
- [ ] Update navigation system
- [ ] Remove Desktop72.tsx
- [ ] Final testing

---

**Current Status:** Infrastructure is ready. Next step is to move shared components and then migrate pages.
