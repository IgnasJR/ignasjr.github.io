const Starting = ({startingRef, scrollTo} : {startingRef: any, scrollTo: (index:number) => void}) => {
    // todo: add a proper type for startingRef
    return (
        <div ref={startingRef}>
        <div className='h-screen flex justify-center items-center flex-col'>
          <h1 className='text-center w-3/4 font-mont text-7xl font-medium text-white'>
            Hello <span className='text-purple-600'>World!</span>
          </h1>
          <button className='rounded-2xl mt-6 p-6 w-1/2 border-purple-600 border-[1px] text-white text-lg' onClick={() => scrollTo(1)}>
            See my work
            <svg className='h-7 inline pl-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='rgb(147 51 234 / var(--tw-border-opacity))' d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </button>
        </div>
      </div>
    )
}
export default Starting