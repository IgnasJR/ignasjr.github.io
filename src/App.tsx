import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Starting from './Components/Starting';

function App() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const startingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (startingRef.current) {
      observer.observe(startingRef.current);
    }

    return () => {
      if (startingRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(startingRef.current);
      }
    };
  }, []);

  const scrollTo = (index: number) => {
    switch (index) {
      case 0:
        startingRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 1:
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll' style={{background: 'linear-gradient(90deg, rgba(10,7,65,1) 0%, rgba(25,23,107,1) 35%, rgba(1,37,56,1) 100%)' }}>
      <Starting startingRef={startingRef} scrollTo={scrollTo} />
      <Header isSticky={isSticky} scrollTo={scrollTo} />
      <div ref={projectsRef} className='snap-center h-screen'>
        <h1>Hello World</h1>
      </div>
      <div ref={contactRef} className='snap-start h-screen'>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
