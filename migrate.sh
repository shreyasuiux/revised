#!/bin/bash

# Code Refactoring Automation Script
# This script automates the file movement portion of the refactoring

echo "🚀 Starting Code Refactoring..."
echo ""

# Step 1: Create directory structure
echo "📁 Creating directory structure..."
mkdir -p /src/components
mkdir -p /src/components/Layout
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

echo "✅ Directory structure created"
echo ""

# Step 2: Move shared components
echo "📦 Moving shared components..."
mv /src/app/components/Footer.tsx /src/components/Footer.tsx 2>/dev/null
mv /src/app/components/MobileNav.tsx /src/components/MobileNav.tsx 2>/dev/null
mv /src/app/components/SearchModal.tsx /src/components/SearchModal.tsx 2>/dev/null
mv /src/app/components/ThemeToggle.tsx /src/components/ThemeToggle.tsx 2>/dev/null
mv /src/app/components/GetStartedModal.tsx /src/components/GetStartedModal.tsx 2>/dev/null
mv /src/app/components/VideoModal.tsx /src/components/VideoModal.tsx 2>/dev/null
mv /src/app/components/WhoWeAreDropdown.tsx /src/components/WhoWeAreDropdown.tsx 2>/dev/null
mv /src/app/components/Logo.tsx /src/components/Logo.tsx 2>/dev/null
mv /src/app/components/GradientCTAButton.tsx /src/components/GradientCTAButton.tsx 2>/dev/null
mv /src/app/components/HeroCard.tsx /src/components/HeroCard.tsx 2>/dev/null
mv /src/app/components/LayoutWrapper.tsx /src/components/LayoutWrapper.tsx 2>/dev/null
mv /src/app/components/ResponsiveWrapper.tsx /src/components/ResponsiveWrapper.tsx 2>/dev/null
mv /src/app/components/ThemedSection.tsx /src/components/ThemedSection.tsx 2>/dev/null
mv /src/app/components/CTASection.tsx /src/components/CTASection.tsx 2>/dev/null
mv /src/app/components/AwardsSection.tsx /src/components/AwardsSection.tsx 2>/dev/null
mv /src/app/components/CounterAnimation.tsx /src/components/CounterAnimation.tsx 2>/dev/null
mv /src/app/components/ProductsSection.tsx /src/components/ProductsSection.tsx 2>/dev/null
mv /src/app/components/UseCasesSection.tsx /src/components/UseCasesSection.tsx 2>/dev/null

# Move folders
mv /src/app/components/ui /src/components/ui 2>/dev/null
mv /src/app/components/figma /src/components/figma 2>/dev/null

echo "✅ Shared components moved"
echo ""

# Step 3: Move page components
echo "📄 Moving page components..."
mv /src/app/components/CloudPracticePage.tsx /src/pages/CloudPractice/CloudPracticePage.tsx 2>/dev/null
mv /src/app/components/DigitalEngineeringPage.tsx /src/pages/DigitalEngineering/DigitalEngineeringPage.tsx 2>/dev/null
mv /src/app/components/BigDataPage.tsx /src/pages/BigData/BigDataPage.tsx 2>/dev/null
mv /src/app/components/AppModernizationPage.tsx /src/pages/AppModernization/AppModernizationPage.tsx 2>/dev/null
mv /src/app/components/SecurityPage.tsx /src/pages/Security/SecurityPage.tsx 2>/dev/null
mv /src/app/components/DatabaseManagementPage.tsx /src/pages/DatabaseManagement/DatabaseManagementPage.tsx 2>/dev/null
mv /src/app/components/ERPTestingPage.tsx /src/pages/ERPTesting/ERPTestingPage.tsx 2>/dev/null
mv /src/app/components/AIPage.tsx /src/pages/AI/AIPage.tsx 2>/dev/null
mv /src/app/components/BFSIAgentsPage.tsx /src/pages/BFSIAgents/BFSIAgentsPage.tsx 2>/dev/null
mv /src/app/components/BrandManagementPage.tsx /src/pages/BrandManagement/BrandManagementPage.tsx 2>/dev/null
mv /src/app/components/AgentStudioPage.tsx /src/pages/AgentStudio/AgentStudioPage.tsx 2>/dev/null
mv /src/app/components/AtlasAPIManagerPage.tsx /src/pages/AtlasAPIManager/AtlasAPIManagerPage.tsx 2>/dev/null
mv /src/app/components/OttohmVideoPage.tsx /src/pages/OttohmVideo/OttohmVideoPage.tsx 2>/dev/null
mv /src/app/components/ITSMTicketingPage.tsx /src/pages/ITSMTicketing/ITSMTicketingPage.tsx 2>/dev/null
mv /src/app/components/AIOpsPage.tsx /src/pages/AIOps/AIOpsPage.tsx 2>/dev/null
mv /src/app/components/SmartContractsPage.tsx /src/pages/SmartContracts/SmartContractsPage.tsx 2>/dev/null
mv /src/app/components/CaseStudiesPage.tsx /src/pages/CaseStudies/CaseStudiesPage.tsx 2>/dev/null
mv /src/app/components/OurTeamPage.tsx /src/pages/OurTeam/OurTeamPage.tsx 2>/dev/null
mv /src/app/components/AboutUsPage.tsx /src/pages/AboutUs/AboutUsPage.tsx 2>/dev/null
mv /src/app/components/PartnersPage.tsx /src/pages/Partners/PartnersPage.tsx 2>/dev/null
mv /src/app/components/CareersPage.tsx /src/pages/Careers/CareersPage.tsx 2>/dev/null
mv /src/app/components/NewsUpdatesPage.tsx /src/pages/NewsUpdates/NewsUpdatesPage.tsx 2>/dev/null

echo "✅ Page components moved"
echo ""

echo "🎉 File migration complete!"
echo ""
echo "⚠️  NEXT STEPS (MANUAL):"
echo "1. Update imports in all moved files to use '@/components/' and '@/pages/'"
echo "2. Add 'export default' to all page components"
echo "3. Extract Home page content from Desktop72.tsx to /src/pages/Home/HomePage.tsx"
echo "4. Update navigation components (Footer, MobileNav) to use React Router"
echo "5. Create Header component from Desktop72.tsx navigation"
echo "6. Update RootLayout.tsx to include Header"
echo "7. Test all routes"
echo "8. Remove Desktop72.tsx when everything works"
echo ""
echo "📖 See MIGRATION_INSTRUCTIONS.md for detailed steps"
