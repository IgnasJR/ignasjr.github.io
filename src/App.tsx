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
    <div className="bg-slate-900">
      
      <Starting startingRef={startingRef} scrollTo={scrollTo}/>
      <Header isSticky={isSticky} scrollTo={scrollTo} />
      <div ref={projectsRef} className='h-screen'>
        <h1>Hello World</h1>
      </div>
      <div ref={contactRef} className='h-screen'>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
