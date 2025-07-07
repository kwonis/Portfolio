import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // 현재 보이는 섹션 감지
      const sections = ["introduction", "skills", "projects"];
      const headerHeight = 70;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop - headerHeight - 100;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "introduction", label: "About", icon: "👋" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "projects", label: "Projects", icon: "💼" },
  ];

  return (
    <header
      className={`
        fixed top-0 w-full z-[1000] py-2.5 text-white
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-black/90 shadow-[0px_4px_6px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            : "bg-black/50 shadow-none"
        }
      `}
    >
      <nav>
        <ul className="list-none p-0 m-0 flex justify-center">
          {navItems.map((item) => (
            <li key={item.id} className="mx-[15px]">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  bg-transparent border-none text-lg font-bold 
                  p-2.5 cursor-pointer rounded-[5px] flex items-center gap-2
                  transition-all duration-300 ease-in-out
                  hover:bg-white/20 hover:scale-110
                  ${
                    activeSection === item.id
                      ? "text-[#f8d64e] bg-white/10 scale-105"
                      : "text-white hover:text-[#f8d64e]"
                  }
                `}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
