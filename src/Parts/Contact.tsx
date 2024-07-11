const Contact = ({contactRef}: {contactRef: React.RefObject<HTMLDivElement>}) => {
    return (
        <div ref={contactRef} className='snap-center h-screen'>
        <h1>Contact</h1>
        </div>
    );
    }

export default Contact