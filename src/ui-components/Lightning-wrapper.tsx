import { useState, useEffect } from 'react';
import Lightning from './Lightning';

const LightningWrapper = () => {
  const [xOffset, setXOffset] = useState(0); // mobile default

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)'); // Tailwind 'lg'

    const handleChange = () => {
      setXOffset(mediaQuery.matches ? -1.0 : 0);
    };

    handleChange(); // inizializza
    mediaQuery.addEventListener('change', handleChange); // ascolta i cambi

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <Lightning
      hue={220}
      xOffset={xOffset}
      speed={0.5}
      intensity={0.7}
      size={1}
    />
  );
};

export default LightningWrapper;
