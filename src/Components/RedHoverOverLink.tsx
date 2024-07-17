import React from 'react';

function RedBorderLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="w-max p-2 px-4 relative overflow-hidden group m-1">
      <a href={href} className="relative z-10 text-white group-hover:text-black">
        {children}
      </a>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-700 transition-all duration-300 transform origin-bottom group-hover:h-full group-hover:bg-red-500"></div>
    </div>
  );
}

export default RedBorderLink;
