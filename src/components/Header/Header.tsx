import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToParagraph = (paragraphId: string) => {
    const element = document.getElementById(paragraphId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`
        fixed top-0 w-full z-[1000] py-2.5 text-white
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-black/90 shadow-[0px_4px_6px_rgba(0,0,0,0.3)]"
            : "bg-black/50 shadow-none"
        }
      `}
    >
      <nav>
        <ul className="list-none p-0 m-0 flex justify-center">
          <li className="mx-[15px]">
            <button
              onClick={() => scrollToParagraph("paragraph1")}
              className="
                text-white bg-transparent border-none text-lg font-bold 
                p-2.5 cursor-pointer rounded-[5px]
                transition-all duration-300 ease-in-out
                hover:bg-white/20 hover:text-[#f8d64e] hover:scale-110
              "
            >
              About
            </button>
          </li>
          <li className="mx-[15px]">
            <button
              onClick={() => scrollToParagraph("paragraph2")}
              className="
                text-white bg-transparent border-none text-lg font-bold 
                p-2.5 cursor-pointer rounded-[5px]
                transition-all duration-300 ease-in-out
                hover:bg-white/20 hover:text-[#f8d64e] hover:scale-110
              "
            >
              Skills
            </button>
          </li>
          <li className="mx-[15px]">
            <button
              onClick={() => scrollToParagraph("paragraph3")}
              className="
                text-white bg-transparent border-none text-lg font-bold 
                p-2.5 cursor-pointer rounded-[5px]
                transition-all duration-300 ease-in-out
                hover:bg-white/20 hover:text-[#f8d64e] hover:scale-110
              "
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
