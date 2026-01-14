import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { MobileNav } from '@/app/components/MobileNav';
import { SearchModal } from '@/app/components/SearchModal';
import { ThemeProvider } from '@/app/contexts/ThemeContext';

export function RootLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
        {/* Main content area - pages will render here */}
        <Outlet />
        
        {/* Global Footer */}
        <Footer />
        
        {/* Global Search Modal */}
        <SearchModal 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}