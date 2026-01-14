import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import NewsUpdatesPageComponent from '@/app/components/NewsUpdatesPage';

export default function NewsUpdatesPage() {
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
    <NewsUpdatesPageComponent
      onClose={handleClose}
      onServiceClick={navigation.onServiceClick}
      onAIClick={(aiPageTitle: string) => navigation.onAIClick()}
      onProductClick={navigation.onProductClick}
      onGrowWithUsClick={handleGrowWithUsClick}
      onWhoWeAreItemClick={navigation.onWhoWeAreItemClick}
      onLogoClick={navigation.onLogoClick}
    />
  );
}
