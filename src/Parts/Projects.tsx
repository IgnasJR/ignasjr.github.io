import HighlightHeading from "../Components/HighlightHeading"
import ProjectCard from "../Components/ProjectCard";
import playerjr from '../Images/PlayerJR.png';
import chatjr from '../Images/chatjr.png';

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
                projectImage={chatjr} 
                projectName="ChatJR" 
                projectDescription="An end-to-end encrypted chat application that allows users to chat with their friends and family securely" 
                appLink="https://chat.ignaskan.me" 
                repoLink="https://github.com/IgnasJR/chatJR"
                isLeft={false}
            />
        </div>
    );
}
export default Projects;