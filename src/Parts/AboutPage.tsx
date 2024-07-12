import HighlightHeading from '../Components/HighlightHeading';
import tailWindLogo from '../Images/Tailwind_CSS_Logo.svg';
import mySqlLogo from '../Images/mysql-logo-svgrepo-com.svg';
import dockerLogo from '../Images/docker-icon.svg';
import reactLogo from '../Images/React-icon.svg';
import nodeLogo from '../Images/Node.js_logo.svg';
import javascriptLogo from '../Images/Unofficial_JavaScript_logo_2.svg';


const AboutPage = ({ projectsRef }: { projectsRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div ref={projectsRef} className='snap-start sm:pt-20 sm:h-full pt-16 pb-14 text-center content-center'>
      <HighlightHeading text='About me' />
      <div className='sm:grid grid-cols-2 items-center pt-5'>
        <div className='w-3/4 mx-auto text-white font-mont'>
          <p className='sm:text-2xl'>
            I am a full stack web developer from Lithuania. I have a passion for web development and love to create websites and web applications. I have experience with React, Node.js, MySQL, Tailwind and more. I am always eager to learn new technologies and improve my skills.
          </p>
          <p className='sm:text-2xl mt-4'>
            I am currently looking for new opportunities to work as a web developer. If you have a project you would like me to work on, or if you have a job offer, feel free to contact me.
          </p>
        </div>
        <div className='flex flex-col items-center sm:pt-20 pt-10 gap-8 sm:pb-0 pb-16'>
          <div className='flex flex-wrap justify-center gap-x-12 gap-y-5'>
            <img src={dockerLogo} alt="Docker" className='sm:w-32 sm:h-32 h-20'/>
            <img src={reactLogo} alt="React" className='sm:w-32 sm:h-32 h-20'/>
            <img src={nodeLogo} alt="Node.js" className='sm:w-32 sm:h-32 h-20'/>
            <img src={tailWindLogo} alt="TailWind" className='sm:w-32 sm:h-32 h-20'/>
            <img src={javascriptLogo} alt="JavaScript" className='sm:w-32 sm:h-32 h-20'/>
            <img src={mySqlLogo} alt="MySQL" className='sm:w-32 sm:h-32 h-24'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
