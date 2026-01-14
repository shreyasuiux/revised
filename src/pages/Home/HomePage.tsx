import React, { useState } from 'react';
import Desktop2 from '@/imports/Desktop72';
import { usePageNavigation } from '@/hooks/usePageNavigation';

export default function HomePage() {
  const navigation = usePageNavigation();
  const [showGetStarted, setShowGetStarted] = useState(false);

  // Get Started handler
  const handleGetStartedClick = () => {
    setShowGetStarted(true);
  };

  return (
    <Desktop2
      onServiceClick={navigation.onServiceClick}
      onAIClick={navigation.onAIClick}
      onProductClick={navigation.onProductClick}
      onWhoWeAreItemClick={navigation.onWhoWeAreItemClick}
      onCaseStudiesClick={navigation.onCaseStudiesClick}
      onGetStartedClick={handleGetStartedClick}
      onLogoClick={navigation.onLogoClick}
    />
  );
}
