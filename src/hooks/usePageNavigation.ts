import { useNavigate } from 'react-router-dom';
import {
  getServiceRoute,
  getProductRoute,
  getCompanyRoute,
  getAIRoute,
} from '@/utils/navigationMappings';

/**
 * Custom hook for page navigation
 * 
 * Provides navigation handlers that all pages can use consistently.
 * Maps legacy event handler names to React Router navigation.
 */
export function usePageNavigation() {
  const navigate = useNavigate();

  const navigateWithScroll = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    // Service navigation
    onServiceClick: (serviceTitle: string) => {
      const route = getServiceRoute(serviceTitle);
      if (route) {
        navigateWithScroll(route);
      } else {
        console.warn(`No route found for service: ${serviceTitle}`);
      }
    },

    // AI navigation
    onAIClick: () => {
      navigateWithScroll('/ai');
    },

    // Product navigation
    onProductClick: (productTitle: string) => {
      const route = getProductRoute(productTitle);
      if (route) {
        navigateWithScroll(route);
      } else {
        console.warn(`No route found for product: ${productTitle}`);
      }
    },

    // Company/Who We Are navigation
    onWhoWeAreItemClick: (item: string) => {
      const route = getCompanyRoute(item);
      if (route) {
        navigateWithScroll(route);
      } else {
        console.warn(`No route found for company item: ${item}`);
      }
    },

    // Case Studies navigation
    onCaseStudiesClick: () => {
      navigateWithScroll('/company/case-studies');
    },

    // Careers navigation
    onCareersClick: () => {
      navigateWithScroll('/company/careers');
    },

    // Logo click - go home
    onLogoClick: () => {
      navigateWithScroll('/');
    },

    // Direct navigation
    navigateTo: (path: string) => {
      navigateWithScroll(path);
    },

    // Navigate without scroll
    navigateOnly: (path: string) => {
      navigate(path);
    },
  };
}
