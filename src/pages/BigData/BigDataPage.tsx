import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import { BigDataPage as BigDataPageComponent } from '@/app/components/BigDataPage';

export default function BigDataPage() {
  const navigate = useNavigate();
  const navigation = usePageNavigation();

  const handleClose = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGrowWithUsClick = () => {
    navigate('/company/careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BigDataPageComponent
      onClose={handleClose}
      onServiceClick={navigation.onServiceClick}
      onAIClick={navigation.onAIClick}
      onProductClick={navigation.onProductClick}
      onGrowWithUsClick={handleGrowWithUsClick}
      onWhoWeAreItemClick={navigation.onWhoWeAreItemClick}
      onLogoClick={navigation.onLogoClick}
      onGetStartedClick={() => console.log('Get Started clicked')}
    />
  );
}
