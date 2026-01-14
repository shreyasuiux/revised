/**
 * Import Path Update Patterns
 * 
 * Use these regex patterns in your code editor's find/replace feature
 * to update import statements after files have been moved.
 */

// ============================================================================
// PATTERN 1: Update relative imports in shared components
// ============================================================================
// Use this in files moved to /src/components/
//
// FIND:
// from ['"]\.\.\/([^'"]+)['"]
//
// REPLACE:
// from '@/components/$1'
//
// Example:
// Before: from '../Logo'
// After: from '@/components/Logo'

// ============================================================================
// PATTERN 2: Update relative imports for context
// ============================================================================
// Use this when importing context files
//
// FIND:
// from ['"]\.\.\/\.\.\/app\/contexts\/([^'"]+)['"]
//
// REPLACE:
// from '@/app/contexts/$1'
//
// Example:
// Before: from '../../app/contexts/ThemeContext'
// After: from '@/app/contexts/ThemeContext'

// ============================================================================
// PATTERN 3: Update relative imports for utils
// ============================================================================
// Use this when importing utility files
//
// FIND:
// from ['"]\.\.\/\.\.\/app\/utils\/([^'"]+)['"]
//
// REPLACE:
// from '@/app/utils/$1'
//
// Example:
// Before: from '../../app/utils/navigationHelper'
// After: from '@/app/utils/navigationHelper'

// ============================================================================
// PATTERN 4: Update relative imports for imports folder (SVGs, assets)
// ============================================================================
// Use this when importing from the imports folder
//
// FIND:
// from ['"]\.\.\/\.\.\/imports\/([^'"]+)['"]
//
// REPLACE:
// from '@/imports/$1'
//
// Example:
// Before: from '../../imports/svg-bngkqqxd9l'
// After: from '@/imports/svg-bngkqqxd9l'

// ============================================================================
// PATTERN 5: Update self-referencing component imports
// ============================================================================
// Use this in files that import other components from same directory
//
// FIND:
// from ['"]\.\/([^'"]+)['"]
//
// REPLACE:
// from '@/components/$1'
//
// Example:
// Before: from './Logo'
// After: from '@/components/Logo'

// ============================================================================
// PATTERN 6: Update UI component imports
// ============================================================================
// Use this for shadcn/ui components
//
// FIND:
// from ['"]\.\.\/ui\/([^'"]+)['"]
//
// REPLACE:
// from '@/components/ui/$1'
//
// Example:
// Before: from '../ui/button'
// After: from '@/components/ui/button'

// ============================================================================
// PATTERN 7: Add default export to page components
// ============================================================================
// Use this to convert named exports to default exports in page files
//
// FIND:
// export function ([A-Z][a-zA-Z]+Page)\(\)
//
// REPLACE:
// export default function $1()
//
// Example:
// Before: export function CloudPracticePage()
// After: export default function CloudPracticePage()

// ============================================================================
// PATTERN 8: Update page imports in other files
// ============================================================================
// If any file imports a page component
//
// FIND:
// from ['"]@\/app\/components\/([A-Z][a-zA-Z]+Page)['"]
//
// REPLACE:
// from '@/pages/$1/$1'
//
// Example:
// Before: from '@/app/components/CloudPracticePage'
// After: from '@/pages/CloudPracticePage/CloudPracticePage'

// ============================================================================
// VS CODE INSTRUCTIONS
// ============================================================================
// 
// 1. Open VS Code
// 2. Press Ctrl+Shift+F (Windows/Linux) or Cmd+Shift+F (Mac) for global find
// 3. Click the ".*" icon to enable regex mode
// 4. Paste the FIND pattern in the search box
// 5. Click the ">" icon next to search to expand replace
// 6. Paste the REPLACE pattern in the replace box
// 7. Use the ".*(include)" filter to target specific files if needed
//    Example: **/*.tsx, **/*.ts
// 8. Click "Replace All" or review and replace individually

// ============================================================================
// WEBSTORM / INTELLIJ INSTRUCTIONS
// ============================================================================
//
// 1. Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
// 2. Check "Regex" checkbox
// 3. Paste the FIND pattern in "Text to find"
// 4. Paste the REPLACE pattern in "Replace with"
// 5. In "File name filter" enter: *.tsx, *.ts
// 6. Click "Replace All" or "Find" to review first

// ============================================================================
// MANUAL UPDATE CHECKLIST
// ============================================================================
//
// For each moved file, update these import categories:
//
// [SHARED COMPONENTS]
// ✓ Logo, Footer, MobileNav, SearchModal, etc.
// Pattern: '@/components/ComponentName'
//
// [PAGE COMPONENTS]
// ✓ CloudPracticePage, AIPage, etc.
// Pattern: '@/pages/PageName/PageName'
//
// [UI COMPONENTS]
// ✓ button, card, dialog, etc.
// Pattern: '@/components/ui/component-name'
//
// [CONTEXTS]
// ✓ ThemeContext
// Pattern: '@/app/contexts/ContextName'
//
// [UTILS]
// ✓ navigationHelper, themeUtils
// Pattern: '@/app/utils/utilName'
//
// [ASSETS/IMPORTS]
// ✓ SVG imports, figma assets
// Pattern: '@/imports/asset-name'
//
// [FIGMA ASSETS]
// ✓ Keep as-is: "figma:asset/hash.png"
// NO CHANGES NEEDED

// ============================================================================
// EXAMPLE FILE TRANSFORMATION
// ============================================================================

// BEFORE (CloudPracticePage.tsx in /src/app/components/)
/*
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { GetStartedModal } from './GetStartedModal';
import { ThemeProvider } from '../contexts/ThemeContext';
import { navigationHelper } from '../utils/navigationHelper';
import svgPaths from '../../imports/svg-bngkqqxd9l';
import imgBackground from 'figma:asset/abc123.png';

export function CloudPracticePage() {
  return <div>...</div>;
}
*/

// AFTER (CloudPracticePage.tsx in /src/pages/CloudPractice/)
/*
import { motion } from 'motion/react';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { GetStartedModal } from '@/components/GetStartedModal';
import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { navigationHelper } from '@/app/utils/navigationHelper';
import svgPaths from '@/imports/svg-bngkqqxd9l';
import imgBackground from 'figma:asset/abc123.png';

export default function CloudPracticePage() {
  return <div>...</div>;
}
*/

// ============================================================================
// AUTOMATION TIP
// ============================================================================
//
// You can run all patterns sequentially in VS Code:
// 1. Enable regex mode
// 2. Run Pattern 1 (replace relative imports for components)
// 3. Run Pattern 2 (replace relative imports for contexts)
// 4. Run Pattern 3 (replace relative imports for utils)
// 5. Run Pattern 4 (replace relative imports for imports folder)
// 6. Run Pattern 5 (replace self-referencing imports)
// 7. Run Pattern 6 (replace UI component imports)
// 8. Run Pattern 7 (add default exports to pages)
//
// Total time: ~15-30 minutes for all files

export {};
