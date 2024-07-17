import HighlightHeading from "../Components/HighlightHeading"
import ProjectCard from "../Components/ProjectCard";
import playerjr from '../Images/PlayerJR.png';

const Projects = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <div ref={contactRef} className='snap-start sm:pt-20 sm:h-[200%] pt-16 pb-14'>
            <HighlightHeading text='Projects' />
            <ProjectCard 
                projectImage={playerjr} 
                projectName="PlayerJR" 
                projectDescription="A platform for users to share their audiobooks, listen to them and track their progress across their devices" 
                appLink="https://audio.ignaskan.me" 
                repoLink="https://github.com/IgnasJR/audiobook-player"
            />
        </div>
    );
}
export default Projects;