import { useEffect, useRef, useState } from "react";

const HighlightHeading = ({ text } : {text:string}) => {
    const textRef = useRef<HTMLHeadingElement>(null);
    const [textWidth, setTextWidth] = useState(0);
  
    useEffect(() => {
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth);
      }
    }, []);
  
    return (
        <div className="relative flex items-center justify-center">
          <h2 ref={textRef} className="text-white text-4xl font-mont sm:text-7xl font-medium z-20">{text}</h2>
          <span
            className="absolute bottom-1 h-3 bg-purple-700 z-10"
            style={{
              width: `${(2 / 3) * textWidth}px`,
              transform: 'skewX(-20deg)',
              left: `calc(50% - ${(1 / 3) * textWidth / 2 -20}px)`,
            }}
          ></span>
        </div>
    );
  }

export default HighlightHeading;