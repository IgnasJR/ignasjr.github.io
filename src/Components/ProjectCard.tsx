import RedHoverOverLink from "./RedHoverOverLink";

function ProjectCard({ projectImage, projectName, projectDescription, appLink, repoLink, isLeft }: 
    { projectImage: string, projectName: string, projectDescription: string, appLink: string, repoLink: string, isLeft: boolean }) {
  return (
    <div className={`flex items-center font-mont font-semibold w-full sm:text-inherit text-sm mb-14 ${isLeft ? '' : 'flex-row-reverse'}`}>
        <div className={`flex items-center justify-start h-fit sm:py-10 py-5 w-fit ${isLeft ? 'ml-[5%] pr-20' : 'mr-[5%] pl-20'} bg-purple-700`}>
            <img src={projectImage} alt="PlayerJR" className="h-2/5 w-auto" />
        </div>
        <div className={`flex flex-col z-20 ${isLeft ? '-ml-16 mr-3 items-start' : '-mr-16 ml-3 items-end'} justify-center sm:w-3/6 w-4/5`}>
            <h1 className="text-white text-4xl pb-7">{projectName}</h1>
            <p className="text-white sm:w-1/2 w-full">{projectDescription}</p>
            <RedHoverOverLink href={appLink}>Live App</RedHoverOverLink>
            <RedHoverOverLink href={repoLink}>Read more</RedHoverOverLink>
        </div>
    </div>
  );
}

export default ProjectCard;
