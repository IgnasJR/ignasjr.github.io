const AboutPage = ({projectsRef}: {projectsRef: React.RefObject<HTMLDivElement>})  => {
    return (
        <div ref={projectsRef} className='snap-start h-[200vh]'>
        <h1>About Page</h1>
        <p>This is the about page</p>
        </div>
    )
    }

export default AboutPage