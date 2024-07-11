import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Starting from './Components/Starting';
import AboutPage from './Components/AboutPage';
import Contact from './Components/Contact';

function App() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<number>(0);
  const startingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === startingRef.current && entry.isIntersecting) {
          setActiveElement(0);
        } else if (entry.target === projectsRef.current && entry.isIntersecting) {
          setActiveElement(1);
        } else if (entry.target === contactRef.current && entry.isIntersecting) {
          setActiveElement(2);
        }
      });

      if (startingRef.current) {
        setIsSticky(!entries.find(entry => entry.target === startingRef.current)?.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });

    if (startingRef.current) observer.observe(startingRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (startingRef.current) observer.unobserve(startingRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
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
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll' style={{ background: 'linear-gradient(90deg, rgba(10,7,65,1) 0%, rgba(25,23,107,1) 35%, rgba(1,37,56,1) 100%)' }}>
      <Starting startingRef={startingRef} scrollTo={scrollTo} />
      <Header isSticky={isSticky} scrollTo={scrollTo} activeElement={activeElement} setActiveElement={setActiveElement} />
      <AboutPage projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
