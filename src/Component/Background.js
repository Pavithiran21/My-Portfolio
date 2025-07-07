import React, { useEffect, useCallback, useMemo, useRef, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export const Background = () => {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
    (container) => {
      containerRef.current = container;
      window.particlesContainer = container;
    },
    [containerRef]
  );

  const options = useMemo(
    () => ({
      fullScreen: {
        zIndex: -1,
      },
      particles: {
        number: {
          value: 100,
        },
        links: {
          enable: true,
          opacity: 0.2,
        },
        move: {
          enable: true,
        },
      },
      themes: [
        {
          name: 'light',
          default: {
            value: true,
            auto: true,
            mode: 'light',
          },
          options: {
            background: {
              color: '#00005C',
            },
            particles: {
              color: {
                value: '#000000',
              },
              links: {
                color: '#000045',
              },
            },
          },
        },
        {
          name: 'dark',
          default: {
            value: true,
            auto: true,
            mode: 'dark',
          },
          options: {
            background: {
              color: '#00005C',
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
              },
            },
          },
        },
      ],
    }),
    []
  );

 

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </>
  );
};


