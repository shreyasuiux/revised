/**
 * Navigation Mappings
 * 
 * Central location for all navigation route mappings in the application.
 * Maps user-facing titles to actual URL routes.
 */

export const SERVICE_ROUTES: Record<string, string> = {
  'Cloud Practice': '/services/cloud-practice',
  'Digital & Product Engineering': '/services/digital-engineering',
  'Digitalization': '/services/digital-engineering', // Alias
  'AI Agents': '/ai',
  'Big Data': '/services/big-data',
  'App Modernization': '/services/app-modernization',
  'Security': '/services/security',
  'Database Management': '/services/database-management',
  'ERP & Testing': '/services/erp-testing',
};

export const PRODUCT_ROUTES: Record<string, string> = {
  'Atlas API Manager': '/products/atlas-api-manager',
  'Agent Studio': '/products/agent-studio',
  'Ottohm Video': '/products/ottohm-video',
  'Oflohm Video': '/products/ottohm-video', // Typo alias
  'ITSM Ticketing': '/products/itsm-ticketing',
  'AI Ops Platform': '/products/aiops',
  'AIOps': '/products/aiops', // Short alias
  'Smart Contracts': '/products/smart-contracts',
};

export const COMPANY_ROUTES: Record<string, string> = {
  'About Us': '/company/about-us',
  'Our Team': '/company/our-team',
  'Partners': '/company/partners',
  'Careers': '/company/careers',
  'News': '/company/news',
  'Case Studies': '/company/case-studies',
  'Contact': '/', // TODO: Add dedicated contact page
};

export const AI_ROUTES: Record<string, string> = {
  'AI': '/ai',
  'AI Page': '/ai',
  'BFSI Agents': '/ai/bfsi-agents',
  'Brand Management': '/ai/brand-management',
};

/**
 * Get route from service title
 */
export function getServiceRoute(title: string): string | null {
  return SERVICE_ROUTES[title] || null;
}

/**
 * Get route from product title
 */
export function getProductRoute(title: string): string | null {
  return PRODUCT_ROUTES[title] || null;
}

/**
 * Get route from company/who-we-are item
 */
export function getCompanyRoute(item: string): string | null {
  return COMPANY_ROUTES[item] || null;
}

/**
 * Get route from AI page title
 */
export function getAIRoute(title: string): string | null {
  return AI_ROUTES[title] || null;
}
