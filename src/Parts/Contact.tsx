import HighlightHeading from "../Components/HighlightHeading";
import LinkedInSVG from '../Images/linkedin.svg';
import EmailSVG from '../Images/email.svg';
import GitHubSVG from '../Images/github.svg';

const Contact = ({contactRef}: {contactRef: React.RefObject<HTMLDivElement>}) => {
    return (
        <div ref={contactRef} className='text-white snap-start h-screen flex justify-center items-center flex-col text-6xl'>
            <HighlightHeading text="Contact me"/>
            <div className="flex">
                <a href="https://www.linkedin.com/in/ignas-jonas-kanapinskas-8b6898278/">
                    <img src={LinkedInSVG} alt="" className='h-16 m-4' />
                </a>
                <a href="mailto:ignas.kanapinskas@gmail.com">
                    <img src={EmailSVG} alt="" className='h-16 m-4'/>
                </a>
                <a href="https://github.com/IgnasJR">
                    <img src={GitHubSVG} alt="" className='h-16 m-4'/>
                </a>
            </div>
        </div>
    );
    }

export default Contact