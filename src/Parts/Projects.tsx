import HighlightHeading from "../Components/HighlightHeading"
import ProjectCard from "../Components/ProjectCard";
import playerjr from '../Images/PlayerJR.png';

const Projects = ({ projectsRef }: { projectsRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <div ref={projectsRef} className='snap-start sm:pt-20 pt-20 pb-28'>
            <HighlightHeading text='Projects' />
            <ProjectCard 
                projectImage={playerjr} 
                projectName="PlayerJR" 
                projectDescription="A platform for users to share their audiobooks, listen to them and track their progress across their devices" 
                appLink="https://audio.ignaskan.me" 
                repoLink="https://github.com/IgnasJR/audiobook-player"
                isLeft={true}
            />
            <ProjectCard 
                projectImage={playerjr} 
                projectName="PlayerJR" 
                projectDescription="A platform for users to share their audiobooks, listen to them and track their progress across their devices" 
                appLink="https://audio.ignaskan.me" 
                repoLink="https://github.com/IgnasJR/audiobook-player"
                isLeft={false}
            />
        </div>
    );
}
export default Projects;