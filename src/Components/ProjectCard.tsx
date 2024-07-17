import RedHoverOverLink from "./RedHoverOverLink";

function projectCard({ projectImage, projectName, projectDescription, appLink, repoLink }: 
    { projectImage: string, projectName: string, projectDescription: string, appLink: string, repoLink: string }) {
  return (
    <div className="flex items-center font-mont font-semibold w-full sm:text-inherit text-sm">
        <div className="flex items-center justify-start h-fit sm:py-10 py-5  w-fit ml-[5%] pr-20 bg-purple-700">
            <img src={projectImage} alt="PlayerJR" className="h-4/5 w-auto" />
        </div>
        <div className="flex flex-col items-start -ml-16 justify-center sm:w-3/6 w-4/5">
            <h1 className="text-white text-4xl pb-7">{projectName}</h1>
            <p className="text-white sm:w-1/2 w-full">{projectDescription}</p>
            <RedHoverOverLink href={appLink}>Live App</RedHoverOverLink>
            <RedHoverOverLink href={repoLink}>Read more</RedHoverOverLink>
        </div>
    </div>
  );
}

export default projectCard;