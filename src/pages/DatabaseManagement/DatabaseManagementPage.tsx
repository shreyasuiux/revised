import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import { DatabaseManagementPage as DatabaseManagementPageComponent } from '@/app/components/DatabaseManagementPage';

export default function DatabaseManagementPage() {
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
    <DatabaseManagementPageComponent
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
