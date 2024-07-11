const Starting = ({ startingRef, scrollTo }: { startingRef: React.RefObject<HTMLDivElement>, scrollTo: (index: number) => void }) => {
    return (
        <div ref={startingRef} className='snap-start h-screen flex justify-center items-center flex-col'>
                <h1 className='text-center w-3/4 font-mont sm:text-7xl text-5xl font-medium text-white'>
                    Hello, I'm
                <span className='text-purple-600'> Ignas</span>
                    .
                </h1>
                <h2 className='text-center w-3/4 font-mont sm:text-4xl text-2xl font-medium text-white mt-4'>
                    An aspiring full stack web developer.
                </h2>
                <button
                    className={`backdrop-blur-3xl relative sm:w-1/4 w-1/2 flex text-purple-600 rounded-2xl mt-6 p-3 sm:p-6 border-purple-600 
                    flex-col items-center border-[1px] text-lg hover:scale-110 
                    transition-transform duration-300 ease-in-out sm:flex-row justify-center focus:animate-ping-once`}
                    onClick={() => scrollTo(1)}>
                    <p>About me</p>
                    <svg className='h-7 inline pl-0 sm:pl-4 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill='rgb(147 51 234 / var(--tw-border-opacity))' d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                    </svg>
                    <span className='absolute inset-0 border-2 border-purple-700 rounded-2xl transform scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'></span>
                    <span className='absolute inset-0 border-2 border-purple-700 rounded-2xl transform scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75'></span>
                </button>
            </div>
    )
}
export default Starting