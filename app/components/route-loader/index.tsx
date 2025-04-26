import { useState, useEffect } from 'react';
import { useLocation, useNavigation } from 'react-router';

/**
 * RouteLoader component that displays a modern loading indicator during route transitions
 */
const RouteLoader = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  // Track location changes to show loader
  useEffect(() => {
    // Show loader when navigation state is "loading"
    if (navigation.state === "loading") {
      setIsLoading(true);
    } else {
      // Hide loader with a small delay to ensure smooth transitions
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [navigation.state, location]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-nav-height left-0 w-full z-[1000]">
      {/* Primary loader bar */}
      <div 
        className="h-[3px] bg-gradient-to-r from-primary via-secondary to-primary"
        style={{
          width: '100%',
          animation: 'shimmerEffect 2s linear infinite',
          backgroundSize: '200% 100%',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 0 10px rgba(20, 88, 134, 0.5), 0 0 20px rgba(20, 88, 134, 0.3)'
        }}
      />
      
      {/* Glow effect */}
      <div 
        className="absolute top-0 left-0 w-full h-[3px] opacity-70"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
          animation: 'glowEffect 1.5s ease-in-out infinite',
          transform: 'translateX(-100%)',
        }}
      />
    </div>
  );
};

export default RouteLoader; 