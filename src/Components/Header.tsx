const Header = ({ isSticky, scrollTo, activeElement, setActiveElement}: { 
    isSticky: boolean, 
    scrollTo: (index:number) => void, 
    activeElement: number, 
    setActiveElement: (index:number) => void}) => {
    const menuItems = ["START", "PROJECTS", "CONTACT ME"];

    const goToPart = (index: number) => {
        setActiveElement(index);
        scrollTo(index);
    };

    return (
        <header className={`bg-slate-800 w-full h-14 text-white ${isSticky ? 'top-0 sticky' : ""}`}>
            <nav className="h-full w-full">
                <ul className="h-full w-full flex flex-row items-center justify-end">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`font-mont transition-colors pl-5 pr-5 ${activeElement === index ? "text-purple-600" : ""} hover:text-purple-600`}
                            onClick={() => goToPart(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
