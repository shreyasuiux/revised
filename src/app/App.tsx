import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/routes';
import { RootLayout } from '@/components/Layout/RootLayout';

// Create browser router with layout
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: routes,
  },
]);

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
    <div className="text-white text-xl">Loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}