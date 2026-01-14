import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OurTeamPage as OurTeamPageComponent } from '@/app/components/OurTeamPage';

export default function OurTeamPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCareersClick = () => {
    navigate('/company/careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <OurTeamPageComponent
      onClose={handleClose}
      onCareersClick={handleCareersClick}
      onGetStartedClick={() => console.log('Get Started clicked')}
    />
  );
}
