import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/Main/Introduction";
import Skills from "../components/Main/Skills";
import Project from "../components/Main/Project";
import { projects } from "../assets/data/projectsData";

const Main: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleOpacity = Math.max(1 - scrollY / window.innerHeight, 0);

  return (
    <div className="w-full m-0 p-0">
      <Header />

      <main className="w-full m-0 p-0">
        {/* 타이틀 섹션 */}
        <section
          className="
            h-screen flex justify-center items-center 
            bg-black text-white text-5xl m-0
            transition-all duration-300 ease-in-out
          "
          style={{
            opacity: titleOpacity,
          }}
        >
          <div>Welcome to My Portfolio</div>
        </section>

        {/* About 섹션 */}
        <section id="introduction" className="bg-white">
          <About />
        </section>

        {/* Skills 섹션 */}
        <section id="skills" className="bg-gradient-to-br from-blue-50 to-indigo-100">
          <Skills />
        </section>

        {/* Projects 섹션 */}
        <section id="projects" className="bg-white">
          {/* 통일된 타이틀 */}
          <div className="flex flex-col items-center justify-center w-full py-10 px-8">
            <h1
              className="
              text-4xl md:text-5xl font-bold text-gray-800 mb-16 
              relative pb-4 text-center
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 
              after:transform after:-translate-x-1/2 after:w-20 after:h-1 
              after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 
              after:rounded-sm
            "
            >
              Projects
            </h1>

            {/* 프로젝트 목록 */}
            <div className="w-full max-w-7xl">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  features={project.features}
                  skills={project.skills}
                  githubLink={project.githubLink}
                  homeLink={project.homeLink}
                  imageUrl={project.imageUrl}
                  achievements={project.achievements}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
