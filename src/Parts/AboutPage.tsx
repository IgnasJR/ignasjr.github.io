import React, {useRef } from 'react';
import HighlightHeading from '../Components/HighlightHeading';

const AboutPage = ({ projectsRef }: { projectsRef: React.RefObject<HTMLDivElement> }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <div ref={projectsRef} className='snap-start h-screen pt-20'>
      <HighlightHeading text='About me'/>
    </div>
  );
}

export default AboutPage;
