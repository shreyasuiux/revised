import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import BFSIAgentsPageComponent from '@/app/components/BFSIAgentsPage';

export default function BFSIAgentsPage() {
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
    <BFSIAgentsPageComponent
      onClose={handleClose}
      onServiceClick={navigation.onServiceClick}
      onAIClick={(aiPageTitle: string) => navigation.onAIClick()}
      onProductClick={navigation.onProductClick}
      onGrowWithUsClick={handleGrowWithUsClick}
      onWhoWeAreItemClick={navigation.onWhoWeAreItemClick}
      onLogoClick={navigation.onLogoClick}
      onGetStartedClick={() => console.log('Get Started clicked')}
    />
  );
}
