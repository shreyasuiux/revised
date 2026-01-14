import React from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('@/pages/Home/HomePage'));
const CloudPracticePage = React.lazy(() => import('@/pages/CloudPractice/CloudPracticePage'));
const DigitalEngineeringPage = React.lazy(() => import('@/pages/DigitalEngineering/DigitalEngineeringPage'));
const BigDataPage = React.lazy(() => import('@/pages/BigData/BigDataPage'));
const AppModernizationPage = React.lazy(() => import('@/pages/AppModernization/AppModernizationPage'));
const SecurityPage = React.lazy(() => import('@/pages/Security/SecurityPage'));
const DatabaseManagementPage = React.lazy(() => import('@/pages/DatabaseManagement/DatabaseManagementPage'));
const ERPTestingPage = React.lazy(() => import('@/pages/ERPTesting/ERPTestingPage'));
const AIPage = React.lazy(() => import('@/pages/AI/AIPage'));
const BFSIAgentsPage = React.lazy(() => import('@/pages/BFSIAgents/BFSIAgentsPage'));
const BrandManagementPage = React.lazy(() => import('@/pages/BrandManagement/BrandManagementPage'));
const AgentStudioPage = React.lazy(() => import('@/pages/AgentStudio/AgentStudioPage'));
const AtlasAPIManagerPage = React.lazy(() => import('@/pages/AtlasAPIManager/AtlasAPIManagerPage'));
const OttohmVideoPage = React.lazy(() => import('@/pages/OttohmVideo/OttohmVideoPage'));
const ITSMTicketingPage = React.lazy(() => import('@/pages/ITSMTicketing/ITSMTicketingPage'));
const AIOpsPage = React.lazy(() => import('@/pages/AIOps/AIOpsPage'));
const SmartContractsPage = React.lazy(() => import('@/pages/SmartContracts/SmartContractsPage'));
const CaseStudiesPage = React.lazy(() => import('@/pages/CaseStudies/CaseStudiesPage'));
const OurTeamPage = React.lazy(() => import('@/pages/OurTeam/OurTeamPage'));
const AboutUsPage = React.lazy(() => import('@/pages/AboutUs/AboutUsPage'));
const PartnersPage = React.lazy(() => import('@/pages/Partners/PartnersPage'));
const CareersPage = React.lazy(() => import('@/pages/Careers/CareersPage'));
const NewsUpdatesPage = React.lazy(() => import('@/pages/NewsUpdates/NewsUpdatesPage'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  // Services Routes
  {
    path: '/services/cloud-practice',
    element: <CloudPracticePage />,
  },
  {
    path: '/services/digital-engineering',
    element: <DigitalEngineeringPage />,
  },
  {
    path: '/services/big-data',
    element: <BigDataPage />,
  },
  {
    path: '/services/app-modernization',
    element: <AppModernizationPage />,
  },
  {
    path: '/services/security',
    element: <SecurityPage />,
  },
  {
    path: '/services/database-management',
    element: <DatabaseManagementPage />,
  },
  {
    path: '/services/erp-testing',
    element: <ERPTestingPage />,
  },
  // AI Routes
  {
    path: '/ai',
    element: <AIPage />,
  },
  {
    path: '/ai/bfsi-agents',
    element: <BFSIAgentsPage />,
  },
  {
    path: '/ai/brand-management',
    element: <BrandManagementPage />,
  },
  // Products Routes
  {
    path: '/products/agent-studio',
    element: <AgentStudioPage />,
  },
  {
    path: '/products/atlas-api-manager',
    element: <AtlasAPIManagerPage />,
  },
  {
    path: '/products/ottohm-video',
    element: <OttohmVideoPage />,
  },
  {
    path: '/products/itsm-ticketing',
    element: <ITSMTicketingPage />,
  },
  {
    path: '/products/aiops',
    element: <AIOpsPage />,
  },
  {
    path: '/products/smart-contracts',
    element: <SmartContractsPage />,
  },
  // Company Routes
  {
    path: '/company/case-studies',
    element: <CaseStudiesPage />,
  },
  {
    path: '/company/our-team',
    element: <OurTeamPage />,
  },
  {
    path: '/company/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/company/partners',
    element: <PartnersPage />,
  },
  {
    path: '/company/careers',
    element: <CareersPage />,
  },
  {
    path: '/company/news',
    element: <NewsUpdatesPage />,
  },
];
